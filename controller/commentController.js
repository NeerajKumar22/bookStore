var Comment = require("../models/Comment");

// Router for Creater New Comment

exports.newComment = function(req, res, next){
    Comment.create(req.body, (err, comment) => {
        if(err) return next(err);
        res.json({comment : comment});
    });
};

// Router for  find all comments

exports.findAll = function(req, res, next){
    Comment.find({}, (err, comments) => {
        if(err) return next(err);
        res.json({comments: comments});
    });
};

// Router for find one comment using find by id 

exports.findOne = function(req, res, next){
    var id = req.params.id;
    Comment.findById(id).populate("books").exec((err, result) => {
        if(err) return next(err);
        res.json({comment : result});
    });
};

// Route for find one comment by id and update that comment 

exports.commentUpdate = function(req, res, next){
    var id = req.params.id;
    Comment.findByIdAndUpdate(id, req.body, {new : true}, (err, comment) => {
        if (err) return next(err);
        res.json({comment : comment});
    });
};

// Route for find one book by id and delete the comment from the list

exports.commentDelete = function(req, res, next){
    var id = req.params.id;
    Comment.findByIdAndDelete(id, (err, comment) => {
        if(err) return next(err);
        res.json({comment : comment._id});
    });
};


