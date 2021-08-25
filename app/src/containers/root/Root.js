import React from 'react';

import { Category } from '../category/Category';
import { Footer } from '../../components/footer/Footer';
import './Root.scss';

export default function App() {
  return (
    <div>
      <header className="header">
        <strong className="header__pricerunner">PriceRunner</strong>
        <i className='fa fa-home'></i>
      </header>
      <div className="container">
        <div className="content">
          <Category />
        </div>
      </div>
      <Footer />
    </div>
  );
}
