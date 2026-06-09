const express = require('express')
const app = express()
const port = 3000

app.get("/api/", (req, res) => res.send("Hola Soy Backen"));
app.get("/api/send", (req, res) => {
  res.send("GET Pagina de Prueba");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))