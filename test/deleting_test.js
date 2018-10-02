 const assert = require('assert');
const MarioChar = require('../models/mariokart');

//Describes tests
describe('Deleting records', function(){
    
  var char;
    
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario'
    });        
      
    char.save().then(function() { // waits for this to save first then does another action
        assert(char.isNew === false); // code would keep on running until it asserts something
        done(); // Lets mocha know the test is done and can keep on moving forward finding other test asserted
    }); 
  });
    
    // Create test
  it('Delete one record from the database', function(done){
    console.log('test');
    
    MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
      console.log('found and removed');
      MarioChar.findOne({name:'Mario'}).then(function(result){
        console.log('result:', result)
        assert(result === null); // if it doesn't find the record then it will 
        // say null and remove the record from the database
        done();
      });
    }).catch(function(err) { console.log(err)});
  });
});