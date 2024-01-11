const createTape = (title, readiness) => {
return {
    title,
    readyToPlay: readiness || false,
}
}

const reset = (movie) => {
    movie.readyToPlay = true
    return movie
}

const createCollection = (m1, m2, m3) => {
col = []
col.push(m1, m2, m3)

//console.log(col);
if (col.includes(undefined) ) {
    return 'Your collection is empty.'
} else {
    
    return col
}

}

const previewCollection = (collection) => {
    console.log(collection);
return collection.map(movie => movie.title)
}

module.exports = { 
    createTape,
    reset,
    createCollection,
    previewCollection
 }