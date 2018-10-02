 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const BookSchema = new Schema({ // makes a new schema with a title and page number
   title: String, 
   pages: Number
});



const AuthorSchema = new Schema({ // same process but for books it calls for the BookSchema
   name: String, 
   age: Number, 
   books: [BookSchema]    
});

const Author = mongoose.model('author', AuthorSchema); // Everytime there is a new MarioChar Character it will be placed in this collection

module.exports = Author;

