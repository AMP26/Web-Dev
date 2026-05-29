const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const catchAsync = require('../utils/catchAsync');


router.post('/', catchAsync(studentController.createStudent));
router.get('/', catchAsync(studentController.getAllStudents));
router.get('/:id', catchAsync(studentController.getStudentById));
router.put('/:id', catchAsync(studentController.updateStudent));
router.delete('/:id', catchAsync(studentController.deleteStudent));


module.exports = router;