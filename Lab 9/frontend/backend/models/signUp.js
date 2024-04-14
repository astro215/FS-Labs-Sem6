const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
)


module.exports = mongoose.model('login', signUpSchema); 