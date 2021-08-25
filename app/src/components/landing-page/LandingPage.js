import React from 'react';

import './LandingPage.scss';

export const LandingPage = ({ onClick }) => {
  return (
    <main className='landing-container'>
      <h1 className='landing-container__title'>PriceRunner</h1>
      <button 
        className='landing-container__button' 
        onClick={onClick}>Se produkter
      </button>
    </main>
  )
};