const Bike = require("../models/Bike");

const getAllBikes = async (req, res) => {
    const { type } = req.query;

    let query = {};

    if (type) {
        query.type = type;
    }

    const bikes = await Bike.find(query).sort({ createdAt: -1 });

    res.render("bikes", {
        bikes,
        selectedType: type || "All"
    });
};

module.exports = {
    getAllBikes
};