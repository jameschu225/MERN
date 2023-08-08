const mongoose = require('mongoose')


const authorsSchema = new mongoose.Schema({
    Name: {
        type: String,
        mini: 3,
    }
}, {timestamps: true})

module.exports = mongoose.model('Authors', authorsSchema);
