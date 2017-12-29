import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Home } from './client/components';

// Setup express app
const app = express();

// Allow outside access to public dir
app.use(express.static('public'));

// Setup routes
app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(4444, () => {
  console.log('Listening on port 4444.');
})