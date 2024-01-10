
const createCollection = (name, description) => {

  return {
    name,
    description,
    tracks: [],
  }
}

const createTrack = (title, artist, duration) => {
let empyTrack = {
  title: 'unknown',
  artist: 'unknown',
  duration: 0,
}

// if (!title && !artist && !duration) {
//   return empyTrack
// } else {
//   return fullTrack
// }
  return {
    title: title || 'unknown',
    artist: artist || 'unknown',
    duration: duration || 0,
  }
  
}

const reviewTrack = (track) => {
if (track.artist === 'Red Hot Chili Peppers') {
  return `The song ${track.title} rules!`
} 
return `I wish this was a Red Hot Chili Peppers song.`
}

const addTrack = (collection, track) => {
  collection.tracks.push(track) 
  return collection
}


const getTotalDuration = (playlist) => {
let durations = 0
playlist.tracks.forEach(song => {
  durations += song.duration
})
return durations
}

const findTracksByArtist = (collection, artist) => {
console.log(collection);
console.log(artist);
let tracks = []
collection.tracks.forEach(track => {
  if (track.artist === artist) {
    tracks.push(track) 
  }
})
return tracks
}

  module.exports = {
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
    }