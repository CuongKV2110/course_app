const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    type: String,
    description: String,
    image: String,
    price: String,
})

module.exports = mongoose.model('Course', Course, 'course');
