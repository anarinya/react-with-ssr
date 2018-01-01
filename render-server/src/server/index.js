import 'babel-polyfill';
import express from 'express';
import { renderer, createStore } from './helpers';

// Setup express app
const app = express();

// Allow outside access to public dir
app.use(express.static('public'));

// Setup routes
app.get('*', (req, res) => {
  const store = createStore();

  // Some logic to initialize and load data into the store

  res.send(renderer(req, store));
});

app.listen(4444, () => {
  console.log('Listening on port 4444.');
})