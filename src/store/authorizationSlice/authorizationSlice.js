import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthorization: false,
}


export const authorizationSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuthorization:(state, actions) => {
            state.isAuthorization = actions.payload
        },
    },
})

const {actions, reducer} = authorizationSlice

export const {setAuthorization} = actions

export default reducer