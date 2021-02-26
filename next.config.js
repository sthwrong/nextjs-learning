require("dotenv").config({
  path:
    `./env/.env.${process.env.NEXT_ENV.toLowerCase()}`,
    debug: true
});

module.exports = {
  env: {
    NEXT_ENV: process.env.NEXT_ENV,
    HIEP_TEST_ENV: process.env.HIEP_TEST_ENV,
  },
};
