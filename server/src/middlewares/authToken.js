const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    const token = req.headers('authorization');
    if(!token) return res.status(401).send({ message: 'No token, authorization denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).send("Could not verify token");
        }
        req.user = user;
    });
    next();
}