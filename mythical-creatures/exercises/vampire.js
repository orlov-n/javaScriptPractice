const createVampire = (name, pet) => {
  return {
    name,
    pet: pet || 'bat',
    thirsty: true,
    ouncesDrank: 0,
  }
}

const encounterDeliciousVictim = (vampire) => {
return vampire.thirsty === true ? 'I WANT TO SUCK YOUR BLOOD!' : "No thanks, I am too full."
}

const drink = (vampire) => {
  if (vampire.thirsty === true) {
    vampire.ouncesDrank+= 10
  }
  if (vampire.ouncesDrank > 49) {
    vampire.thirsty = false
  } 
return  vampire 
}

const inquirePlace = (locations, question) => {
let foundLocation = locations.filter(location=> location === question)
return foundLocation[0] === question ? `Yes, I have spent some time in ${question}.` : `No, I have never been to ${question}.`
}

const findBatLovers = (batLovers) => {
return batLovers.filter(lover => lover.pet === 'bat').map(lover=> lover.name)
}

module.exports = {
  createVampire, 
   drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}