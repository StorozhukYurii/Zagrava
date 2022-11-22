import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  initialFilter: ['All', 'List display order', 'Type of product', 'Material'],

  activeFilter: 'All',

  allArray: ['All', 'Favorite'],
  orderArray: ['List display order', 'From a higher price', 'From a lower price', 'From a higher rating', 'From a lower rating'],
  typeArray: [
    'Type of product',
    'Celtic god',
    'Wicca',
    'Scandinavian god',
    'Sumerian',
    'Candel holders',
    'Ancient Greece',
  ],
  materialArray: ['Material', 'Oak', 'Pine'],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onChangeActiveFilter: (state, actions) => {
      actions.payload !== 'Type of product' 
      actions.payload !== 'Material' ||
      actions.payload !== 'List display order'
        ? (state.activeFilter = actions.payload)
        : (state.activeFilter = null);
      // state.activeFilter = actions.payload
    },
    onChangeAllFilter: (state, actions) => {
      state.initialFilter[0] = actions.payload;
    },
    onChangeOrderFilter: (state, actions) => {
      state.initialFilter[1] = actions.payload;
    },
    onChangeTypeFilter: (state, actions) => {
      state.initialFilter[2] = actions.payload;
    },
    onChangeMaterialFilter: (state, actions) => {
      state.initialFilter[3] = actions.payload;
    },
  },
});

const {actions, reducer} = filterSlice;

export const {
  onChangeActiveFilter,
  onChangeMaterialFilter,
  onChangeAllFilter,
  onChangeOrderFilter,
  onChangeTypeFilter,
} = actions;

export default reducer;