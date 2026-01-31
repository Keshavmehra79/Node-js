import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./todoSlice";
const store=configureStore(
    {
        reducer:{
                mytask:myReducer
        }
    }
)

export default  store