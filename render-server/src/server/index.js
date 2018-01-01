import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import { renderer, createStore } from './helpers';
import routes from '../client/routes';

// Setup express app
const app = express();

// Allow outside access to public dir
app.use(express.static('public'));

// Setup routes
app.get('*', (req, res) => {
  const store = createStore();

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