// grab environment variables
require("dotenv").config();
// IMPORT EXPRESS
const express = require("express");
// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection");
// GET PORT FROM ENV OR DEFAULT PORT
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const HomeRouter = require("./routes/home.js");
// Sessions Middleware
const session = require("express-session"); // create session cookies
const connect = require("connect-mongodb-session")(session) // store cookies in mongo

/////////////////////////////////////
// Create Express Application Object
/////////////////////////////////////

const app = express();

/////////////////////////////////////
// Set the View Engine
/////////////////////////////////////
app.set("view engine", "ejs");

/////////////////////////////////////
// Setup Middleware
/////////////////////////////////////
app.use(express.static("public")); // serve the public folder as static
app.use(express.json()); // Parse json bodies
app.use(express.urlencoded({ extended: true })); //parse bodies from form submissions

// SESSION MIDDLEWARE REGISTRATION (adds req.session property)
app.use(
  session({
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    saveUninitialized: true, // create session regardless of changes
    resave: true, //save regardless of changes
    store: new connect({
      uri: process.env.MONGODB_URL,
      databaseName: "sessions",
      collection: "sessions",
    }),
  })
);

/////////////////////////////////////
// Routes and Routers
/////////////////////////////////////

//HomeRouter
app.use("/", HomeRouter);

/////////////////////////////////////
// App Listener
/////////////////////////////////////
app.listen(PORT, () =>
  console.log("Server Launch", `Listening on Port http://localhost:${PORT}`)
);
