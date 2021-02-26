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

// Requiring our models for syncing
const db = require("./models");
const hbRouter = require("./routes/handlebars-routes.js");

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Invoke routes
// htmlRouter(app);
// authorRouter(app);
// apiRouter(app);
app.use("/", hbRouter);

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/admin-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    return console.log(`App listening on: http://localhost:${PORT}`);
  });
});
