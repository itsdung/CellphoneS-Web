import React from 'react'
import ServicesMenu from './services-menu/ServicesMenu'
import BannerSlider from './banner-slider/BannerSlider'
import RightBanner from './right-banner/RightBanner'
import './style.scss'


export default function MainBannerSection() {
  return (
    <div className='main-banner'>
        <ServicesMenu/>
        <BannerSlider/>
        <RightBanner/>
    </div>
  )
}
