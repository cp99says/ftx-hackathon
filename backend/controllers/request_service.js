const mechanic_model = require("./../models/mechanic_profile");
const user_model = require("./../models/user");

exports.request_service = async (req, res) => {
  try {
    const activate_request = req.body.request;
    const new_request = await mechanic_model.findOneAndUpdate(
      { mechanic_id: req.body.mechanic_id },
      req.body,
      { new: true }
    );
    res.json({
      status: "success",
      new_request: new_request,
      message:
        "you have registered for service successfully, mechanic will try to reach you soon",
    });
  } catch (error) {
    res.json({ error });
  }
};
//https://github.com/cp99says/ftx-hackathon.git

exports.patch_user_fcm_token = async (req, res) => {
  try {
    const patch_token = await user_model.findOneAndUpdate(
      { user_id: req.body.user_id },
      { fcm_token: req.body.fcm_token },
      { new: true }
    );
    res.json({
      status: "success",
      message: "token updated",
      patch_token,
    });
  } catch (error) {
    res.json({ error });
  }
};

exports.patch_mechanic_fcm_token = async (req, res) => {
  try {
    const patch_token = await mechanic_model.findOneAndUpdate(
      { mechanic_id: req.body.mechanic_id },
      { fcm_token: req.body.fcm_token },
      { new: true }
    );
    res.json({
      status: "success",
      message: "token updated",
      patch_token,
    });
  } catch (error) {
    res.json({ error });
  }
};
