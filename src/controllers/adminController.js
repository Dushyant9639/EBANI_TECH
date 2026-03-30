const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createAdmin = async (req, res) => {

  const { name, email, phone, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const admin = await User.create({
    name,
    email,
    phone,
    password: hashed,
    role: "admin",
  });

  res.json(admin);
};

exports.getAdmins = async (req, res) => {

  const admins = await User.find({ role: "admin" });

  res.json(admins);
};

exports.updateAdmin = async (req, res) => {

  const admin = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(admin);
};

exports.deleteAdmin = async (req, res) => {

  await User.findByIdAndDelete(req.params.id);

  res.json({ message: "Admin deleted" });
};