 
  const fs = require('fs')
  const path = require('path')
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
    let deletePhoto =await Student.findById(id)
    
    fs.unlink(path.join(__dirname, `../assets/upload/${deletePhoto.photo}`), (err) => {
            if (err) {
                console.error(err)
                return
            }

            //file removed
        })

    await Student.findByIdAndDelete(id)
    res.redirect('/student')

    }
//edit and update student data 

const editAndUpdateStudentData = async (req, res) => {

    let id = req.params.id
    let fileName= req.body.oldPhoto
      
    if(req.file){
        fileName = req.file.filename
        fs.unlink(path.join(__dirname, `../assets/upload/${req.body.oldPhoto}`), (err) => {
            if (err) {
                console.error(err)
                return
            }

            //file removed
        })

        
    }
     await Student.findByIdAndUpdate(id, {
        ...req.body,
        photo: fileName
        
        })
 
   
    res.redirect('/student')
}




// exports controller 

module.exports = {
    createStudent,
    singleStudentDataDelete,
    editAndUpdateStudentData
}