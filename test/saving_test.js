const assert = require('assert');
const MarioChar = require('../models/mariokart');

//Describes tests
describe('Saving records', function(){
    
    
    // Create tests
    it('Saves a record to the database', function(done){
       var char = MarioChar({
           name: 'Mario'
       });           
        
        char.save().then(function(){ // waits for this to save first then does another action
            assert(char.isNew === false); // code would keep on running until it asserts something
            done(); // Lets mocha know the test is done and can keep on moving forward finding other test asserted
        }); 
                      
    }); 
    
});