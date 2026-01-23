import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import myReducer from "./counterSlice"
const store=configureStore({
    reducer:{
            bgcolor:myReducer
    }
})

export default store