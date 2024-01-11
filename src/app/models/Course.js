const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    type: String,
    description: String,
    image: String,
    price: String,
})

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course, 'course');
