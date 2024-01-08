const createMeal = (type, calorieGoal) => {
return {
    type,
    calorieGoal,
    dishes: [],
}
}

const addDish = (meal, dish) => {
//console.log('this is dish', dish);
dish.calories <= meal.calorieGoal ? meal.dishes.push(dish) : ''
meal.calorieGoal -= dish.calories
return meal
}

const calculateCalories = (meal) => {
console.log('this is meal', meal);
calorieCounter = 0
    meal.dishes.forEach(dish => {
        calorieCounter += dish.calories
    })
    return `${meal.type} has a total of ${calorieCounter} calories.`
}

module.exports = {
    createMeal,
    addDish,
    calculateCalories,
 }