const mongoose = require('mongoose');

const ConnectDB = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Database Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed!", error);
    }
}

module.exports = ConnectDB
