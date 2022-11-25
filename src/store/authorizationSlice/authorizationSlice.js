import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthorization: true,
}


export const authorizationSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{

    },
})

const {actions, reducer} = authorizationSlice

export const {} = actions

export default reducer