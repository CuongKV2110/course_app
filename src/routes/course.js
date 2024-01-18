var express = require('express');
var router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/course_create', courseController.course_create);

router.get('/:id', courseController.detail);

//api app
router.get('/:id/detail', courseController.detailCourse);

router.get('/app/list_course', courseController.getListCourse);

router.post('/create_course', courseController.createCourse);

router.put('/:id', courseController.update);

router.get('/course_create', courseController.course_create);

router.put('/:id', courseController.updateCourse);

router.get('/:id/edit', courseController.edit);

router.delete('/:id', courseController.deleteCourse);

router.get('/', courseController.index);

module.exports = router;