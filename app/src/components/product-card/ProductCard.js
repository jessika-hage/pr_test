import React from 'react';

import { getProductImageLink } from '../../utils/imageUtils';
import './ProductCard.scss';

export const ProductCard = ({ product }) => {
  return (
    <a className='product-card' href={`https://www.pricerunner.se${product.url}`}>
      <img 
        className='product-image' 
        src={getProductImageLink(product)} 
        alt={product.id} />
      <h3 className='product-card__title'>{product.name}</h3>
      <p className='product-card__description'>{product.description}</p>
      <div className='price-rating-container'>
        <p className='price-rating-container__price'>
          {product.cheapestPrice.amount} kr
        </p>
        <div className='price-rating-container__rating'>
          <i className='fa fa-star'></i>
          {product.rating.averageRating}
        </div>
      </div>
    </a>
  )
};