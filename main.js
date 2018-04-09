//  Starts game when you run main.js
// Game ends when you run out of letters and or win
/*

 0
-|-
 /\

*/
//Dependencies
var Letter = require("./letter.js");
var inquirer = require("inquirer");
var game = require("./game.js");
var Word = require("./word.js");


//Vars for Game
var questions = [{
  name: "guess",
  message: "Guess a letter"
}]

var randomWord;
var wordObj;

function mainFunc(){
	//Win condition
	if (wordObj.word === wordObj.displayWord){
		console.log("You Win!");
		return;
	}
	//Main gameplay condition
	else if (wordObj.guessesLeft){
		inquirer.prompt(questions).then(function(answers){
			var userGuess = answers.guess;
			wordObj.checkGuessLoop(userGuess);
			wordObj.updateDispayWord();
			wordObj.displayStats();
			mainFunc();
		})
	}
	//Lose condition
	else{
		console.log("Game Over!");
		console.log("The word was: " + wordObj.word);
		return;
	}
}

//******************RUN GAME**********************

// console.log(game);
randomWord = game.randomWordMachine();

wordObj = new Word(randomWord);

wordObj.letterize();

wordObj.updateDispayWord();

wordObj.displayStats();

mainFunc();





