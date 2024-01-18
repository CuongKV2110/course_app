const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    type: String,
    description: String,
    image: String,
    price: String,
    userPost: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course, 'course');