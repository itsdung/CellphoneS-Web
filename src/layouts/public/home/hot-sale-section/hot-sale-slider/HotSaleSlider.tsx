'use client'
import React from 'react'
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { HotSaleSliderData } from '@/constants/HotSaleSliderConstants'
import './style.scss'
import { Carousel } from 'react-responsive-carousel';
import ribbon from '@/assets/icons/wrap.png'

export default function HotSaleSlider() {
  return (
    <div className='slider-container'>
      <Carousel
          showThumbs={false}
          // autoPlay={true}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          // centerMode={true}
          // centerSlidePercentage={50}
        >
          {HotSaleSliderData.map((item, index) => (
          <div key={index} className='card-item'>
            <div className='card-item-discount'>
              <Image src={ribbon} alt='ribbon'/>
              <span className='discount-text'>{item.discount}</span>
              <span className='payway'>{item.payway}</span>
            </div>
            <div className='card-item-image'>
              <Image src={item.img} alt='picture'/>
            </div>
            <div className='card-item-name'>
              <p>{item.name}</p>
            </div>
            <div className='card-item-price'>
              <p className='item-newprice'>{item.newpri}</p>
              <p className='item-oldprice'>{item.oldpri}</p>
            </div>
            <div className='card-item-desc'>
              <p>{item.desc}</p>
            </div>
            <div className='card-item-feedback'>
              <div className='item-star'>
                {item.stars}
              </div>
              <div className='item-love'>
                <p>Yêu thích</p>
                <div className='love-icon'>{item.loveIc}</div>
              </div>
            </div>
          </div>
        ))}
        </Carousel>
    </div>
  )
}
