var express = require('express');
var router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/:id', courseController.detail);

//api app
router.get('/:id/detail', courseController.detailCourse); 

router.get('/app/list_course', courseController.getListCourse);

router.put('/:id/update', courseController.updateCourse);

router.get('/:id/edit', courseController.edit);

router.put('/:id', courseController.update);

router.get('/', courseController.index);

module.exports = router;