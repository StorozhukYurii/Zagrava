import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    id: '',
    name: '',
    last_name: '',
    phone_number: '',
    city: '',
    is_business: false,
    rank: 'beginner',


    // id:1,
    // name:'Yurii',
    // last_name:'Storozh',
    // phone_number:'+38(066)1245599',
    // city:'Ternopil',
    // is_business:false,
    // rank:'beginner',
    users: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addNewUser: (state, actions) => {
            state.id = actions.payload.id
            state.name = actions.payload.name
            state.last_name = actions.payload.last_name
            state.phone_number = actions.payload.phone_number
            state.city = actions.payload.city
            state.is_business = false
            state.rank = 'beginner'

            state.users.push({ id: state.id, name: state.name, last_name: state.last_name, phone_number: state.phone_number, city: state.city, is_business: state.is_business, rank: state.rank })
            console.log(state.users)
        },
        // checkId:(state, actions) => {
        //     if(state.id === null){
        //        return  console.log(true, 'state id')
        //     } else return console.log(state.id, 'real')
        // },
        checkExitingNumber: (state, actions) => {
            // state.users.filter(item => {
            //     if (item.phone_number === actions.payload) {
                    state.id = actions.payload.id
                    state.name = actions.payload.name
                    state.last_name = actions.payload.last_name
                    state.phone_number = actions.payload.phone_number
                    state.city = actions.payload.city
                    state.is_business = actions.payload.is_business
                    state.rank = actions.payload.rank
            //     }
            // })
        },
        logOut: (state, actions) => {
            state.id = null
            state.name = ''
            state.last_name = ''
            state.phone_number = ''
            state.city = ''
            state.is_business = null
            state.rank = ''
        }
    },
})

const { actions, reducer } = userSlice

export const { addNewUser, checkId, logOut, checkExitingNumber } = actions

export default reducer