const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/authorsDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(res => console.log('Establish a connection to the database'))
    .catch(err => console.log('somthing went wrong', err))
