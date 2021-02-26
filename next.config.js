require("dotenv").config({
  path:
    `./env/.env.${process.env.NEXT_ENV}`,
});

module.exports = {
  env: {
    CHECK_ENV: process.env.NEXT_PUBLIC_CHECK_ENV,
  },
};
