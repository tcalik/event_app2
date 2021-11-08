const Sequelize = require("sequelize");
const { development } = require("./database");

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    dialect: "mysql",
    host: development.host,
    timezone: development.timezone,
  }
);

module.exports = sequelize;
