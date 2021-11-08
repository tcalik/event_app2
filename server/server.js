const app = require("./app");

const sequelize = require("./config/database-setup")

sequelize
  //.sync({force : true}) to drop tables on every restart
  .sync()
  .then(() => {
    app.listen(process.env.NODE_DOCKER_PORT, () => {
      console.log("App listening on port " + process.env.NODE_DOCKER_PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
