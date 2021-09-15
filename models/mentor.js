const mongoose = require("mongoose");
const Mentor = mongoose.model("mentors", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  contact: String,
  experince: {
    type: String,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Mentor;
