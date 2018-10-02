const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../modules/author');

// Describe our tests

describe('Nesting record', function(){
    
    beforeEach(function(done){
       mongoose.connection.collections.authors.drop(function(done){
           done();
       }) 
    });
    
    // Create test
    it('Create an author with sub-document', function(done){ // run this test
        
        
        var pat = new Author ({ 
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wild', pages: 400}]
        });
        
        pat.save().then(function(){ 
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){ // updating it by saying 'record'
                assert(record.books.length === 1); //
                done();
            });
        });
    });
    
    
    it('Add a book to an author', function(done){ // creating a test
        
        var pat = new Author({ // creating a new author with a new book
        
        name: 'Patrick Rothfuss',
        books: [{title: 'Name of the Wind',pages: 400}]
        });
        pat.save().then(function(){ // then saving it to the database
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){ // finding the data for the test by using record
                // add a book to the books array
                record.books.push({title: "Wishes Man's Fear", pages: 500}); // added new book and pages that are assigned for book attribute called
                record.save().then(function(){
                    Author.findOne({name: 'Patrick Rothfuss'}).then(function(result){ // finding it again by the name
                        assert(result.books.length === 2); // result.book.length should equal to 2 since it's using the 3 equal signs
                        done();
                    });
                });
            });
        });
        
    });
    
})