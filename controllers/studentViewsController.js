const Student = require('../models/studentModel')

const getAllStudent = async (req, res) => {

    let studentData = await Student.find()

    res.render('studentdb', {
        studentData
    })
};
const addStudent = (req, res) => {
    res.render('studentAddForm')
}

// view
const editViesStuForm = async (req, res) => {
    const id = req.params.id

    let viewSingleStuData = await Student.findById(id)

    res.render('editStudentForm', {
        viewSingleStuData
    })
}




const getSingleStudent = async (req, res) => {
    const id = req.params.id

    let singleStuData = await Student.findById(id)

    res.render('singleStuShow', {
        singleStuData
    })
}




// export student controller 

module.exports = {
    getAllStudent,
    addStudent,
    getSingleStudent,
    editViesStuForm


}