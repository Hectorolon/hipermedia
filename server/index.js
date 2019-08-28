const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(3000, () => {
    console.log("Conectado");
});

app.get('/', (req, res) => {
    res.send(`
      <html>
        <head></head>
        <body>
          <h1>Hello world</h1>
        </body>
      </html>
    `);
  });