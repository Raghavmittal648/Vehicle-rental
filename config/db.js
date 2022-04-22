const mongoose = require("mongoose");

const DBConnection = () => {
  mongoose.connect(process.env.MONGO, {
    useNewUrlParser: "true",
  });

  mongoose.connection.on("error", (err) => {
    console.log("err", err);
  });
  mongoose.connection.once("connected", (err, res) => {
    console.log("Connection Successful");
  });
};

module.exports = DBConnection;
