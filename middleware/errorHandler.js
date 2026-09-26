const errorHandler = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).send(
        err.message || "Something went wrong"
    );
};

module.exports = errorHandler;