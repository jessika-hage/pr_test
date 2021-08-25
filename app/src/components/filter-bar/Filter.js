import React from 'react';

import './Filter.scss';
import { Sorting } from './Sorting';

const names = [
  'Samsung',
  'Apple',
  'Huawei',
  'OnePlus',
  'Xiaomi',
  'Sony'
];

export const Filter = ({ 
  brand, 
  onBrandChange, 
  onSortPrice, 
  onSortRating, 
  onSortPopular }) => {
  return (
    <div className='filter-container'>
      <select 
        name='select-brand'
        className='select'
        onChange={onBrandChange}
        value={brand}>
          <option value=''>Välj märke:</option>
          {names.map(name => 
            <option 
              key={name}
              value={name}>{name}</option>
          )}
        </select>
        <Sorting 
          onSortPrice={onSortPrice} 
          onSortRating={onSortRating} 
          onSortPopular={onSortPopular} />
    </div>
  )
};