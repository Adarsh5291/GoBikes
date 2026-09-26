const Bike = require("../models/Bike");

const getAllBikes = async (req, res) => {
    const bikes = await Bike.find().sort({ createdAt: -1 });

    res.render("bikes", { bikes });
};

module.exports = {
    getAllBikes
};