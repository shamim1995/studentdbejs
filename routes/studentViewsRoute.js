const express = require('express');
const router = express.Router();
const { getAllStudent, addStudent, getSingleStudent } = require('../controllers/studentViewsController');


// route for student 

router.get('/add', addStudent)
router.get('/', getAllStudent)
router.get('/:id', getSingleStudent)




//export router form express 

module.exports = router;