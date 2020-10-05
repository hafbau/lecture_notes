"use strict";


const PORT        = process.env.PORT || 8080;
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();


const db         = require("./lib/in-memory-db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const DataHelpers = require("./lib/data-helpers.js")(db);
const tweetsRoutes = require("./api/tweets.js")(DataHelpers);
app.use("/tweets", tweetsRoutes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

