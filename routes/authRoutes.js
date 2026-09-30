const express = require("express");
const wrapAsync = require("../middleware/wrapAsync");
const isLoggedIn = require("../middleware/auth");
const {
    showRegisterForm,
    registerUser,
    showLoginForm,
    loginUser,
    logoutUser
} = require("../controllers/authController");

const router = express.Router();

router.get("/profile", isLoggedIn, (req, res) => {
    res.send("You are logged in");
});

router.get("/register", showRegisterForm);
router.post("/register", wrapAsync(registerUser));

router.get("/login", showLoginForm);
router.post("/login", wrapAsync(loginUser));

router.post("/logout", logoutUser);

module.exports = router;