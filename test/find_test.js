 const assert = require('assert');
const MarioChar = require('../models/mariokart');

//Describes tests
describe('Finding records', function(){
    
    var char;
    
    beforeEach(function(done){
         char = new MarioChar({
           name: 'Mario'
       });           
        
        char.save().then(function(){ // waits for this to save first then does another action
            assert(char.isNew === false); // code would keep on running until it asserts something
            done(); // Lets mocha know the test is done and can keep on moving forward finding other test asserted
        }); 
    });
    
    // Create tests
    it('Finds one record from the database', function(done){
      
      MarioChar.findOne({name:'Mario'}).then(function(result){
          assert(result.name === 'Mario');
          done();
      });
                      
    });
    
    it('Finds one record by ID from the database', function(done){
      
      MarioChar.findOne({_id:char._id}).then(function(result){
          assert(result._id.toString() === char._id.toString());
          done();
      });
                      
    }); 
    
    
});