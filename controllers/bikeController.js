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

const getBikeDetails = async (req, res) => {
    const bike = await Bike.findById(req.params.id);

    if (!bike) {
        return res.status(404).send("Bike not found");
    }

    res.render("bikeDetails", { bike });
};

module.exports = {
    getAllBikes,
    getBikeDetails
};