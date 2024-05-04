import { createSlice } from "@reduxjs/toolkit";

export const MusicFavorites = createSlice({
    name: "Favorites",
    initialState: JSON.parse(localStorage.getItem("musicFavorites")) || [],
    reducers: {
        addToListMusic: (state, action) => {
            const findIdexListMusic = state.findIndex(
                (item) => item.id === action.payload.id
                
            );
            // console.log("22222=======>",findIdexListMusic);
            state.push(action.payload)
            localStorage.setItem("musicFavorites", JSON.stringify(state));
            return state
        }
    }
})
const { actions, reducer } = MusicFavorites

export const { addToListMusic } = actions;

export default reducer
