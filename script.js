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