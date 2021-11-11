import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initState = [{ id: '', title: 'product-1' }];

const productsList = createReducer(initState, {
  'product/add': (state, { payload }) => [...state, payload],
  'product/delete': (state, { payload }) =>
    state.filter(product => product.id !== payload.id),
});
const productFilter = createReducer('', {
  'filter/value': (_, { payload }) => payload,
});
// const productsList = (state = initState, action) => {
//   switch (action.type) {
//     case 'product/add':
//       return [...state, action.payload];
//     case 'product/delete':
//       return state.filter(product => product.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// const productFilter = (state = '', { payload }) => {
//   return payload;
// };

export const productReducer = combineReducers({
  products: productsList,
  filter: productFilter,
});
