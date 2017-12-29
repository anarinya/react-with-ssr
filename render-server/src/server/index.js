import express from 'express';
import { renderer } from './helpers';

// Setup express app
const app = express();

// Allow outside access to public dir
app.use(express.static('public'));

// Setup routes
app.get('/', (req, res) => {
  res.send(renderer(req));
});

app.listen(4444, () => {
  console.log('Listening on port 4444.');
})