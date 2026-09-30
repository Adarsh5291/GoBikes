const bcrypt = require("bcrypt");
const User = require("../models/User");

const showLoginForm = (req, res) => {
    res.render("auth/login");
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).send("Invalid email or password");
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
        return res.status(400).send("Invalid email or password");
    }

    req.session.userId = user._id;

    res.send("Login successful");
};

const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Could not log out");
        }

        res.redirect("/login");
    });
};

const showRegisterForm = (req, res) => {
    res.render("auth/register");
};

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).send("Email is already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    req.session.userId = user._id;

    res.send("Registration successful");
};

module.exports = {
    showRegisterForm,
    registerUser,
    showLoginForm,
    loginUser,
    logoutUser
};