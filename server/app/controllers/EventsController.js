const Events = require("../models/Event");

const create = (req, res, next) => {
  const { firstName, lastName, email, eventDate } = req.body;
  const event = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    eventDate: eventDate,
  };

  Events.create(event)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json({msgt: err.message, error: "Validation error"});
    });
};

module.exports = create;