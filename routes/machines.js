const express = require("express");
const router = express.Router();

const machines = require("../controllers/machines");

module.exports = (app) => {
  app.get("/", machines.getMachines);
  app.get("/getUpdated", machines.updateMachines);
};
