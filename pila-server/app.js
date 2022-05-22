const express = require("express");

const app = express();

const db = require("./models");

const { sequelize } = db;

app.use(express.json());

app.get("./api/members", async (req, res) => {
  const { position } = req.query;
});
