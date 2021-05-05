const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fulname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255
    },
    createAt: {
        type: Data,
        default: Data.now
    }
});

const user = mongoose.model("user", userSchema);

module.exports = user;

registers