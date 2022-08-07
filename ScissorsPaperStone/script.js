// Global variables
var currentGameMode = "Enter username";
var userName = "";
var choices = ["scissors", "paper", "stone"];
var timesPlayerWin = 0;
var timesDraw = 0;
var timesComputerWin = 0;

//generate random choice for computer
var getRandomChoice = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  var randomChoice = choices[randomInteger];
  return randomChoice;
};

var main = function (input) {
  if (currentGameMode == "Enter username") {
    userName = input;
    output = `Hello ${userName}! Please key in scissors, paper or stone to play`;
    currentGameMode = "Game mode";
    return output;
  } else if (currentGameMode == "Game mode") {
    if (input != "scissors" || input != "paper" || input != "stone") {
      output = "Please put scissors, paper or stone only!";
    }
  }
  let playerChoice = input;
  let computerChoice = getRandomChoice();

  if (playerChoice === computerChoice) {
    timesDraw++;
    output = `Tie! Computer picked ${computerChoice}, ${userName} picked ${playerChoice}`;
  } else if (playerChoice === "scissors") {
    if (computerChoice === "stone") {
      output = `Computer won! Computer picked ${computerChoice}, ${userName} picked ${playerChoice}`;
      timesComputerWin++;
    } else {
      output = `${userName} won! Computer picked ${computerChoice}, ${userName} picked ${playerChoice}`;
      timesPlayerWin++;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      output = `Computer won! Computer picked ${computerChoice}, ${userName} picked ${playerChoice}`;
      timesComputerWin++;
    } else {
      output = `${userName} won! Computer picked ${computerChoice}, ${userName} picked ${playerChoice}`;
      timesPlayerWin++;
    }
  } else if (playerChoice === "stone") {
    if (computerChoice === "paper") {
      output = `Computer won! Computer picked ${computerChoice}, ${userName} picked ${playerChoice}`;
      timesComputerWin++;
    } else {
      output = `${userName} won! Computer picked ${computerChoice}, ${userName} picked ${playerChoice}`;
      timesPlayerWin++;
    }
    console.log("computer", computerChoice);
    console.log("player", playerChoice);
  }

  return (
    output +
    "<br><br>" +
    "Wins: " +
    timesPlayerWin +
    "<br><br>" +
    "Draws: " +
    timesDraw +
    "<br><br>" +
    "Losses: " +
    timesComputerWin
  );
};
var normalSPS = function (userName, input) {
  var output = "";

  return message;
};
