const songsReducer = () => {
  return [
    { title: 'Numb', duration: '4:30' },
    { title: 'American Idiot', duration: '5:00' },
    { title: 'Refused', duration: '3:20' },
    { title: 'In the end', duration: '2:18' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
