import { createSlice } from "@reduxjs/toolkit";

const slice  = createSlice({
    name: "user",
    initialState:{
        isLoggedIn: false,
        email: null,
        token: null,
        id:null,
        phoneNumber:null,
        name:null
    },
    reducers:{
        setUser: (state,action)=>{ // action.payload
           let {email,token, id, phoneNumber, name} = action.payload;
           state.email = email;
           state.token = token;
           state.id = id;
           state.phoneNumber = phoneNumber;
           state.name = name;
           state.isLoggedIn = true; 
        },
        SignOut:(state,action)=>{
           state.email = null;
           state.token = null;
           state.id = null;
           state.phoneNumber = null;
           state.name = null;
           state.isLoggedIn = false;
        }
    }
});

export const {setUser,SignOut} = slice.actions;

export default slice.reducer;