const express = require("express");
const router = express.Router();
const create = require("../app/controllers/EventsController");

router.post("/api/addEvent", create);

module.exports = router;
