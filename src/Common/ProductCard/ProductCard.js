import React from 'react';
import './ProductCard.css';

import { useDispatch } from 'react-redux';
import {
  pushToCart
} from '../../Store/Product/actionCreator';

const ProductCard = ({
  data
}) => {
  const dispatch = useDispatch();


  return (
    <div className="productCard-wrapper">
      <img
        data-testid={data.name}
        src="./images/grey.jpeg"
        alt={data.name}
      />
      <div className="productCard-desc">
        <div className="productCard-nameandprice">
          <div className="productCard-name">{data.name}</div>
          <div className="productCard-price">{data.price}₹</div>
        </div>
        <div className="productCard-unit">
          {
            data.units ?
              `Units ${data.units}`
              :
              `Out of Stock`
          }
        </div>
      </div>
      <button
        className="productCard-addtocart-btn"
        onClick={() => dispatch(pushToCart(data))}
      > Add To cart</button>
    </div>
  )
}

export default ProductCard;