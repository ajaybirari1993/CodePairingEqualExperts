import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import productReducer from './Product/reducer';

export default createStore(productReducer, applyMiddleware(thunk));