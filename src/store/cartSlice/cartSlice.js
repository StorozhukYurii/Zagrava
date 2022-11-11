import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    itemId: [],
}


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       onAddToCart:(state, actions) => {
        state.cart.push(actions.payload)
        console.log(state.cart)
       },
     
       
    },
})

const {actions, reducer} = cartSlice

export const {onAddToCart} = actions

export default reducer