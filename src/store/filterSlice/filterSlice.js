import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  initialFilter: ['All', 'Price', 'Type of product', 'Material', 'Rating'],
  
  activeFilter:'All',

  allArray:['All', 'Favorite'],
  priceArray:['Price', 'From a higher price', 'From a lower price'],
  typeArray:[
    'Type of product',
    'Celtic god',
    'Wicca',
    'Scandinavian god',
    'Sumerian',
    'Candel holders',
    'Ancient Greece',
  ],
  materialArray:['Material', 'Oak', 'Pine'],
  ratingArray:['Rating', 'From a higher rating', 'From a lower rating'],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onChangeActiveFilter:(state, actions) => {
        state.activeFilter = actions.payload
    },
    onChangeAllFilter:(state, actions) => {
        state.initialFilter[0] = actions.payload
    },
    onChangePriceFilter:(state, actions) => {
        state.initialFilter[1] = actions.payload
    },
    onChangeTypeFilter:(state, actions) => {
        state.initialFilter[2] = actions.payload
    },
    onChangeMaterialFilter:(state, actions) => {
        state.initialFilter[3] = actions.payload
    },
    onChangeRatingFilter:(state, actions) => {
        state.initialFilter[4] = actions.payload
    },
  },
});

const {actions, reducer} = filterSlice;

export const {onChangeActiveFilter, onChangeMaterialFilter,onChangeAllFilter, onChangePriceFilter, onChangeRatingFilter, onChangeTypeFilter} = actions;

export default reducer;
