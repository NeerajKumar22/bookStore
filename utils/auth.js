var jwt = require('jsonwebtoken');
var User = require("../models/User");

exports.generateJWT = (user, cb) => {
    jwt.sign({userId: user.id}, "thisisasecret", (err, token) => {
        if(err) return cb(err, null);
        return cb(null, token)
    })
}


exports.verifyToken = (req, res, next) => {
    var token = req.headers.authorization;
    if(token) {
        jwt.verify(token, "thisisasecret", (err, decoded) => {
            User.findById(decoded.userId, (err, user) => {
                // handle error
                req.user = user;
               next()
            })
        })
    } else {
        res.json({error: 'Token required'});
    }
    
}