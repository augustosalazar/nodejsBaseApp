const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hola desde Docker y Node.js</h1>");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
