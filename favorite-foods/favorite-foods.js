const createFavoriteFood = (name) => {
    //console.log(name)
    let food = {
        name: name.dish,
        ingredients: name.ingredients,
        isSpicy: name.isSpicy,
        timesOrdered: 0,
    }
return food
}

const commentOnSpiciness = (dish) => {
 return dish.isSpicy ? "Wow, this Pho is so spicy!" : "Phew, this Lasagna is not very spicy."
 }

 const orderFood = (dish) => {
    //console.log(dish)
    dish.timesOrdered += 1
    //console.log(dish.timesOrdered)
 return dish
 }

 const createShoppingList = (arrayFoods) => {
    // console.log(arrayFoods)
   let ingredients = []
   arrayFoods.forEach(food => {
    food.ingredients.forEach(ingredient => {
     if (!ingredients.includes(ingredient)) {
        ingredients.push(ingredient)
     }  
    })
   })
   console.log(ingredients)
   return ingredients
 }

module.exports = { 
createFavoriteFood,
commentOnSpiciness,
orderFood,
createShoppingList
};