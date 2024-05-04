import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import MusicAPI from '../../Api/Music'

export const handleCallMusicAPI = createAsyncThunk("listMusic/fetchAllMusic",
    async (action) => {
        const response = await MusicAPI.getAllMusic();
        console.log(response)

        localStorage.setItem('listMusic', JSON.stringify(response));
        console.log("data sau khi call " ,response);
        return response
    }
) 
 
const listMusicSlice = createSlice({
    name : "listMusic",
    initialState :JSON.parse(localStorage.getItem("listMusic")) || [],
    extraReducers : {
        [handleCallMusicAPI.fulfilled] : (state,action) => {
            state = action.payload;

            return state;
        }
    }

})
const {actions,reducer} = listMusicSlice

export default reducer ;
  

