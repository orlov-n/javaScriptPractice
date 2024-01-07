const createMeal = (type, calorieGoal) => {
return {
    type,
    calorieGoal,
    dishes: [],
}
}

const addDish = (meal, dish) => {
console.log('this is meal', meal);
console.log('this is dish', dish);
meal.dishes.push(dish)
return meal
}

module.exports = {
    createMeal,
    addDish,
 }