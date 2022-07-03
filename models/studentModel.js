const mongoose = require('mongoose')




//student mongosse schema 

const studentModel = mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Name Field Is required'],
        trim:true
    },

    email : {
        type: String,
        required: [true, 'Email Field is required'],
        trim:true,
        unique:true
    },

    cell : {
        type: String,
        required: [true, 'Cell Field Is required'],
        trim:true,
        
    },

    location:{
        type: String,
        default:'Dhaka',
        trim:true
    },

    skill : {
        type: String,
        default:'Wordpress',
        trim: true
    },
    photo: {
        type: String,
        default:'avatar.png'
    }
},{
    timestamps:true
})




module.exports = mongoose.model('Student', studentModel)