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
      opts.headersg['x-forwarded-host'] = 'localhost:3000';
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
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(4444, () => {
  console.log('Listening on port 4444.');
})