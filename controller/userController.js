var User = require("../models/User");
var auth = require('../utils/auth');

exports.userNew = function(req, res, next){
    User.create(req.body, (err, user) => {
        if (err) return next (err);
        res.json({user: user});
    })
}

exports.login = function(req, res, next){
    var {email, password} = req.body;
    if(!email || !password){
        return res.json({success: false,error: "email and password is required"});
    }
    User.findOne({email: email}, (err, user) => {
        if(err) return next(err);
        if(!user){
            return res.json({success: false,user: "user is not found"});
        };
        if(!user.validatePassword(password)) return res.json({success: false,password: "password is not valid"})
        auth.generateJWT(user, (err, token) => {
            if(err) return res.json({error: 'Token generation failed'})
            res.json({success: true, token: token});
        })
    })
}