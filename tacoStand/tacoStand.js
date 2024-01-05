const createIngredient = (name, price) => {
return {
    name: name || 'unknown',
    price: price || 0.00,
}
}

const createTaco = (name, ingredients) => {
   // console.log(ingredients)
return {
    name: name || 'custom',
    ingredients: ingredients || [],
}
}


const addIngredientToTaco = (name, ingredient) => {
    name.ingredients.push(ingredient)
return name
}

const calculatePrice = (taco) => {
    console.log();
console.log(taco);
return taco.ingredients.reduce((acc, item)=> acc + item.price, 0)
 
}

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice,
}
