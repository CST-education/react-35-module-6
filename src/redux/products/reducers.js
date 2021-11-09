import { combineReducers } from 'redux';

const initState = [{ id: '', title: 'product-1' }];

const productsList = (state = initState, action) => {
  switch (action.type) {
    case 'product/add':
      return [...state, action.payload];

    case 'product/delete':
      return state.filter(product => product.id !== action.payload.id);

    default:
      return state;
  }
};

const productFilter = (state = '', action) => {
  return state;
};

export const productReducer = combineReducers({
  products: productsList,
  filter: productFilter,
});
