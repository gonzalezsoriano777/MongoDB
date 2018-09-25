const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const MarioCharSchema = new Schema({
   name: String, // Expects a word out of a name
   weight: Number // Expects a Number out of weight
    
});

const MarioChar = mongoose.model('mariochar'.MarioCharSchema); // Everytime there is a new MarioChar Character it will be placed in this collection

module.exports = MarioChar;

var myChar = new MarioChar;