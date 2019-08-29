const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Conectado");
});

app.get('/', (req, res) => {
    res.send(`
      <html>
        <head></head>
        <body>
          <h1>Bye world</h1>
        </body>
      </html>
    `);
  });