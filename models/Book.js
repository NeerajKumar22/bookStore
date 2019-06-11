var mongoose = require ("mongoose");

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title : {
        type : "String",
        required : [
            true,
            "Title is required",
        ]
    },

    image : {
        type : "String"
    },

    language : {
        type : "String",
        required : [
            true,
            "Language is required",
        ]
    },

    year : {
        type : Number,
        required : true,
    },

    author : [
        {
            type : Schema.Types.ObjectId, ref : "Author"
        }
    ],
    
    publisher:{
        type: "String",
        required: [
            true,
            "Publisher is required"
        ]
    },

}, {timestamps: true});

module.exports = mongoose.model("Book", bookSchema);