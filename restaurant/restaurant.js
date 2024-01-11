const createMeal = (name, specialRequests, tableNumber) => {
  return {
    name, 
    specialRequests,
     tableNumber,
     complete: false,
  }
}

const getMade = (meal) => {
  meal.complete = true
return meal
}

const announceMeal = (meal) => {
if (meal.complete) {
  return `Order up - ${meal.name} for table ${meal.tableNumber}!`
} 
return `This ${meal.name} is not completed yet`
}


const createOrder = (order) => {
//console.log(order);
return {
  tableNumber: order.name,
  meals: order.meals,
  completedMeals: [],
}
}

const cookMeal = (order, meal) => {
  //console.log(meal)
  if (order.tableNumber === meal.tableNumber){

    order.completedMeals.push(meal.name)
  }
return order
}


const listOrders = (order) => {
  return order.meals.map(meal => meal.name)
}

const listSpecialRequests = (order) => {
  let requests = []
   order.meals.forEach(meal => {
    meal.specialRequests.forEach(request => requests.push(request))
  })
return requests
}

module.exports = { 
  createMeal, 
  getMade, 
   announceMeal,
   createOrder, 
   cookMeal, 
  listOrders, 
  listSpecialRequests
};
