const createBarber = (name, earnings, haircuts) => {
return {
    name,
    earnings: earnings || 0,
    haircuts: haircuts || [],
}
}


const giveCompliment = (haircut) => {
//console.log(haircut);
return `This ${haircut.style} looks great!`
}


const cutHair = (barber, haircut) => {

   
    barber.haircuts.push(haircut)
    barber.earnings+= haircut.price
    return barber
}


const listStyles = (barber, length) => {
    console.log('this is barber', barber);
    console.log('this is length', length);
    matchingStules = []
    barber.haircuts.forEach(cut => {
        if(cut.hairLength === length) {
            matchingStules.push(cut.style)
        }
    })
    return matchingStules
}

module.exports = {  
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
};