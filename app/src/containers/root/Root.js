import React, { useState } from 'react';

import { Category } from '../category/Category';
import { Footer } from '../../components/footer/Footer';
import { LandingPage } from '../../components/landing-page/LandingPage';
import { Header } from '../../components/header/Header';
import './Root.scss';

export const Root = () => {
  const [landingPage, setLandingPage] = useState(true);

  return (
    <>
      {landingPage ?
        <LandingPage onClick={() => setLandingPage(false)} /> 
        : 
        <>
          <Header onClick={() => setLandingPage(true)} />
          <div className="container">
            <div className="content">
              <Category />
            </div>
          </div>
          <Footer />
        </>
      }
    </>
  );
};
