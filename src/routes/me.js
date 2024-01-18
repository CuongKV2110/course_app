var express = require('express');
var router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/', meController.index);

router.get('/bin', meController.bin);

router.delete('/:id', meController.delete);

router.delete('/:id/force', meController.forceDelete); 

router.post('/:id', meController.create_course);

module.exports = router;