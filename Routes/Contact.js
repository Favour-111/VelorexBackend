const express = require("express");
const ContactModel = require("../Model/ContactModel");
const ContactRoute = express.Router(); // Use express.Router()

// Add user
ContactRoute.post("/addContact", async (req, res) => {
  try {
    const { name, email, Message } = req.body;

    const user = await ContactModel.create({ name, email, Message });

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
ContactRoute.get("/getContacts", async (req, res) => {
  try {
    const users = await ContactModel.find();
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

module.exports = ContactRoute;
