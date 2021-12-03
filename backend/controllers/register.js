const express = require("express");
const user_model = require("./../models/user");
const mechanic = require("./../models/mechanic_profile");
const { customAlphabet } = require("nanoid");

exports.register_user = async (req, res) => {
  try {
    const name = req.body.name;
    const phone = req.body.phone;
    const address = req.body.address;

    const user = new user_model({
      name: name,
      phone: phone,
      user_id: customAlphabet("1234567890abcdef", 10)(),
      address: address,
    });

    const data = await user.save();
    res.json({
      status: "success",
      message: "user registered sucessfully",
      data,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};
