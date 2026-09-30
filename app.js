const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const bikeRoutes = require("./routes/bikeRoutes");

dotenv.config();

const app = express();

const PORT = 3000;

connectDB();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/bikes", bikeRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Rathika server running on http://localhost:${PORT}`);
});