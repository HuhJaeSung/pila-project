const express = require("express");

const app = express();

const db = require("./models");

const { sequelize } = db;

app.use(express.json());

app.get("./api/members", async (req, res) => {
  const id = await sequelize.findAll();
  res.send(id);
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Pila-Server is listening...");
});
