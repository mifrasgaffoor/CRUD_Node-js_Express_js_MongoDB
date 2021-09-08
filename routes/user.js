const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is user api");
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  try {
    const useruser = new User({
      name: req.body.name,
      age: req.body.age,
      contact: req.body.contact,
    });

    const data = await useruser.save();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json({ msg: "error occured" });
  }
});

router.get("/get/:age", async (req, res) => {
  console.log(req.params.age);
  try {
    const useruser = await User.findOne({ age: req.params.age });
    if (useruser) {
      res.json(useruser);
      return;
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "user not found" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const useruser = await User.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        age: req.body.age,
      },
      { new: true }
    );
    res.json(useruser);
  } catch (error) {
    res.json({ msg: "user not found" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const useruser = await User.findByIdAndDelete({
      _id: req.params.id,
    });
    res.json(useruser);
  } catch (error) {
    res.json({ msg: "error occured while delete data" });
  }
});

module.exports = router;
