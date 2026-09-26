const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

const PORT = 3000;

connectDB();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});


app.listen(PORT, () => {
    console.log(`GoBikes server running on http://localhost:${PORT}`);
});