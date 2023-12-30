const createAirport = (airport, airlines, availableGates) => {
return {
  name: airport,
  availableGates: availableGates,
  airlines: airlines,
  

}
}

const welcomeGuests = (airport) => {
return `Welcome to ${airport.name}!`
}

const landPlanes = (airport, landedPlanes) => {
  airport.availableGates -= landedPlanes
if(airport.availableGates >= 0) {
  airport.message = `Success! Current availability is ${airport.availableGates}.`
} else {
  airport.message = `Oh no! Not enough gates available. Current overflow is ${airport.availableGates * -1}.`
  airport.availableGates = 0
}
  return airport
}


// const checkAirlineLocations = (allAirports, airlineName) => {
//   let passedAirports = []

//   allAirports.forEach(airport => {
//     if (airport.airlines.includes(airlineName)){
//       passedAirports.push(airport.name)
//     }
//   })
//   return passedAirports
// }

const checkAirlineLocations = (allAirports, airline) => {
  // console.log('step 1', allAirports);
  // const step2 = allAirports.filter(airport => airport.airlines.includes(airline))
  // console.log('step 2', step2);
  // const step3 = step2.map(airport => airport.name)
  // console.log('step 3', step3);
  
  return allAirports.filter(airport => airport.airlines.includes(airline)).map(airport => airport.name)
}
//  correctAirports = []
// allAirports.forEach(airport => {
//   airport.airlines.forEach(airline => {
//     if (airline === testairline) {
//       correctAirports.push(airport.name)
//     }
//   })
// })

module.exports = { 
  createAirport, 
   welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
