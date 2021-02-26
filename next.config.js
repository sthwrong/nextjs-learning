const ENV = process.env.NEXT_ENV ? process.env.NEXT_ENV : "development";

require("dotenv").config({
  path: "./env/.env.development",
});

module.exports = {
  env: {
    NEXT_ENV: ENV,
    HIEP_TEST_ENV: process.env.HIEP_TEST_ENV,
  },
};
