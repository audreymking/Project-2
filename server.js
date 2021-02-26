const express = require("express");

const hbRouter = require("./routes/handlebars-routes.js");
// const authorRouter = require('./routes/author-api-routes.js');
// const apiRouter = require('./routes/post-api-routes.js');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");


// const routes = require("./controllers/rendevoodle2_controller.js");

const hbRouter = require("./routes/handlebars-routes.js");

app.use("/", hbRouter);

// apiRouter(app);
// app.use(routes);


// Static directory
app.use(express.static("public"));

// Invoke routes
app.use("/", hbRouter);
// authorRouter(app);
// apiRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
