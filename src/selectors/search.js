export default function search(state) {
  const songs = state && state.songs && state.songs.songs || [];
  const searchText = state && state.songs && state.songs.searchText || '';

  const filteredSongsArtistName = songs.filter(song => {
    return song && song.artistName && song.artistName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  })

  const filteredSongsName = songs.filter(song => {
    return song && song.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  })
  
  return filteredSongsArtistName.concat(filteredSongsName);
}
