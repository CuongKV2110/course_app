var express = require('express');
var router = express.Router();
const courseController = require('../app/controllers/CourseController');

// router.get('/:id', courseController.detail);
router.get('/', courseController.index);

module.exports = router;