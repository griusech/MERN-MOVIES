const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' })

const URI = 'mongodb://localhost/mern-movies'

mongoose.connect(URI)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Db is Connected")
})

module.exports = mongoose;