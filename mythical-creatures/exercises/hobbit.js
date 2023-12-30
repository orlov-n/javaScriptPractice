
const createHobbit = (name, age) => {
  return {
    name: name || 'unknown',
    age: age || 0,
    isAdult: false,
    isOld: false,
    acquaintances: []
  } 
}

const celebrateBirthday = (hobbit) => {
  hobbit.age ++
  if (hobbit.age > 32 & hobbit.age < 101) {
    hobbit.isAdult = true
  } else if (hobbit.age > 100) {
    hobbit.isOld = true
  }
  return hobbit 
}

const getRing = (hobbit) => {
  let saying = ''
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!'
  } else {
   return 'You can\'t have it!'
  }
}

const meetPeople = (hobbit, people) => {
  return {
    name: hobbit.name,
    acquaintances : [...hobbit.acquaintances, ...people]
  }
}

const findFriends = (socialBilbo) => {
console.log('fdfdasfdsafsda', socialBilbo);
let friends = []
socialBilbo.acquaintances.forEach((friend, index) => {
  console.log(index);
  if (friend.relationship === 'friend') {
    friends.push(friend.name)
  }
})

// let friends = socialBilbo.acquaintances.filter(friend => friend.relationship.includes('friend')).map(friend => friend.name)
return friends
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
   getRing, 
   meetPeople, 
  findFriends
}