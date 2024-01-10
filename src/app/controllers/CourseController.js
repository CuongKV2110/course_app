const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {

    async index(req, res, next) {
        Course.find({})
            .then(
                listCourse => {
                    console.log(listCourse),
                        res.render('home', {
                            listCourse: multipleMongooseToObject(listCourse)
                        });
                }
            ).catch(next);
    }

    detail(req, res, next) {
        Course.findById(req.params.id)
            .then(
                course => {
                    console.log(req.params.id);
                    res.render('course/course_detail', { course: mongooseToObject(course) });
                }
            )
            .catch(next);
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(
                course => {
                    console.log(req.params.id);
                    res.render('course/course_edit', { course: mongooseToObject(course) });
                }
            )
            .catch(next);
    }

    update(req, res, next) {

        Course.updateOne({ _id: req.params.id }, req.body)
            .then(
                () => res.redirect('/course')
            )
            .catch(next);
    }
}

module.exports = new CourseController();