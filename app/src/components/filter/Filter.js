import React from 'react';
import { FaList, FaThLarge } from 'react-icons/fa';

import './Filter.scss';
import { Sorting } from './Sorting';
import { ChooseBrand } from './ChooseBrand';

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
      <div className='show-filter-container'>
        <div className='table-list-container'>
          <p className='table-list-container__text'>Visa som: </p>
          <span className='icons'>
            <button className='icon-button' onClick={onShowList}>
              <FaList />
            </button>
            <button className='icon-button' onClick={onShowIcons}>
              <FaThLarge />
            </button>
          </span>
        </div>
        <ChooseBrand 
          brand={brand} 
          onBrandChange={onBrandChange} />
      </div>
      <Sorting 
        onSortPrice={onSortPrice} 
        onSortRating={onSortRating} 
        onSortPopular={onSortPopular} />
    </div>
  )
};