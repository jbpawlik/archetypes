// importing
import chalk from 'chalk';
import nodemon from 'nodemon';
import rs from 'readline-sync';
import { archetypes16 } from './objectLists/archetypes16.js';
import { questionList16 } from './objectLists/questionList16.js'

let playGame = true

while (playGame) {

  console.log(chalk.green.bold("\nDiscover Your Archetype\n"));

  const playerName = rs.question("\nWhat is your name? \n");

  console.log(chalk.green(`\nWelcome ${playerName}` + `, answer these questions to receieve an archetype\n`));

  rs.keyInPause('...');

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

  if (occurrences.novelty > occurrences.nostalgia) {
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

  function haveMatches(array1, array2) {
    let counter = 0
    array1.forEach(function(element) {
      if (array2.includes(element))
      counter ++;
    })
    return counter
  }

  let friendArchetypes = []

  for(let i = 0; i <= 15; i++) {
    let archetypeArray = archetypes16[i].traits
    if (areEqual(archetypeArray, playerArchetype )) {
      console.log(chalk.green(`\nYour archetype is ${archetypes16[i].name}\n${archetypes16[i].description}`))
    }
  }

  rs.keyInPause('');

  for(let i = 0; i <= 15; i++) {
    let archetypeArray = archetypes16[i].traits
    if (haveMatches(archetypeArray, playerArchetype) == 3) {
      friendArchetypes.push(archetypes16[i])
    }
  }

  console.log(chalk.yellow(`\nYou are a kindred spirit to these archetypes:`))
  console.log(chalk.cyan(`\n${friendArchetypes[0].name}.  ${friendArchetypes[0].description}\n${friendArchetypes[1].name}.  ${friendArchetypes[1].description}\n${friendArchetypes[2].name}.  ${friendArchetypes[2].description}\n${friendArchetypes[3].name}.  ${friendArchetypes[3].description}`))

  rs.keyInPause('');

  for(let i = 0; i <= 15; i++) {
    let archetypeArray = archetypes16[i].traits
    if (areEqual(archetypeArray, playerOpposite)) {
      console.log(chalk.red(`\nYour shadow archetype is ${archetypes16[i].name}\n${archetypes16[i].description}\nThis archetype is the least similar to you, but they may make good friends or even partners.`))
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