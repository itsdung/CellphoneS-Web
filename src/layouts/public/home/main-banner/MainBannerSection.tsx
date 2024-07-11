import React from 'react'
import ServicesMenu from './services-menu/ServicesMenu'
import BannerSlider from './banner-slider/BannerSlider'
import './style.scss'
import RightBanner from './right-banner/RightBanner'
import TestSidebar from './testsidebar/TestSidebar'

export default function MainBannerSection() {
  return (
    <div className='main-banner'>
        <TestSidebar/>
        {/* <ServicesMenu/> */}
        <BannerSlider/>
        <RightBanner/>
    </div>
  )
}
