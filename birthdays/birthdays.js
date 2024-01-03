
const createBirthday = (name, month, day) => {
return {
    name,
    month,
    day
}
}

const celebrateBirthday = (birthday) => {
return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

const countBirthdays = (birthdays, month) => {
    let counter = 0
    birthdays.forEach(person => {
        person.month === month ? counter ++ : ''
    })
    return counter
}

module.exports = {  
    createBirthday,
    celebrateBirthday,
    countBirthdays,
};