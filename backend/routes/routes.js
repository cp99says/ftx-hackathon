const express = require("express");
const app = express();
const register = require("./../controllers/register");

app.route("/register_user").post(register.register_user);

module.exports = app;
