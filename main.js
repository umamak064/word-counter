#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "write your sentence to cound words"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is" ${words.length}`);
