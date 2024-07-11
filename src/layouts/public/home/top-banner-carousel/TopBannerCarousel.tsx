'use client'
import React from 'react'
import "./style.scss";
import Image from 'next/image';
import { Carousel } from '@/components/carousel/Carousel';
import { topCarouselData } from '@/constants/TopSliderConstants';


export function TopBannerCarousel() {
  return (
    <div className='top-banner-carousel'>
        <Carousel >
            {topCarouselData.map((item, index) => (
            <div key={index} className='carousel-item'>
                <Image src={item.src} alt={item.alt} className='carousel-image' />
            </div>
            ))}
        </Carousel>
    </div>
  )
}
