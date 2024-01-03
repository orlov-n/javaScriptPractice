const createEvent = (title, month, day) => {
return day > 0 && day < 31 ? {
    title,
    month,
    day,
} : `Error: ${day} is not a valid day`
}


const createCalendar = (owner, events) => {

    return {
        owner,
        events
    }
}

const reportMonthlyEvents = (calendar, month) => {
    let events = []
    calendar.events.forEach(event => {
        if(event.month === month) {

            events.push(event)
        }
    })
    //console.log(events)
    return events
}

module.exports = { 
    createEvent, 
    createCalendar, 
    reportMonthlyEvents 
};