///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");


///////////////////////////////
// Router Specific Middleware
////////////////////////////////

///////////////////////////////
// Router Routes
////////////////////////////////

// SIGNUP "/auth/signup"
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

module.exports = router;
