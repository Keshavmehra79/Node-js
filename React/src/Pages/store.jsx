import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./todoSlice"
const store=configureStore(
    {
        reducer:{
            mycolor:myReducer
        }
    }
)

export default store