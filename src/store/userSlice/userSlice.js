import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:1,
    name:'Yurii',
    last_name:'Storozh',
    phone_number:'+38(066)1245599',
    city:['Ternopil'],
    is_business:false,

}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    },
})

const {actions, reducer} = userSlice

 export const {} = actions

 export default reducer