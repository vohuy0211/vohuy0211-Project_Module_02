import { createSlice } from '@reduxjs/toolkit';



export const SongSlice = createSlice({
    name: 'songIndex',
    initialState: {},
    reducers: {
        setSongIndex: (state, action) => {
            // console.log("11111",action);
            state = action.payload;
            return state;
        },
    },
});

const { actions, reducer } = SongSlice;
export const {setSongIndex} = actions;

export default reducer;
