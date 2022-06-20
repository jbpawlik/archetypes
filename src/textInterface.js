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
  let response = rs.question(``, {
    limit: ['Yes', 'Y', 'yes', 'y', 'No', 'N', 'no', 'n'],
    limitMessage: 'Yes or no, please.'
  })
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    questionList16[i].answer = 'Y'
    playerAttributes.push(questionList16[i].traits[0])
    playerAttributes.push(questionList16[i].traits[1])
    playerAttributes.push(questionList16[i].traits[2])
    playerAttributes.push(questionList16[i].traits[3])
  } else if (response == 'N' | response == 'n' | response == 'No' | response == 'no') { 
    questionList16[i].answer = 'N'
  }
  response = ''
}

let occurrences = { };
for (let i = 0, j = playerAttributes.length; i < j; i++) {
  occurrences[playerAttributes[i]] = (occurrences[playerAttributes[i]] || 0) + 1;
}

let playerArchetype = []
let playerOpposite = []

if(occurrences.solo > occurrences.social) {
  playerArchetype.push('solo')
  playerOpposite.push('social')
} else if (occurrences.social > occurrences.solo) {
  playerArchetype.push('social')
  playerOpposite.push('solo')
} else {
  console.log(chalk.blue('Do you prefer the company of yourself to the company of others?'))
  let response = rs.question(``, {
    limit: ['Yes', 'Y', 'yes', 'y', 'No', 'N', 'no', 'n'],
    limitMessage: 'Yes or no, please'
  })
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    playerArchetype.push('solo')
    playerOpposite.push('social')
  } else {
    playerArchetype.push('social')
    playerOpposite.push('solo')
  }
}

if(occurrences.novelty > occurrences.nostalgia) {
  playerArchetype.push('novelty')
  playerOpposite.push('nostalgia')
} else if (occurrences.nostalgia > occurrences.novelty) {
  playerArchetype.push('nostalgia')
  playerOpposite.push('novelty')
} else {
  console.log(chalk.blue('Would you rather experience something new than revisit a favorite activity?'))
  let response = rs.question(``, {
    limit: ['Yes', 'Y', 'yes', 'y', 'No', 'N', 'no', 'n'],
    limitMessage: 'Yes or no, please'
  })
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    playerArchetype.push('novelty')
    playerOpposite.push('nostalgia')
  } else {
    playerArchetype.push('nostalgia')
    playerOpposite.push('novelty')
  }
}

if(occurrences.active > occurrences.passive) {
  playerArchetype.push('active')
  playerOpposite.push('passive')
} else if (occurrences.passive > occurrences.active) {
  playerArchetype.push('passive')
  playerOpposite.push('active')
} else {
  console.log(chalk.blue('Are you more Type A (go-getter) than Type B (go-with-the-flow)?'))
  let response = rs.question(``, {
    limit: ['Yes', 'Y', 'yes', 'y', 'No', 'N', 'no', 'n'],
    limitMessage: 'Yes or no, please'
  })
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    playerArchetype.push('active')
    playerOpposite.push('passive')
  } else {
    playerArchetype.push('passive')
    playerOpposite.push('active')
  }
}
if(occurrences.specific > occurrences.general) {
  playerArchetype.push('specific')
  playerOpposite.push('general')
} else if (occurrences.general > occurrences.specific) {
  playerArchetype.push('general')
  playerOpposite.push('specific')
} else {
  console.log(chalk.blue('Do you consider yourself a big-picture thinker?'))
  let response = rs.question(``, {
    limit: ['Yes', 'Y', 'yes', 'y', 'No', 'N', 'no', 'n'],
    limitMessage: 'Yes or no, please'
  })
  if (response == 'Y' | response == 'y' | response == 'Yes' | response == 'yes') {
    playerArchetype.push('general')
    playerOpposite.push('specific')
  } else {
    playerArchetype.push('specific')
    playerOpposite.push('general')
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
    console.log(chalk.yellow(`Your archetype is ${archetypes16[i].name}\n${archetypes16[i].description}`))
  }
  if (areEqual(archetypeArray, playerOpposite)) {
    console.log(chalk.green(`Your shadow archetype is ${archetypes16[i].name}\n${archetypes16[i].description}\nThis archetype is the least similar to you, but they may still make good friends or even partners.`))
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