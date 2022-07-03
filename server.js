const dotenv = require('dotenv').config();
const colors = require('colors')
const path = require('path')
const connectMongoDb = require('./config/db.js')
const expressEjsLayouts = require('express-ejs-layouts')
const multer = require('multer')
const express =  require('express')
const app = express();

/**
 * multer destination
 * form mongoose
 */
const storage = multer.diskStorage({

    
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, './assets/upload'))


    },
    
    filename : (req, file, cb) =>{
        cb(null, Date.now()+'_'+ file.originalname)
        
    }
})

const uploadMulter = multer({
    storage: storage
}).single('photo')
module.exports = uploadMulter

//env manage 

const PORT = process.env.SERVER_PORT;

// mongodb connect 
connectMongoDb()


//ejs initialize 

app.set("view engine", "ejs")


// static folder/file management 

app.use('/assets', express.static(path.join(__dirname, '/assets')))



// laouts initialize with express ejs layouts 
app.set('layout', 'layouts/app')

app.use(expressEjsLayouts)

// get body data 

app.use(express.json())
app.use(express.urlencoded({extended:false}))



//routes manage

app.use('/student', require('./routes/studentViewsRoute'))
app.use('/student', require('./routes/studentRoute'))




//server listing

app.listen(PORT, ()=>{
    console.log(`Our Server Is Running on http://localhost:${PORT}`.bgCyan.black);
})