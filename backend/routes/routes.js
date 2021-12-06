const express = require("express");
const request_service = require("../controllers/request_service");
const app = express();
const register = require("./../controllers/register");

app.route("/register_user").post(register.register_user);
app.route("/register_mechanic").post(register.register_mechanic);
app.route("/request_service").patch(request_service.request_service);
app.route("/getMechanicDataById/:id").get(register.getMechanicData);
app.route("/user_fcm_token").patch(request_service.patch_user_fcm_token);
app
  .route("/mechanic_fcm_token")
  .patch(request_service.patch_mechanic_fcm_token);

app.route("/add_new_request").post(request_service.add_service);
app.route("/set_service_false").patch(request_service.set_service_false);
module.exports = app;
