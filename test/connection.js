//sNew model
const mongoose = require('mongoose');


<<<<<<< HEAD
// ES6 Promises


// Connect to the db before tests run
before(function(done){
  


// Connect to mLab now
=======
mongoose.Promise = global.Promise;


before(function(done){
>>>>>>> lesson9
mongoose.connect('mongodb://soriano123:hector3463@ds117623.mlab.com:17623/mongo', { useNewUrlParser: true }); // made one database called 'testaroo'

//element.on('click', function(){ // Once the connection is open , it opens to that function
    
//});
mongoose.connection.once('open', function(){
  console.log('Connection has been made, now make fireworks...');
  done();
}).on('error', function(error){
    console.log('Connection error:', error);
});
<<<<<<< HEAD
=======

});




// Drop the characters collection before each test

beforeEach(function(done){
  // Drop the collection
  mongoose.connection.collections.mariokarts.drop(function(){ // going to the collection and saying "drop" the collection
  // and it starts the test
    done();
  });

>>>>>>> lesson9
});