import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       
    },
})

const {actions, reducer} = cartSlice

export const {} = actions

export default reducer