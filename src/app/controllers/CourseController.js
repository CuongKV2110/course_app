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

    detail(req, res){
        res.send('Detail');
    }
}

module.exports = new CourseController();