"use strict";

var submitBtn = document.getElementById('submitBtn');
var guessNum = document.getElementById('guessNum');
var main = document.getElementsByTagName('main')[0];
var alert = document.getElementById('alert');
var clue = document.getElementById('clue');
var newGame = document.getElementById('newGame');
var previous = document.getElementById('previous');

var secretNumber = Math.floor(Math.random() * 100) + 1;
var numbersList = [];

submitBtn.addEventListener('click', () => {
    checkNumber();
});

newGame.addEventListener('click', () => {
    newGameReset();
});

function checkNumber() {
    let num = parseInt(guessNum.value);

    if (num >= 0 && num <= 100) {

        if (num === secretNumber) {
            printSuccess();

        } else if (num > secretNumber) {
            addNumber(num);
            printWrong('too high');

        } else if (num < secretNumber) {
            addNumber(num);
            printWrong('too low');
        }

        printPreviousNumbers();

        if (numbersList.length == 10) {
            disable();
            endGame();
        }

    } else {
        noValidNumber();
    }

}

function addNumber(number) {
    numbersList.push(number);
    guessNum.value = '';
}

function printSuccess() {
    alert.textContent = 'Congratulations! You got it right!';
    alert.style.backgroundColor = 'green';
    clue.style.display = 'none';
    newGame.style.display = 'block';
    disable();
}

function printWrong(message) {
    alert.textContent = 'Wrong';
    clue.textContent = `Last guess was ${message}!`;
    alert.style.backgroundColor = 'red';
}

function printPreviousNumbers() {
    previous.textContent = '';
    for (let n of numbersList) {
        previous.textContent += n + ' ';
    }
}

function noValidNumber() {
    alert.textContent = 'Numero no valido';
    alert.style.backgroundColor = 'white';
    alert.style.color = 'black';
}

function disable() {
    submitBtn.disabled = true;
    guessNum.disabled = true;
}

function endGame() {
    newGame.style.display = 'block';
    alert.textContent = '!!!GAME OVER!!!';
    clue.textContent = '';
}

function newGameReset() {
    secretNumber = secretNumber = Math.floor(Math.random() * 100) + 1;
    numbersList = [];
    guessNum.value = '';
    submitBtn.disabled = false;
    guessNum.disabled = false;
    alert.style.backgroundColor = 'white';
    alert.textContent = '';
    previous.textContent = '';
    newGame.style.display = 'none';
}