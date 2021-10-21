// Action creator

export const selctedSong = (song) => {
  return {
    type: "SELECTED_SONG",
    payload: {
      song: song,
    },
  };
};
