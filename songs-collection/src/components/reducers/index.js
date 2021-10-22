import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      title: "Ranjha",
      duration: "03:48",
    },
    {
      title: "Kabhii Tumhhe",
      duration: "03:50",
    },
    {
      title: "Param Sundari",
      duration: "03:20",
    },
    {
      title: "Dil Galti Kar Baitha Hai",
      duration: "04:33",
    },
    {
      title: "Akhiyan Udeek Diyan",
      duration: "4:33",
    },
    {
      title: "Baarish Ban Jaana",
      duration: "03:20",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  song: songReducer,
  selectedSong: selectedSongReducer,
});
