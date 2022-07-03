const Student = require("../models/studentModel")



// student data create 

const createStudent = (req, res) =>{

    
    Student.create({
        ...req.body,
        photo: req.file.filename

    })
 
  res.redirect('/student')

}

// single student data delete

const singleStudentDataDelete = async (req, res)=>{
    let id= req.params.id 
    await Student.findByIdAndDelete(id)
    res.redirect('/student')
}

//edit and update student data 

const editAndUpdateStudentData = async (req, res) => {

    let id = req.params.id
     await Student.findByIdAndUpdate(id, {
        ...req.body
        
        })
 
   
    res.redirect('/student')
}




// exports controller 

module.exports = {
    createStudent,
    singleStudentDataDelete,
    editAndUpdateStudentData
}