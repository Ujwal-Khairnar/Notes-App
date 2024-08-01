const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    console.log("Authorization Header:", authHeader); // Debugging
    console.log("Token:", token); // Debugging

    if (!token) {
        console.log("No token provided");
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log("Token verification failed:", err.message); // Debugging
            return res.sendStatus(403); // Forbidden if token is invalid
        }
        req.user = user;
        next();
    });
}

module.exports = {
    authenticateToken,
};
