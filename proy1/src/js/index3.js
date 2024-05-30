const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/user", (req, res) => {
  res.json({
    name: "oscar",
    lastName: "Acuña",
    address: {
      city: "Valparaíso",
      street: "morris",
    },
  });
});
app.get("/isAlive", (req, res) => {
  res.sendStatus(204)
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./foto-curso.webp", {
    root: __dirname,
  });
});

app.listen(3000);
console.log("express escuchando en 3000");
