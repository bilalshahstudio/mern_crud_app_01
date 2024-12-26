const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const userRoute = require("./routes/userRoute");
const cors = require("cors");
app.use(cors());

//import user from models
// const User = require("./models/userModel");

//created path in .env file and import in mongoose connection
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected successfuly");
    app.listen(process.env.PORT || 8000, (error) => {
      if (error) console.log(error);
      console.log("running successfuly at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(userRoute);
