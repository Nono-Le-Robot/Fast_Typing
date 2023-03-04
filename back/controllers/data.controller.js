const userModel = require("../models/auth.model.js");

module.exports.getMyData = async (req, res) => {
  userModel
    .findOne({ username: req.body.username })
    .select("-password")
    .then((user) => {
      if (!user) {
        return res.json({ msg: "User not found", status: false });
      } else {
        res.send(user);
      }
    })
    .catch((error) => res.status(401).send(error.message));
};
