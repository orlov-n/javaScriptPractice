const createCustomer = (name, bill, bookings, ) => {
return {
  name,
  bill,
  bookings: bookings || []
}
}

const greeting = (customer) => {
  return customer.bill > 0 ? `${customer.name}! Welcome back to Happy Spa`: `${customer.name}! Welcome to Happy Spa`
}

const createService = (service, cost) => {
  return service ? {
    name: service,
    cost: cost,
  }
  : 'Please provide service name and cost.'
}

const bookServices = (customer, service) => {
  console.log('customer', customer);
  console.log('service', service);
  // neededServices = [...customer.bookings]
  // customer.bookings.forEach(booking => {

    // customer.bookings.push(service.name)
  // })
  customer.bookings.push(service.name)
  customer.bill+= service.cost
  return customer
}

const applyGiftCard = (services, giftCard) => {

affordable = []
services.forEach(service => {

  if (service.price <= giftCard) {
  affordable.push(service.name)
}
})
return affordable
}

module.exports = { 
   createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
