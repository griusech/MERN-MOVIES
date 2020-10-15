const mongoose = require('mongoose');
const { Schema } = mongoose;

const MoviesSchemas = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image : { type: String }
})


module.exports = mongoose.model('Movies', MoviesSchemas);