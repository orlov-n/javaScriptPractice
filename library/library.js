const issueCard = (name, age) => {
return {
    name,
    age, 
   numBooksCheckedOut: 0,
   isChild: age < 12,
}
}

const searchByAuthor = (collection, name) => {
//console.log(collection)
let foundBook = collection.filter(book => book.author === name)
console.log('thi is found book', foundBook)
return foundBook.length < 1 ? 'No book found for search criteria' : foundBook

 
}

module.exports = { 
    issueCard,
    searchByAuthor,
};