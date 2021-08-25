import React from 'react';

import './Filter.scss';
import { Sorting } from './Sorting';
import { FilterBrand } from './FilterBrand';

export const Filter = ({ 
  onShowAll,
  brand, 
  onBrandChange, 
  onSortPrice, 
  onSortRating, 
  onSortPopular,
  onShowList,
  onShowIcons }) => {
  return (
    <div className='filter-container'>
      <button className='button-show-all' onClick={onShowAll}>Visa alla</button>
      <div className='show-as-container'>
        <p className='show-as-container__text'>
          Visa som: 
          <span className='icons'>
            <i className='fa fa-list' onClick={onShowList} tabIndex='0'></i>
            <i className='fa fa-th-large' onClick={onShowIcons} tabIndex='0'></i>
          </span>
        </p>
        <FilterBrand brand={brand} onBrandChange={onBrandChange} />
      </div>
      <Sorting 
        onSortPrice={onSortPrice} 
        onSortRating={onSortRating} 
        onSortPopular={onSortPopular} />
    </div>
  )
};