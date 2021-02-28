const express = require("express");

const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// const htmlRouter = require('./routes/html-routes.js');
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/admin-api-routes.js")(app);
require("./routes/review-api-routes.js")(app);

const db = require("./models");

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    return console.log(`App listening on: http://localhost:${PORT}`);
  });
});
