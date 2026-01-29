import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice(
   { 
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
         changeColor:((state,actions)=>{
            state.color=actions.payload.txt;               
    })
    }
   

   }

)

export const {changeColor}=todoSlice.actions;
export default todoSlice.reducer;