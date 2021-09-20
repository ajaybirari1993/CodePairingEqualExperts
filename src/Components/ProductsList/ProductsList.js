import React, { useEffect } from 'react';
import './ProductsList.css';

import {
  getProductList
} from '../../Services/Service';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  getProductAction
} from '../../Store/Product/actionCreator';
import {
  ProductCard
} from '../../Common/CommonIndex';

const ProductsList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);

  useEffect(() => {
    dispatch(getProductAction())
  });

  return (
    <div className="product-list-wrapper">
      {
        productList ?
          productList.map(product => {
            return (
              <ProductCard data={product} key={product.name} />
            )
          })
          :
          null
      }
    </div>
  )
}

export default ProductsList;