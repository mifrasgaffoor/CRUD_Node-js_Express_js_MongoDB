const express = require("express");
const Mentor = require("../models/mentor");
const router = express.Router();



router.get("/", (req, res) => {
  res.send("This is mentor api");
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  try {
    const mentoruser = new Mentor({
      name: req.body.name,
      age: req.body.age,
      contact: req.body.contact,
      experince: req.body.experince,
    });

    const data = await mentoruser.save();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json({ msg: "error occured" });
  }
});

router.get("/get/:name", async (req, res) => {
  console.log(req.params.name);
  try {
    const mentoruser = await Mentor.findOne({ name: req.params.name });
    if (mentoruser) {
      res.json(mentoruser);
      return;
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "mentor no found" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const mentoruser = await Mentor.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        age: req.body.age,
      },
      { new: true }
    );

    res.json(mentoruser);
  } catch (error) {
    console.log(error);
    res.json({ msg: "update error" });
  }
});

router.delete("/delete/:name", async (req, res) => {
  try {
    const mentoruser = await Mentor.findOneAndDelete({
      name: req.params.name,
    });

    res.json(mentoruser);
  } catch (error) {
    res.json({ msg: "error occured" });
  }
});
router.get("/all", async (req, res) => {
  try {
    const mentoruser = await Mentor.find({});
    res.json(mentoruser);
  } catch (error) {
    res.json({ msg: "error" });
  }
});
module.exports = router;
