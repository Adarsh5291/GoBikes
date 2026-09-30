const express = require("express");
const wrapAsync = require("../middleware/wrapAsync");
const { getAllBikes, getBikeDetails } = require("../controllers/bikeController");

const router = express.Router();

router.get("/", wrapAsync(getAllBikes));

router.get("/:id", wrapAsync(getBikeDetails));

module.exports = router;