// importing
import chalk from 'chalk';
import nodemon from 'nodemon';
import rs from 'readline-sync';
import { archetypes16 } from './objectLists/archetypes16.js';
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
  response = ''
}

let occurrences = { };
for (let i = 0, j = playerAttributes.length; i < j; i++) {
   occurrences[playerAttributes[i]] = (occurrences[playerAttributes[i]] || 0) + 1;
}

let playerArchetype = []
let response = ''

if(occurrences.solo > occurrences.social) {
  playerArchetype.push('solo')
} else if (occurrences.social > occurrences.solo) {
  playerArchetype.push('social')
} else {
  console.log('Do you prefer the company of yourself to the company of others?')
  response = rs.question(``)
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    playerArchetype.push('solo')
  } else {
    playerArchetype.push('social')
  }
}

if(occurrences.novelty > occurrences.nostalgia) {
  playerArchetype.push('novelty')
} else if (occurrences.nostalgia > occurrences.novelty) {
  playerArchetype.push('nostalgia')
} else {
  console.log('Would you rather experience something new than revisit a favorite activity?')
  response = rs.question(``)
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    playerArchetype.push('novelty')
  } else {
    playerArchetype.push('nostalgia')
  }
}

if(occurrences.active > occurrences.passive) {
  playerArchetype.push('active')
} else if (occurrences.passive > occurrences.active) {
  playerArchetype.push('passive')
} else {
  console.log('Are you more Type A (go-getter) than Type B (go-with-the-flow)?')
  response = rs.question(``)
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    playerArchetype.push('active')
  } else {
    playerArchetype.push('passive')
  }
}
if(occurrences.specific > occurrences.general) {
  playerArchetype.push('specific')
} else if (occurrences.general > occurrences.specific) {
  playerArchetype.push('general')
} else {
  console.log('Do you consider yourself a big-picture thinker?')
  response = rs.question(``)
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    playerArchetype.push('general')
  } else {
    playerArchetype.push('specific')
  }
}

 function areEqual(array1, array2) {
  if (array1.length === array2.length) {
    return array1.every((element, index) => {
      if (element === array2[index]) {
        return true;
      }
      return false;
    });
  }
  return false;
}

for(let i = 0; i <= 15; i++) {
  let archetypeArray = archetypes16[i].traits
  if (areEqual(archetypeArray, playerArchetype )) {
    console.log(`Your archetype is ${archetypes16[i].name}`)
  }
}

let playAgain = rs.question(`Try again, ${playerName}? `)

if (playAgain == 'Y' | playAgain == 'y' | playAgain == 'Yes' | playAgain == 'yes') {
  console.log(` \n \n \n `)
} else {
  console.log(chalk.cyanBright('Goodbye!'))
  break
}
}