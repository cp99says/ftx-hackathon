const express = require("express");
const app = express();
const user_model = require("./../models/user");
const mechanic_model = require("./../models/mechanic_profile");
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

exports.register_mechanic = async (req, res) => {
  try {
    const name = req.body.name;
    const phone = req.body.phone;
    const address = req.body.address;
    const location = req.body.location;
    const coordinates = req.body.coordinates;

    const user = new mechanic_model({
      name: name,
      phone: phone,
      mechanic_id: customAlphabet("1234567890abcdef", 10)(),
      address: address,
      location: location,
      coordinates: coordinates,
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
