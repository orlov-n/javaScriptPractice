const createMaterial = (name, unit, costPerUnit) => {
return {
  name, 
  unit,
  costPerUnit,
}
}

const calculateMaterialCost = (material, unitNumber) => {
return `${unitNumber} ${material.unit}s of ${material.name} costs $${material.costPerUnit * unitNumber}.`
}


const createSupplyCloset = (supplies) => {
return {
  supplies: supplies ? supplies.map(supply => supply.name) : []
}
}

const addSupply = (closet, supply) => {
  if (closet.supplies.includes(supply.name)) {
      return `You already have ${supply.name} in your closet!`
  }

  closet.supplies.push(supply.name)

 return closet.supplies
 
// return closet.supplies.includes(supply.name) ?  `You already have ${supply.name} in your closet!` :
//    closet.supplies.reduce((acc, cv) => {
//     acc.push(cv)
//     return acc
//   }, [supply.name]).reverse()


}

const createNewProject = (materials, message) => {
 // console.log(materials);
  return {
    status: message || 'not started',
    materialsNeeded: materials,
  }
}

const compareMaterials = (project, supplies) => {
// compare objects inside two arrays
// if an object name property inside the project array does not match the one in supplies I will push it to a variable of  an empty array.  
// Check if the variable is not an empty array.  If empty array, return message.
//console.log(project)
//console.log('fafdasdfsa', supplies.supplies);
missingItemNames = []
project.materialsNeeded.forEach(material => {
  if (!supplies.supplies.includes(material.name))
    {
      missingItemNames.push(material.name)
    }
  // supplies.supplies.forEach(supply => {
  //   if (material.name !== supply) {
  //     missingItemNames.push(supply)
      
    // }
  
  //console.log(material.name)
 // console.log('missingItems', missingItemNames);
})
return !missingItemNames.length ? 'Yay! You can start this project!' : `Oh no! You need to go shopping before you can start this project!`
}

module.exports = {
 createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}