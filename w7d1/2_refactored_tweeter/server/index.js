"use strict";

// Basic express setup:

const PORT          = 8081;
const express       = require("express");
const app           = express();

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
