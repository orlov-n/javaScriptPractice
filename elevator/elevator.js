const createElevator = (building, floors, currentFloor, passengers) => {

    return {
        building,
        floors,
        currentFloor,
        passengers
    }

}

const changeFloors = (elevator, moveTo) => {
return elevator.floors < moveTo ? `Floor ${moveTo} does not exist!`: elevator.currentFloor !== moveTo ? `Taking you to floor ${moveTo}!` : `You're already on floor ${elevator.currentFloor}!`
// let message = ''
// console.log('above switch', moveTo);
// console.log('elevator.floors', elevator.floors);
// console.log('elevator.currentFloor', elevator.currentFloor);


// switch (moveTo) {
//     case moveTo > elevator.floors: 
//     console.log('step 1', moveTo);
//    return   `Floor ${moveTo} does not exist!`
   
//     case elevator.currentFloor: 
//     console.log('step 2', moveTo);
//    return  `You're already on floor ${elevator.currentFloor}!`
    
//     case elevator.currentFloor !== moveTo: 
//     console.log('step 3', moveTo);
//      return `Taking you to floor ${moveTo}!`
//     default: console.log('default');
//         }
        
    }
        

// let day = 'Monday';

// switch (day) {
//   case 'Monday': {
//     let message = 'It\'s the start of the week.';
//     console.log(message);
//     break;
//   }
//   case 'Tuesday': {
//     let message = 'It\'s another day.';
//     console.log(message);
//     break;
//   }

const dropOffPassenger = (elevator, name) => {
return elevator.passengers.filter(name1 => name1 !== name)
}

module.exports = { 
    createElevator,
    changeFloors,
    dropOffPassenger

 };
