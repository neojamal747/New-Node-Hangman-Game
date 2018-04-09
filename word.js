//Constructor
var game = require("./game.js");
var Letter = require("./letter.js");

function Word(word){
	this.word = word,
	this.displayWord = "",
	this.guessesLeft = Math.floor(word.length*1.5)
}

Word.prototype.letterize = function(){
	for (var i = 0; i < this.word.length; i++){
		this[i] = new Letter(this.word[i]);
	}
}

Word.prototype.checkGuessLoop = function(userGuess){
	for (var i = 0; i < this.word.length; i++){
		this[i].checkGuess(userGuess)
	}
	this.guessesLeft--;
}

Word.prototype.displayWord = function(){
	this.displayWord = "";
	for (var i = 0; i < this.word.length; i++){
		this.displayWord += this[i].display()
	}
}

Word.prototype.displayStat = function(){
	console.log("Finish this word: " + this.displayWord);
	console.log("You have " + this.guessesLeft + " guesses left");
}

module.exports = Word;