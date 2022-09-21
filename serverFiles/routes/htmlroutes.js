// html routes
const path = require("path");

// ROUTES

module.exports = function (app) {
    // INDEX HTML
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/index.html"));
    });

    // CREATE Contact HTML
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/contact.html"));
    });

     // CREATE About HTML
     app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/about.html"));
    });

      // CREATE projects HTML
      app.get("/projects", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/projects.html"));
    });
};
