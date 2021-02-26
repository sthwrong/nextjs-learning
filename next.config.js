const ENV = process.env.NEXT_ENV ? process.env.NEXT_ENV : "development";

require("dotenv").config({
  path:
    ENV === "production" ? "env/.env.production" : "env/.env.development",
});

module.exports = {
  env: {
    NEXT_ENV: ENV,
  },
};
