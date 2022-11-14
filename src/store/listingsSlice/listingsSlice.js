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
                      } else if(item.like === true) {
                        item.likesCount = (Number(item.likesCount) - 1)
                      }
                     item.like = !item.like
                    //  console.log(item)
                }
            })
        },
        onAddAmountItem:(state,actions) => {
            state.listings.map(item => {
                if(item.id === actions.payload.id){
                    item.amount = item.amount + 1
                }
            })
        },
        onDecAmountItem:(state,actions) => {
            state.listings.map(item => {
                if(item.id === actions.payload.id){
                    item.amount = item.amount - 1
                }
            })
        },
        onClearBasket:(state,actions) => {
            state.listings.map(item => {
                item.amount = 0
            })
        },
        onDeleteItemFromBasket:(state,actions) => {
            state.listings.map(item => {
                if(item.id === actions.payload.id){
                    item.amount = 0
                }
            })
        },
        onFilterFromLowerPrice:(state) => {
            return  state.listings.sort((a,b) => a.price > b.price ? 1 : -1)
        }
        
    },
})

const {actions, reducer} = listingsSlice

export const {onToggleLike, onAddAmountItem, onDecAmountItem, onClearBasket, onDeleteItemFromBasket, onFilterFromLowerPrice} = actions

export default reducer