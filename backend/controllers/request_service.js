const mechanic_model = require("./../models/mechanic_profile");

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
