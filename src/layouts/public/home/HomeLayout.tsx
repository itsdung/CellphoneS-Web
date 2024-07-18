'use client'
import React, { useEffect, useState } from 'react'
import { TopBannerCarousel } from './top-banner-carousel/TopBannerCarousel'
import Header from '../header/Header'
import MainBannerSection from './main-banner/MainBannerSection'
import SaleBanner from './sale-banner/SaleBanner'
import HotSaleSection from './hot-sale-section/HotSaleSection'
import PhoneSection from './phone-section/PhoneSection'
import LaptopSection from './laptop-section/LaptopSection'
import ScreenSection from './screen-section/ScreenSection'
import TabletSection from './tablet-section/TabletSection'
import SoundSection from './sound-section/SoundSection'
import WatchSection from './watch-section/WatchSection'
import HouseholdSection from './household-section/HouseholdSection'
import TVSection from './tv-section/TVSection'
import AccessoryBanner from './accessory-banner/AccessoryBanner'
import PCSection from './pc-section/PCSection'
import OldProductBanner from './old-product-section/OldProductSection'
import UpsaleSection from './upsale-section/UpsaleSection'
import UpsalePaySection from './upsale-pay-section/UpsalePaySection'
import BrandSection from './brand-section/BrandSection'
import NewsSection from './news-section/NewsSection'
import Footer from '../footer/Footer'
import dynamic from 'next/dynamic';
import { GoChevronUp } from 'react-icons/go'
import './style.scss'


export default function HomeLayout() {
  const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div className='home-layout'>
        <div className={`to-top-btn ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
          <GoChevronUp className='to-top-btn-icon' />
          <p className='to-top-text'>Lên đầu</p>
        </div>
        {/* <TopBannerCarousel/> */}
        <Header/>
        <MainBannerSection/>
        <SaleBanner/>
        <HotSaleSection/>
        <PhoneSection/>
        <LaptopSection/>
        <ScreenSection/>
        <TabletSection/>
        <SoundSection/>
        <WatchSection/>
        <HouseholdSection/>
        <TVSection/>
        <AccessoryBanner/>
        <PCSection/>
        <OldProductBanner/>
        <UpsaleSection/>
        <UpsalePaySection/>
        <BrandSection/>
        <NewsSection/>
        <Footer/>
    </div>
  )
}