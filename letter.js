//Constructor
// makes letter a _ or a "letter"
var game = require("./game.js");
var Word = require("./word.js");

function ScreenLetter(letter){
	this.letter = letter.toLowerCase(),
	this.guessed = false
}

ScreenLetter.prototype.display = function(){
	if (this.guessed){return this.letter}
	else{return"_"}
}

ScreenLetter.prototype.checkGuess = function(userGuess){
	if (userGuess === this.letter){
		this.guessed = true;
	}
}

module.exports = ScreenLetter;