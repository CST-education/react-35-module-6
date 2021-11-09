import { createStore } from 'redux';
import { productReducer } from './products/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(productReducer, composeWithDevTools());
