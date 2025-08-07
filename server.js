const mongoose = require("mongoose");
const express = require("express");
const UserRoute = require("./Routes/UserRoutes");
const app = express();
const port = 5000;
const env = require("dotenv");
const cors = require("cors");
const ContactRoute = require("./Routes/Contact");
env.config();
app.use(express.json());
app.use(cors());
app.use(UserRoute);
app.use(ContactRoute);
mongoose.connect(process.env.URL, {});
app.get("/", (req, res) => {
  res.send({
    message: "mongoDb has be connected",
  });
});
app.listen(port, () => {
  console.log("app listening to port 5000");
});
