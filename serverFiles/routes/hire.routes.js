const hireController = require("../controllers/hire.controller");

module.exports = function (app) {
  app.get("/api", hireController.index);
  app.post("/api/hire", hireController.newClient);
};
