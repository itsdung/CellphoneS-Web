import React from 'react'
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

export default function HomeLayout() {
  return (
    <div className='home-layout'>
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
    </div>
  )
}