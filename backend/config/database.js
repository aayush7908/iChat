const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const connectDatabase = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log('Connected to Database');
        })
        .catch((error) => {
            console.log('Database Connection failed !!!');
            console.log(error);
        });
};

module.exports = connectDatabase;