import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../Api/User";
export const register = createAsyncThunk(
    "register/fetchAuth",
    async (payload) => {
        // console.log("action ===>",payload);
        const response = await UserAPI.register(payload);

        localStorage.setItem("users", JSON.stringify(response.user))

        localStorage.setItem("accessTokenRegister", JSON.stringify(response.accessToken));
        return response;
    }
);
export const login = createAsyncThunk("login/fetchAuth", async (payload) => {
    //call len sever xem cos tai khoan


    const response = await UserAPI.login(payload);
    // console.log("response", response);
    // if(!response.active) {
    //     throw new Error("Tài khoản đã bị khoá ")
    // } 
  
    localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem(
            "accessTokenRegister",
            JSON.stringify(response.accessToken)
        );
    return response;

});
export const checkStatus = createAsyncThunk("check/fetchAuth", async(id) => {

    const response = await UserAPI.statusUsers(id);
    if (response.active == 1) {
        response.active = 2
    }else {
        response.active = 1
    }
    console.log(response.active);
    return response;
})


const userSlice = createSlice({
    name: "user",
    initialState: JSON.parse(localStorage.getItem("users")) || {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state = action.payload.user;

            //set lai state cho User
            return state;
        },
        [login.fulfilled]: (state, action) => {
            state = action.payload.user;
            return state;
        },
        [checkStatus.fulfilled]:(state, action) => {
            
            return action.payload;
        }
    },
});

const { actions, reducer } = userSlice;

export default reducer;