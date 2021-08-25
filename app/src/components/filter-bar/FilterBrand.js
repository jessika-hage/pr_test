import React from 'react';

import './Filter.scss';

const names = [
  'Samsung',
  'Apple',
  'Huawei',
  'OnePlus',
  'Xiaomi',
  'Sony'
];

export const FilterBrand = ({ brand, onBrandChange, }) => {
  return (
    <div className='select-container'>
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
    </div>
  )
};