const mongoose = require("mongoose");

const database = async () => {
  try {
    mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
      })
      .then(() => console.log("database connected!!!"))
      .catch((error) => {
        console.error(error.stack);
        process.exit(1);
      });
  } catch (error) {
    console.log(error.stack);
  }
};

module.exports = database;
