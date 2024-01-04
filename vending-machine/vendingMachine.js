const createItemStock = (name, quantity, price) => {
return {
    name: name || 'unknown',
    quantity: quantity || 0,
    price: price || 1.00
}
}

const makePurchase = (item, money) => {
if(item.price > money) {
     return `Sorry, you need at least $${item.price} to make that purchase`
} else if(item.quantity < 1) {
    return "Sorry, there are none left"
} else {
    return `Here are your ${item.name}`
}
return
}

const collectChange = (money) => {
    // let total = null
    // console.log(money)
    return money.reduce((acc, num) => acc + num, 0)
}

module.exports = {
    createItemStock,
    makePurchase,
    collectChange,
}
