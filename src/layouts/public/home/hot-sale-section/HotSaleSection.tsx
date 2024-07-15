'use client'
import React from 'react'
import Image from 'next/image'
import Countdown, { CountdownRenderProps } from 'react-countdown';
import hotsaleBanner from '@/assets/images/banner/hot-sale-cuoi-tuan-20-03-2024.gif'
import './style.scss'
import HotSaleSlider from './hot-sale-slider/HotSaleSlider';


const addLeadingZero = (value: number) => {
  return value < 10 ? `0${value}` : value;
};


const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => {
  return (
    <div className='countdown-content'>
      <span className='countdown-item'>{addLeadingZero(days)}</span> : 
      <span className='countdown-item'>{addLeadingZero(hours)}</span> : 
      <span className='countdown-item'>{addLeadingZero(minutes)}</span> : 
      <span className='countdown-item'>{addLeadingZero(seconds)}</span>
    </div>
  );
};

export default function HotSaleSection() {
  const targetDate = new Date('2024-07-18T23:59:59');

  return (
    <div className='hotsale'>
        <div className='hotsale-title'>
            <div className='hotsale-title-box'>
                <Image className='hotsale-title-box-img' src={hotsaleBanner} alt='banner-title'/>
                <div className='hotsale-title-box-menu'>
                    <p className='box-item text-first'>Điện thoại, Tablet</p>
                    <p className='box-item text-second'>Phụ kiện</p>
                </div>
            </div>
        </div>
        <div className='banner-countdown'>
          <p className='banner-countdown-title'>Kết thúc sau:</p>
          <Countdown date={targetDate} renderer={renderer} />
        </div>
        <HotSaleSlider/>
    </div>
  )
}
