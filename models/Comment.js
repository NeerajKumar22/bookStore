var mongoose = require ("mongoose");

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text : {
        type : "String",
        required : [
            true,
            "Comment is required"
        ]
    },

    book : 
        {
            type : Schema.Types.ObjectId,
            ref : "Book",
            required : [
                true,
                "Book is required"
            ]
        },
}, {timestamps : true});

module.exports = mongoose.model("Comment", commentSchema);