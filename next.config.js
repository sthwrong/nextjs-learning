require("dotenv").config({
  path: "./env/.env.development",
});

module.exports = {
  env: {
    NEXT_ENV: process.env.NEXT_ENV ? process.env.NEXT_ENV : "development",
  },
};
