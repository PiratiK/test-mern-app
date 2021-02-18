const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        id: { type: Number, required: true },
        shared: {type: Boolean, required: true},
        email: {type: String, required: false},
    },
    {timestamps: true},
)

module.exports = mongoose.model('user', User)