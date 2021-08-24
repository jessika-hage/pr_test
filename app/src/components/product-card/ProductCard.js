import React from 'react';

import { getProductImageLink } from '../../utils/imageUtils';
import './ProductCard.scss';

export const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <img 
        className='product-image' 
        src={getProductImageLink(product)} 
        alt={product.id} />
      <h3 className='product-title'>{product.name}</h3>
    </div>
  )
};