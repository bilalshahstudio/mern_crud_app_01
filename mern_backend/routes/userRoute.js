const express = require("express");
// const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/userModel");

//these are api's to interact with mongoDB

//to add data

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userAdded = await User.create({ name: name, email: email, age: age });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: error.message });
  }
});

//to get all users

router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
});

//to get single user by id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
});

//to delete user by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
});

//to update user by id
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
