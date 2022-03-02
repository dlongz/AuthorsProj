const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [2, "Name Must be min 2 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        minlength: [2, "Name Must be min 2 characters"]
    }

}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author