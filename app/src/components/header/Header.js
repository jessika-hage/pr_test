import React from 'react';
import { FaHome } from 'react-icons/fa';

import './Header.scss';

export const Header = ({ onClick }) => {
  return (
    <header className='header'>
      <h1 className='header__pricerunner'>
        PriceRunner
      </h1>
      <button className='header__button' onClick={onClick}>
        <FaHome />
      </button>
    </header>
  )
};