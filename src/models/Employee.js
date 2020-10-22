const mongoose = require('mongoose');
const { Schema } = mongoose;

const Employee = new Schema({
    name: String,
    phone: Number,
    email: String,
    subject: String,
})

module.exports = mongoose.model('Employee', Employee);