/// grab environment variables
require("dotenv").config()
/// IMPORT MONGOOSE
const mongoose = require("mongoose")
// IMPORT MERCED LOGGER FOR COLORFUL LOGS
const MONGODB_URL = process.env.MONGODB_URL;

///////////////////////////////////
// Mongoose Configuration Object to Avoid Warnings
///////////////////////////////////
const config = {useNewUrlParser: true, useUnifiedTopology: true}

///////////////////////////////////
// Making the Database Connection
///////////////////////////////////
mongoose.connect(MONGODB_URL, config)

///////////////////////////////////
// Handling Connection Events
///////////////////////////////////
mongoose.connection
// Event for When Connection Opens
.on("open", () => console.log("STATUS", "Connected to Mongo"))
// Event for When Connection Closes
.on("close", () => console.log("STATUS", "Disconnected from Mongo"))
// Event for Connection Errors
.on("error", (error) => console.log("ERROR", error))

///////////////////////////////////
// Exporting Our Connection
///////////////////////////////////
module.exports = mongoose