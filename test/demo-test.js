const mocha = require('mocha');
const assert = require('assert');

//Describes tests
describe('some demo tests', function(){
    
    
    // Create tests
    it('adds two numbers together', function(){
        assert(2 + 3 === 5); // What we want to expect.. Example, if it was another number then the test would fail
    }); 
    
});