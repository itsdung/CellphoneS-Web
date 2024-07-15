'use client'
import React from 'react'
import Image from 'next/image';
import { HotSaleSliderData } from '@/constants/HotSaleSliderConstants'
import './style.scss'
import { Carousel } from '@/components/carousel/Carousel';
import CardItem from '@/components/Card/Card';


export default function HotSaleSlider() {
  return (
    <div className='slider-container'>
      <Carousel>
          {HotSaleSliderData.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
        </Carousel>
    </div>
  )
}
