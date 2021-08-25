import React from 'react';
import { FaStar } from 'react-icons/fa';

import { getProductImageLink } from '../../utils/imageUtils';
import './ProductCard.scss';

export const ProductCardList = ({ product }) => {
  return (
    <a className='product-card-list' href={`https://www.pricerunner.se${product.url}`}>
      <img 
        className='list-image' 
        src={getProductImageLink(product)} 
        alt={product.id} />
      <div className='text-container'>
        <h3 className='text-container__title'>{product.name}</h3>
        <p className='text-container__description'>{product.description}</p>
      </div>
      <div className='price-rating-list'>
        <p className='price-rating-list__price'>
          {product.cheapestPrice.amount} kr
        </p>
        <p className='price-rating-list__rating'>
          <span className='price-rating-container__icon'>
            <FaStar />
          </span>
          {product.rating.averageRating}
        </p>
      </div>
    </a>
  )
};