import React from 'react';
import './style.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
// import MobileContent from '../tests/test1';
import MobileContent from './mobile-content/MobileContent';



export default function MobileLayout() {
  return (
    <div className='mobile-layout'>
        <Header/>
        <MobileContent/>
        <Footer/>
    </div>
  )
}
