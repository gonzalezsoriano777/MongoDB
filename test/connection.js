const mongoose = require('mongoose');

//Connect to mongoose
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true }); // made one database called 'testaroo'

//element.on('click', function(){ // Once the connection is open , it opens to that function
    
//});

mongoose.connection.once('open', function(){
  console.log('Connection has been made, now make fireworks...');  
}).on('error', function(error){
    console.log('Connection error:', error);
});