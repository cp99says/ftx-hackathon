const express = require("express");
const app = express();
const register = require("./../controllers/register");

app.route("/register_user").post(register.register_user);
app.route("/register_mechanic").post(register.register_mechanic);

app.route("/getMechanicDataById/:id").get(register.getMechanicData);

module.exports = app;
