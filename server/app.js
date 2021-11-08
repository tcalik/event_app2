const express = require("express");
const app = express();
const cors = require("cors");
const webRoutes = require("./routes/web");
const errorController = require("./app/controllers/ErrorController");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(webRoutes);
app.use(errorController.pageNotFound);

app.get("/", (req, res) => {
});

module.exports = app;
