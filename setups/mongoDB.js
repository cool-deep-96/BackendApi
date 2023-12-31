const mongoose = require('mongoose');
require('dotenv').config;

const connect = async () => {
    try{
        console.log(`${process.env.MONGODB_URL} hello`)
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('DB connected successfully')
    }catch(error){
        console.log('DB connection failed');
        console.error(error);

    }
}

module.exports = connect;
