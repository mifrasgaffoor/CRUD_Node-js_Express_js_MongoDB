const mongoose = require("mongoose");

const url =
  "mongodb+srv://mifras:<enter your passwordhere>@cluster0.3bxrs.mongodb.net/user-mentor?retryWrites=true&w=majority";

const ConnetDB = async () => {
  try {
    const con = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnetDB;
