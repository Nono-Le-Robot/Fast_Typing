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

module.exports.updateData = async (req, res) => {
  const user = await userModel.findOne({ username: req.body.username });

  if (req.body.round > user.maxRound) {
    user.maxRound = req.body.round;
    console.log(user.maxRound);
  }
  user.score = req.body.score;
  user.keyPerSecond = req.body.speed;
  user.totalMiss = req.body.totalMiss;
  user.totalGood = req.body.totalGood;
  user.accuracy = req.body.accuracy;
  user.playingTime = req.body.playingTime;
  await user
    .save()
    .then((user) => {
      res.status(200).send("data updated");
    })
    .catch((error) => res.status(401).send(error.message));
};
