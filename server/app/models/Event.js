const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../config/database-setup");

const Events = sequelize.define("events", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "First name cannot be empty"
      },
      notNull: {
        msg: "First name must be provided"
      }
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Last name cannot be empty"
      },
      notNull: {
        msg: "Last name must be provided"
      }
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Email should be passed in email format"
      },
      notEmpty: {
        msg: "Email cannot be empty"
      },
      notNull: {
        msg: "Email must be provided"
      }
    },
  },
  eventDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: {
        msg: "Incorrect date format"
      },
      notEmpty: {
        msg: "Date cannot be empty"
      },
      notNull: {
        msg: "Date must be provided"
      }
    },
  },
});

module.exports = Events;
