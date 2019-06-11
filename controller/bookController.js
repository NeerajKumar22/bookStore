var Book = require("../models/Book");

// Route for Create New book
exports.newBook = function(req, res, next){
    Book.create(req.body, (err, book) => {
        if(err) return next(err);
        res.json({book : book});
    })
}

// Route for find all books

exports.findAllBooks = function(req, res, next){
    Book.find({}, (err, books) => {
        if(err) return next(err);
        res.json({books : books});
    });
};

// Route for find one book using find by id

exports.bookFindById = function(req, res, next){
    var id = req.params.id;
    Book.findById(id).populate("authors").exec((err, result) => {
        if(err) return next(err);
        res.json({book : result});
    });
};


//Route for find one book and update that book by id

exports.bookFindByIdAndUpdate = function(req, res, next){
    var id = req.params.id;
    Book.findByIdAndUpdate(id, req.body, {new : true}, (err, book) => {
        if(err) return next(err);
        res.json({book : book});
    });
};

// Route for find one book and delete the book from the list

exports.bookFindByIdAndDelete = function(req, res, next){
    var id = req.params.id;
    Book.findByIdAndDelete(id, (err, book) => {

        if(err) return next(err);
        res.json({book : book._id})
    });
};


