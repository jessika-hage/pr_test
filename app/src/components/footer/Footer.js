import React from 'react';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>PriceRunner.se</p>
      <div className='icons-container'>
        <i className='fa fa-facebook'></i>
        <i className='fa fa-twitter'></i>
        <i className='fa fa-instagram'></i>
        <i className='fa fa-linkedin'></i>
      </div>
    </footer>
  )
}