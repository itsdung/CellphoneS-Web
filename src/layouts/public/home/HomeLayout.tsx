import React from 'react'
import { TopBannerCarousel } from './top-banner-carousel/TopBannerCarousel'
import Header from '../header/Header'
import MainBannerSection from './main-banner/MainBannerSection'

export default function HomeLayout() {
  return (
    <div>
        <TopBannerCarousel/>
        <Header/>
        <MainBannerSection/>
    </div>
  )
}