const createSong = (name, artist, favorite ) => {
  return {
    name,
    artist,
    favorite: favorite || false,
    hasBeenPlayed: false,
  }
}

const playSong = (song) => {
  song.hasBeenPlayed = true
  return song
}

const makePlaylist = (playlistName, songList) => {
  return {
    name: playlistName,
    songs: songList
  }
}

const addSongToPlaylist = (playlist, song) => {
   playlist.songs.push(song)
  return playlist
}

const playSongs = (playlist2, favsOnly) => {
  //console.log(playlist);
  // playlist.songs.forEach(song => song.hasBeenPlayed = true)
  // if (favsOnly) {
  //   playlist2.songs.forEach(song => {
  //     if(song.favorite === true) {
  //       song.hasBeenPlayed = true
  //     } 
  //   })
  // } else {
  //   playlist2.songs.forEach(song => {
  //     song.hasBeenPlayed = true
  //   })
  // }

  playlist2.songs.forEach(song => {
    if ((favsOnly && song.favorite) || (!favsOnly && !song.favorite)) {
      song.hasBeenPlayed = true
    } 
  })
  return playlist2
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
