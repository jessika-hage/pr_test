import React from 'react';

export const Sorting = ({ 
  onSortPrice, 
  onSortRating, 
  onSortPopular }) => {
  return (
    <div className='button-container'>
      <p className='button-container__text'>Sortera efter:</p>
      <button className='button-container__button' onClick={onSortPrice}>Lägsta pris</button>
      <button className='button-container__button' onClick={onSortRating}>Bästa omdöme</button>
      <button className='button-container__button' onClick={onSortPopular}>Populärast</button>
    </div>
  )
};