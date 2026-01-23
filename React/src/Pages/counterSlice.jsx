import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
        name:"changecolor",
        initialState:{
            color:"green"
        },
        reducers:{
            changeTheme:(state)=>{
                state.color="pink"
            }
        }

})

export const {changeTheme}=colorSlice.actions
export default colorSlice.reducer;