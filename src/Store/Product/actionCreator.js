import * as actionTypes from './actionTypes';
import {
  getProductList
} from '../../Services/Service';

export const getProductAction = () =>{
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