import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn } from 'react-icons/fa';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>PriceRunner.se</p>
      <div className='footer__icons-container'>
        <p className='footer__icon' tabIndex='0'><FaFacebook /></p>
        <p className='footer__icon' tabIndex='0'><FaTwitter /></p>
        <p className='footer__icon' tabIndex='0'><FaInstagram /></p>
        <p className='footer__icon' tabIndex='0'><FaLinkedinIn /></p>
      </div>
    </footer>
  )
};