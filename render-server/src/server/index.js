import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { renderer, createStore } from './helpers';
import routes from '../client/routes';

// Setup express app
const app = express();

// Send requests to /api to API server
app.use('/api', 
  proxy('http://react-ssr-api.herokuapp.com', {
    // Handle potential security errors with google oauth flow to API server
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);

// Allow outside access to public dir
app.use(express.static('public'));

// Setup routes
app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        // Always resolve inner promise
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    // If redirect received, navigate user to it
    if (context.url) {
      return res.redirect(303, context.url);
    }

    // If the notFound route is hit, set server 404 status
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
})