import React from 'react';
import './style.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MobileContent from './mobile-content/MobileContent';
import BackupMobileContent from '../tests/BackupMobileContent';



export default function MobileLayout() {
  return (
    <div className='mobile-layout'>
        <Header/>
        {/* <MobileContent/> */}
        <BackupMobileContent/>
        <Footer/>
    </div>
  )
}
