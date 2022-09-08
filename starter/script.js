"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//all
function myFunction() {
  const guess = Number(document.querySelector(".guess").value);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = ' ⛔ No Number!';
    displayMessage(" ⛔ No Number!");
  }
  //when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = ' Correct Number!';
    displayMessage(" Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundImage =
      "url('image/background.jpg')";
    document.querySelector(".txt").textContent = "Congratulation!!";
    document.querySelector(".number").style.width = "50rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
    congrats();
  } else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = guess > secretNumber ? "Too High!" : "Too Low";
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low");
    }
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    // document.querySelector(".message").textContent =
    //   "You lost the game!";
    displayMessage("You lost the game!");
    document.querySelector(".score").textContent = 0;
  }
}

//when guess too high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }

// else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
//congrats function
function congrats() {
  document.querySelector(".left").style.display = "none";
  document.querySelector(".label-score").style.display = "none";
  //  lef.style.position = 'absolute';

  document.querySelector(".right").textAlign = "center";
}
//Enter keypress
document.querySelector(".guess").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    myFunction();
  }
});

//again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = " Start guessing...";
  displayMessage('Start guessing...')
  document.querySelector(".txt").textContent = "Guess My Number!";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundImage = "url('image/bg2.jpg')";
  document.querySelector(".number").style.width = "30rem";
  document.querySelector(".left").style.display = "inline-block";
  document.querySelector(".label-score").style.display = "inline-block";
});
