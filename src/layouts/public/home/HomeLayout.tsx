import React from 'react'
import { TopBannerCarousel } from './top-banner-carousel/TopBannerCarousel'
import Header from '../header/Header'
import MainBannerSection from './main-banner/MainBannerSection'
import SaleBanner from './sale-banner/SaleBanner'
import './style.scss'
import HotSaleSection from './hot-sale-section/HotSaleSection'

export default function HomeLayout() {
  return (
    <div className='home-layout'>
        <TopBannerCarousel/>
        <Header/>
        <MainBannerSection/>
        <SaleBanner/>
        <HotSaleSection/>
    </div>
  )
}