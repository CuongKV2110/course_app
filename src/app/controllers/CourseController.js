const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {

    async index(req, res, next) {
        Course.find({})
            .then(
                listCourse => {
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
            .catch(console.log('Update Error'));
    }

    //api APP
    async getListCourse(req, res, next) {
        Course.find({})
            .then(
                listCourse => {
                    res.send(multipleMongooseToObject(listCourse));
                }
            ).catch(next);
    }

    detailCourse(req, res, next) {
        Course.findById(req.params.id)
            .then(
                course => {
                    res.send(course);
                }
            )
            .catch(next);
    }

    updateCourse(req, res, next) {
        console.log('Update');
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(
                () => res.send('success')
            )
            .catch(console.log('APP update Error'));
    }


}

module.exports = new CourseController();