var mongoose = require ("mongoose");

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title : {
        type : String,
        required : [
            true,
            "Title is required",
        ]
    },

    image : {
        type : String
    },

    language : {
        type : String,
        required : [
            true,
            "Language is required",
        ]
    },

    year : {
        type : Number,
        required : true,
    },

    author : 
        {
            type : String
        }
    ,

    
    publisher : {
        type : String,
        required : [
            true,
            "Publisher is required"
        ]
    },

    description : {
        type : String,
        required : [
            true,
            "Description is required",
        ]
    }

}, {timestamps: true});

module.exports = mongoose.model("Book", bookSchema);