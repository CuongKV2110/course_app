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
        console.log(req.body);
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
        console.log(req.body);
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
        console.log(req.params);
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(
                () => res.send('success')
            )
            .catch(console.log('APP update Error'));
    }

    async createCourse(req, res, next) {
        try {
            console.log(req.params);
            console.log(req.body);
            const course = new Course({
                type: req.body.type,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            });
            console.log(course);
            await course.save();
            res.send('success');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    }


}

module.exports = new CourseController();