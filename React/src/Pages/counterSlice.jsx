import { createSlice } from "@reduxjs/toolkit";

import React from 'react'

const counterSlice=createSlice({
    name:"mycounter",
    initialState:{
        count:0
    },
    reducers:{
         Increment:(state)=>{
        state.count=state.count+1;
    },
     Decrement:(state)=>{
        state.count=state.count-1;
    }
    }
   
})


export const {Increment,Decrement}=counterSlice.actions;
export default counterSlice.reducer;