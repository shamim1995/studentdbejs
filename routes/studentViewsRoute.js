const express = require('express');
const router = express.Router();
const { getAllStudent, addStudent, getSingleStudent, editViesStuForm } = require('../controllers/studentViewsController');


// route for student 

router.get('/add', addStudent)
router.get('/', getAllStudent)
router.get('/:id', getSingleStudent)
router.get('/edit/:id', editViesStuForm)




//export router form express 

module.exports = router;