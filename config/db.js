const dotenv =  require('dotenv').config();
const mongoose = require('mongoose');


// env manage with dotenv 
const DB = process.env.MONGO_DB;


// connect mongo Db with mongoose 

const connectMongoDb = async ()=>{
try {
const connect= await mongoose.connect(`${DB}`)
console.log(`our mongo Db server is running on HOST : ${connect.connection.host}`.bgMagenta.black);

} catch (err) {
    console.log(`${err}`);
}
}

module.exports = connectMongoDb;
