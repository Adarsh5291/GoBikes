const express = require("express");
const wrapAsync = require("../middleware/wrapAsync");
const { getAllBikes } = require("../controllers/bikeController");

const router = express.Router();

router.get("/", wrapAsync(getAllBikes));

module.exports = router;