//packages
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

let humanGuess = 0;
let computerGuess = 0;
let targetNumbers = generateTarget();

const compareGuesses = (humanGuess, computerGuess, targetNumbers) => 
    Math.abs(targetNumbers - humanGuess) <= Math.abs(targetNumbers - computerGuess) ? true : false;