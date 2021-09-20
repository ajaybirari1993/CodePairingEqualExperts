import * as actionTypes from './actionTypes';
import {
  getProductList
} from '../../Services/Service';

export const getProductAction = () => {
  return dispatch => {
    getProductList()
      .then(res => {
        dispatch(setProductData(res));
      })
  }
}

const setProductData = (data) => {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    data: data
  }
}

export const pushToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    item: item
  }
}