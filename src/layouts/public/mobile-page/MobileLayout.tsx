import React from 'react';
import './style.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function MobileLayout() {
  return (
    <div className='mobile-layout'>
        <Header/>
        <Footer/>
    </div>
  )
}
