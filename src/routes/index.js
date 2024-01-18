const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');
const authenRouter = require('./authen');

function route(app) {
    app.use('/course', courseRouter);
    app.use('/me', meRouter);
    app.use('/authen', authenRouter);
    app.use('/', siteRouter);
}

module.exports = route;
