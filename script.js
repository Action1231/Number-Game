"use strict";
console.log("");

const container = document.querySelector("container");
const secretNumberEl = document.querySelector(".secret_number");
const guessInput = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const score = document.querySelector('.score')

const btnReset = document.querySelector(".reset");
const btnCheck = document.querySelector(".check");

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let userScore = 20
secretNumberEl.textContent = secretNumber;

// messageEl.textContent = 'akshin'
console.log(messageEl);

btnCheck.addEventListener("click", function () {
let userNumber = +guessInput.value;

  if (guessInput.value) {
    console.log("guessInput.value", guessInput.value);
    messageEl.textContent = "No Number";
  }
  if (userNumber < secretNumber) {
    messageEl.textContent = "Too low";
    userScore--
    score.textContent = userScore
    
  }



  if (userNumber > secretNumber) {
    messageEl.textContent = "Too high";
    userScore--
    score.textContent = userScore
  }

  if (userNumber === secretNumber) {
    messageEl.textContent = "Correct Number!";
  }
});
