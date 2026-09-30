const isLoggedIn = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect(`/login?returnTo=${encodeURIComponent(req.originalUrl)}`);
    }

    next();
};

module.exports = isLoggedIn;