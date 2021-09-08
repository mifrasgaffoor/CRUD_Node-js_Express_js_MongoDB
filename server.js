const express = require("express");
const ConnetDB = require("./config/db");
const user = require("./routes/user");
const mentor = require("./routes/mentor");
const app = express();

app.use(express.json());
//DB Connection
ConnetDB();

//Routes api
app.use("/user", user);
app.use("/mentor", mentor);

//Methods
app.get("/", (req, res) => {
  res.send("hey this is home api");
});
app.listen(5000, () => {
  console.log("Server has been started");
});
