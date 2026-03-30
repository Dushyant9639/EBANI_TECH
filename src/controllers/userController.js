const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {

  const { name, email, phone, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    phone,
    password: hashed,
    role: "user",
    createdBy: req.user.id,
  });

  res.json(user);
};

exports.getUsers = async (req, res) => {

  const users = await User.find({
    role: "user",
    createdBy: req.user.id,
  });

  res.json(users);
};

exports.updateUser = async (req, res) => {

  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(user);
};

exports.deleteUser = async (req, res) => {

  await User.findByIdAndDelete(req.params.id);

  res.json({ message: "User deleted" });
};