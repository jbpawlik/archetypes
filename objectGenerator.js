// Compare individual's traits to master list of traits

const traits = { social: ['solo', 'social'], novelty: ['new', 'familiar'], openness: ['open', 'closed'], aggressiveness: ['aggressive', 'passive']};

function archetypeListing() {
	this.name = ''
  this.description =''
  this.traits = []
}

let archetypeList = [];

const combineObjects = ([head, ...[headTail, ...tailTail]]) => {
  if (!headTail) return head

  const combined = headTail.reduce((acc, x) => {
    return acc.concat(head.map(h => `${h},${x}`.split(',')))
  }, [])


  return combineObjects([combined, ...tailTail])
}

function generateArchetypeList(object) {

	let array1 = [];
  let array2 = [];
  let array3 = [];
  let array4 = [];

	let blankArchetype = new archetypeListing();

  for (let i = 0; i <= 1; i++) {
  	array1.push(Object.values(object)[0][i])
    array2.push(Object.values(object)[1][i])
    array3.push(Object.values(object)[2][i])
    array4.push(Object.values(object)[3][i])
  }


  	let combinedArray = combineObjects([array1, array2, array3, array4])

    combinedArray.forEach(function(element, i) {
      blankArchetype.traits = combinedArray[i];
      archetypeList.push({...blankArchetype})
    })
  return archetypeList
}

console.log(generateArchetypeList(traits))