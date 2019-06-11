var mongoose = require ("mongoose");

var Schema = mongoose.Schema;

var bcrypt = require("bcrypt");

var userSchema = new Schema({
    name: {
        type : "String",
        required : [
            true, 
            "Name is required",
        ],

    },
    email: {
        type : "String",
        required : [
            true,
            "Email is required",
        ],
        unique : true
    },
    password: {
        type : "String",
        required : true,
        minlength : 6,
        maxlength : 12,
    },
}, {timestamps: true});

userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next();
    //hash password using bcrypt.hashSync
    this.password = bcrypt.hashSync(this.password, 10);

    // Call next

    next();

});

userSchema.methods.validatePassword = function(password){
    // compair password using bcrypt.compareSync
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model("User", userSchema);