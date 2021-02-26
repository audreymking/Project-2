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

// apiRouter(app);
// app.use(routes);

// Static directory
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Invoke routes
app.use("/", hbRouter);
// authorRouter(app);
// apiRouter(app);

// const db = require("./models");

// Syncing our sequelize models and then starting our Express app
app.listen(PORT, () => {
  return console.log(`App listening on: http://localhost:${PORT}`);
});
