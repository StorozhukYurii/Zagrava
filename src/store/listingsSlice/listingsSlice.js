import {createSlice } from "@reduxjs/toolkit";
import { DATA_ITEM } from "../../data/data";
import { NEWS_LIST } from "../../data/news";

const initialState = {
    listings: [...DATA_ITEM],

    news: [...NEWS_LIST],
    
}


export const listingsSlice = createSlice({
    name:'listings',
    initialState,
    reducers:{
        onToggleLike:(state, action) => {
            state.listings.map(item => {
                if(item.id === action.payload.id){
                    if(item.like === false){
                        item.likesCount = (Number(item.likesCount) + 1)
                      } else {
                        item.likesCount = (Number(item.likesCount) - 1)
                      }
                     item.like = !item.like
                }
            })
        }
    },
})

const {actions, reducer} = listingsSlice

export const {onToggleLike} = actions

export default reducer