import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title: "In da Club", duration: "3:20"},
        {title: "8 Miles", duration: "4:06"},
        {title: "Candy Shop", duration: "3:47"},
        {title: "Olivia", duration: "5:47"}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED") {
        return action.paylaod
    }

    return selectedSong;
}

export default combineReducers({
    song: songReducer,
    selectedSong: selectedSongReducer
});