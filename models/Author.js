var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    name : {
        type : String,
        required : [
            true,
            "Name is required",
        ]
    },
    email : {
        type : String,
        required : [
            true,
            "Email is required",
        ],
        unique : true
    },
    age : {
        type : Number
    },
    books : [{type : Schema.Types.ObjectId, ref : "Book"}]

}, {timestamps : true});

module.exports = mongoose.model(("Author", authorSchema));