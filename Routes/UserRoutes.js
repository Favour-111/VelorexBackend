const express = require("express");
const SubScribe = require("../Model/SubScribe");
const UserRoute = express.Router(); // Use express.Router()

// Add user
UserRoute.post("/addUser", async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await SubScribe.create({ name, email });

    res.send({
      success: true,
      message: "User subscribed successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error subscribing user",
      error: error.message,
    });
  }
});

// Get all users
UserRoute.get("/getUser", async (req, res) => {
  try {
    const users = await SubScribe.find();
    res.send({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
});

module.exports = UserRoute;
