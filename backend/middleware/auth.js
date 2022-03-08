const jwt = require("jsonwebtoken");

/*//==================================================\\
    This will check if there is loging in user and verify it
*/
function auth(req, res, next) {
    try {
        const token = req.cookies.token;

        if(!token) {
          return res.status(401).json( { errorMessage: "Unauthorised" });
        }

    const verified = jwt.verify(token, "" + process.env.JWT_SECRET);

    req.user = verified.user;

    next();

    } catch (err) {
        console.error(err);
        res.status(401).json( { errorMessage: "Unauthorised" });
    };
}

module.exports = auth;