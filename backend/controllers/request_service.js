const mechanic_model = require("./../models/mechanic_profile");
const user_model = require("./../models/user");
var axios = require("axios");

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

exports.add_service = async (req, res) => {
  try {
    const data = await mechanic_model.updateOne(
      { mechanic_id: req.body.mechanic_id },
      {
        $push: {
          active_requests: req.body.request,
        },
      },
      { new: true }
    );
    res.json({
      data,
    });
  } catch (error) {
    res.json({ error });
  }
};
async function sendNotification(token) {
  var data = JSON.stringify({
    to: token,
    collapse_key: "type_a",
    priority: "high",
    notification: {
      body: "New vehicle service request",
      title: "New Service Request",
    },
  });
  var config = {
    method: "post",
    url: "https://fcm.googleapis.com/fcm/send",
    headers: {
      Authorization:
        "Bearer AAAAHAqavWU:APA91bE_-nY4MGn8Vx0YVDBQ6jKIwwlKri0IpXSgZFrwrXfRMJu-H_nHwDbsuB_aThRL7AwOY9WskNfFwGcf7-aoUWHcw5KDbMXIuanyWZL4SdlJgE2tF9pnKo-jbNwigDg_yK2GcXiN",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
exports.set_service_false = async (req, res) => {
  try {
    let mechID = req.body.mechID;
    let serviceID = req.body.serviceID;
    const mechData = await mechanic_model.findOne({
      mechanic_id: mechID,
    });

    let resData = mechData.active_requests.filter((data) => {
      return data._id == serviceID;
    });
    const id = resData[0]._id;
    const updatedData = {
      "active_requests.$.service_active": false,
    };
    const valData = await mechanic_model.updateOne(
      { "active_requests._id": id },
      { $set: updatedData }
    );

    // sendNotification(mechData.fcm_token);
    res.json({ valData });
  } catch (error) {
    res.json({ error });
  }
};
