const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const dotEnvFilePath = path.resolve(__dirname, "../.env." + ENV);

require("dotenv").config({ path: dotEnvFilePath });

module.exports = ENV;
