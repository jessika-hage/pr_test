import React from 'react';

import { Category } from '../category/Category';
import './Root.scss';

export default function App() {
  return (
    <div>
      <header className="header">
        <strong className="header__pricerunner">PriceRunner</strong>
        <i className='fa fa-home'></i>
      </header>
      <div className="container">
      <h2 className='container__category-title'>Mobiltelefoner</h2>
        <div className="content">
          <Category />
        </div>
      </div>
    </div>
  );
}
