// class Dragon {
//   constructor(){
//     this.name = ''
//   }
//     createDragon(dragonName) {
//       this.name = dragonName
//     }
// }

// const dragon = {
//   name: ''
// }

const createDragon = (dragonName, riderName, dragonTemperment) => {
  return {
    name: dragonName,
    rider: riderName,
    temperment: dragonTemperment,
    timesEaten: 0,
    hungry: true,
  }
}

const greetRider = (createDragon) => {
  return `Hi, ${createDragon.rider}!`
}

const eat = (createDragon) => {
  createDragon.timesEaten ++
  if(createDragon.timesEaten > 2) {
    createDragon.hungry = false
  }
  return createDragon
}

const findFireBreathers = (allDragons) => {
// return allDragons.filter(dragon => dragon.temperment === "aggressive")
let angryDragons = []
for (var i = 0; i <  allDragons.length; i++) {
  
  if (allDragons[i].temperment === 'aggressive') {
angryDragons.push(allDragons[i])
    
  }
}
return angryDragons
// console.log("fafdafadasfds",angryDragons)
//  return angryDragons
}

module.exports = {
   createDragon,
   greetRider, 
   eat, 
   findFireBreathers,
}