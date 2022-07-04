const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')

const { createStudent, singleStudentDataDelete, editAndUpdateStudentData } = require('../controllers/studentController');

/**
 * multer destination
 * form mongoose
 */
const storage = multer.diskStorage({


    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../assets/upload'))


    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname)

    }
})

const uploadMulter = multer({
    storage: storage
}).single('photo')

// route manage 

router.post('/', uploadMulter, createStudent)
router.get('/delete/:id', singleStudentDataDelete)
router.post('/edit/:id', uploadMulter, editAndUpdateStudentData)


// exports router 
module.exports = router;