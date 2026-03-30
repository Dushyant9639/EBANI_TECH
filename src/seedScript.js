const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/ebani_tech");

const createSuperAdmin = async () => {
  try {

    const existing = await User.findOne({ role: "superadmin" });

    if (existing) {
      console.log("Super Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("123456", 10);

    const superAdmin = await User.create({
      name: "Super Admin",
      email: "super@admin.com",
      phone: "9999999999",
      password: hashedPassword,
      role: "superadmin"
    });

    console.log("Super Admin created:", superAdmin.email);

    process.exit();

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createSuperAdmin();