import * as actionTypes from './actionTypes';

const initialState = {
  productList: [],
  cartItems: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        productList: action.data
      }
      break;
    case actionTypes.ADD_TO_CART:
      let newItem = null;
      let searchedItem = state.cartItems.find(item => item.productId === action.item.productId);
      let newListOfItems = [];

      if (searchedItem) {
        newListOfItems = state.cartItems.map(item => {
          if (item.productId == searchedItem.productId) {
            return {
              ...item,
              qty: item.qty + 1
            }
          }
        })
      } else {
        newItem = {
          ...action.item,
          qty: 1
        }
        newListOfItems.push(newItem)
      }
      return {
        ...state,
        cartItems: newListOfItems
      }

    default:
      return state;
  }
}