//This file randomly selects a word for the player to guess
var vocab = require("./vocab")
var game = {
	wordList: vocab,
	//Selects words, i think.
	randomWord: function(){
		return this.wordList[this.randomInt(0, this.wordList.length)]
	},
	randomInt: function(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
}

module.exports = game;

