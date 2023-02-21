import {createSlice, PayloadAction}from "@reduxjs/toolkit"

import { ResponceUserData } from "@/api/types";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
    data: ResponceUserData | null;
}

const initialState: UserState={
    data:null,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserData: (state,action:PayloadAction<ResponceUserData>)=>{
            state.data = action.payload;
        }
    },
    extraReducers:{
        [HYDRATE]:(state,action)=>{
            //state.data = action.payload.user.data;
            return{
                ...state,
                ...action.payload.user
            }
        }
    }
});

export const {setUserData} = userSlice.actions;

export const selectUserData = (state:AppState) => state.user.data;

export const userReducer = userSlice.reducer;