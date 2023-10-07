//from class

var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var playGame = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
}

// code from challenge 3
var rpsBtn = document.querySelector("#rps");

// Add event listener to generate button
rpsBtn.addEventListener("click", playGame);


// from week4 11. on-off toggle switch
// Access toggle switch HTML element
var KeyPressStart = document.querySelector(".KeyPressStart");
var KeyPressStatus = document.querySelector(".KeyPressStatus");

// Set default mode to dark
var mode = "Off";

// Listen for a click event on toggle switch
KeyPressStart.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "Off") {
    mode = "On";
    KeyPressStatus.textContent = mode;
  }
  // If mode is light, apply dark background 
  else {
    mode = "Off";
    KeyPressStatus.textContent = mode;
  }
});

// from week4 16. Key press Key Code
if (mode === "On") {
function keydownAction(event) {
  document.querySelector("#status").textContent = "KEYDOWN Event";
  document.querySelector("#code").textContent = event.code;
  document.querySelector("#key").textContent = event.key;
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
}
else{
  //do nothing
}

