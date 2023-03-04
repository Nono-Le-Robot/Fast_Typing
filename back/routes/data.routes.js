const router = require("express").Router();
const dataController = require("../controllers/data.controller");

//route data
router.post("/my-data", dataController.getMyData);

module.exports = router;
