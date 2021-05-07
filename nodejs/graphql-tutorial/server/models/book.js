const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    otherName: String,
    authorId: String
}, { collection: 'Books'})

module.exports = mongoose.model('Book', bookSchema)