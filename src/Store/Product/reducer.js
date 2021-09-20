import * as actionTypes from './actionTypes';

const initialState = {
  productList: [],
  cartItem: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT:
        return {
          ...state,
          productList: action.data
        }
      break;
  
    default:
      return state;
  }
}