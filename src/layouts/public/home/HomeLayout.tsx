'use client'
import React, { useEffect, useState } from 'react'
import { TopBannerCarousel } from './top-banner-carousel/TopBannerCarousel'
import Header from '../header/Header'
import MainBannerSection from './main-banner/MainBannerSection'
import SaleBanner from './sale-banner/SaleBanner'
import HotSaleSection from './hot-sale-section/HotSaleSection'
import PhoneSection from './phone-section/PhoneSection'
import './style.scss'
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
import { GoChevronUp } from 'react-icons/go'

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
    </div>
  )
}