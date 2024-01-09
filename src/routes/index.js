const siteRouter = require('./site');
const meRouter = require('./me');
const courseController = require('../app/controllers/CourseController');

function route(app) {
    
    app.use('/me', meRouter);
    app.use('/', siteRouter);
    app.get('/course', courseController.index);
}

module.exports = route;
