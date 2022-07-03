const express = require('express');
const router = express.Router();

const { createStudent, singleStudentDataDelete, editAndUpdateStudentData } = require('../controllers/studentController');


// route manage 

router.post('/', createStudent)
router.get('/delete/:id', singleStudentDataDelete)
router.patch('/edit/:id', editAndUpdateStudentData)


// exports router 
module.exports = router;