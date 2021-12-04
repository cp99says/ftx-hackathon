const express = require("express");
const app = express();
const register = require("./../controllers/register");
const request_service = require("./../controllers/request_service");

app.route("/register_user").post(register.register_user);
app.route("/register_mechanic").post(register.register_mechanic);
app.route("/request_service").patch(request_service.request_service);

module.exports = app;
