#! /usr/bin/env node
import inquirer from "inquirer";

const generatedNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to Number Guessing Game");

console.log("created by Muhammad Anas Qureshi");

const awnser = await inquirer.prompt([
  {
    message: "Please Guess a Number between 1 - 6",
    name: "userguessedNumber",
    type: "number",
  },
]);
if (awnser.userguessedNumber === generatedNumber) {
  console.log("Congratulations! You guessed the right number...");
} else {
  console.log("Oops! Sorry You guessed the wrong number...");
}

console.log(generatedNumber);
