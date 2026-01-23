import { createSlice } from "@reduxjs/toolkit";

import React from 'react'

const colorSlice=createSlice({
    name:"bgcolor",
    initialState:{
        color:"red"
    },
    reducers:{
        kuchbhi:(state)=>{
            state.color="pink"
        }
    }
   
})


export const {kuchbhi}=colorSlice.actions;
export default colorSlice.reducer;