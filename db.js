const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() =>{
    try{
        console.log('Connecting to database');
        await mongoose.connect();
        console.log('MongoDB connected');
    }

    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;