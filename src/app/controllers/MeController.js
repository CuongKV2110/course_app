const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const UserInfo = require('../models/UserInfo');
class MeController {
    async index(req, res, next) {
        try {
            const [listCourse, deletedCount] = await Promise.all([
                Course.find({
                    $or: [
                        { deleted: null },
                        { deleted: { $ne: true } }
                    ],
                    userPost: UserInfo.id
                })
                    .sort({ createdAt: -1 }),
                Course.countDocumentsDeleted({ userPost: UserInfo.id })
            ]);

            res.render('course/list_course', {
                deletedCount,
                listCourse: multipleMongooseToObject(listCourse)
            });
        } catch (error) {
            next(error);
        }
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

    delete(req, res, next) {
        console.log('A');
        Course.delete({ _id: req.params.id })
            .then(
                () => res.redirect('back')
            )
            .catch(next);

    }

    forceDelete(req, res, next) {
        Library.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) })
            .then(
                () => res.redirect('back')
            )
            .catch(console.log('Error'));
    }

    async create_course(req, res, next) {
        try {
            console.log("A");
            const course = new Course({
                type: req.body.type,
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                price: req.body.price,
                userPost: UserInfo.id,
                createdAt: Date.now(),
            });

            await course.save();
            res.redirect('/course');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    bin(req, res, next) {
        Course.findDeleted({ userPost: UserInfo.id })
            .then((listCourse) => {
                res.render('course/course_deleted', {
                    listCourse: multipleMongooseToObject(listCourse)
                });
            })
            .catch((error) => {
                console.log('Error:', error);
                res.status(500).send('Internal Server Error');
            });
    }


}

module.exports = new MeController();