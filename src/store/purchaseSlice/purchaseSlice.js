import {createSlice } from "@reduxjs/toolkit";
import { PURCHASE_HISTORY_DATA } from "../../data/purchase";

const initialState = {
  purchases:[...PURCHASE_HISTORY_DATA]
}


export const purchaseSlice = createSlice({
    name:'purchase',
    initialState,
    reducers:{
        
    },
})

const {actions, reducer} = purchaseSlice

export const {} = actions

export default reducer