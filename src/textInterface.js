// importing
import chalk from 'chalk';
import nodemon from 'nodemon';
import rs from 'readline-sync';
import { questionList16 } from './objectLists/questionList16.js'

let playGame = true

while (playGame) {

console.log(chalk.green.bold("\nWelcome to The Game!\n"));

const playerName = rs.question("Player Name: \n");

console.log(chalk.green(`Welcome ${playerName}` + `, answer these questions to receieve an archetype\n`));

let playerAttributes = []

for (let i = 0; i <= 15; i++) {
  console.log(chalk.blue(`${questionList16[i].question}`))
  let response = rs.question(``)
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    playerAttributes.push(questionList16[i].traits[0])
    playerAttributes.push(questionList16[i].traits[1])
    playerAttributes.push(questionList16[i].traits[2])
    playerAttributes.push(questionList16[i].traits[3])
  }
  console.log(questionList16[i].traits[0])
  response = ''
}

let occurrences = { };
for (let i = 0, j = playerAttributes.length; i < j; i++) {
   occurrences[playerAttributes[i]] = (occurrences[playerAttributes[i]] || 0) + 1;
}

console.log(occurrences)



let playAgain = rs.question(`Try again, ${playerName}? `)

if (playAgain == 'Y' | playAgain == 'y' | playAgain == 'Yes' | playAgain == 'yes') {
  consolelog(` \n \n \n `)
} else {
  console.log(chalk.cyanBright('Goodbye!'))
  break
}
}