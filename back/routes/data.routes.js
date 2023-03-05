const router = require("express").Router();
const dataController = require("../controllers/data.controller");

//route data
router.post("/my-data", dataController.getMyData);
router.post("/update-data", dataController.updateData);

module.exports = router;
