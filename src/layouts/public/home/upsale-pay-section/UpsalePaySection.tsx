import React from 'react';
import img1 from '@/assets/images/UpsalePay/tra-gop-ba-khong-690-300-slide.png';
import img2 from '@/assets/images/UpsalePay/uu-dai-doi-tac-home.png';
import img3 from '@/assets/images/UpsalePay/uu-dai-thanh-toan-hsbc-0803-2024.png';
import img4 from '@/assets/images/UpsalePay/vib-update-01-04-2024 (2).jpg';
import './style.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function UpsalePaySection() {
  return (
    <div className='upsalepay-section'>
      <div className='upsalepay-header'>
        <h2>Ưu đãi thanh toán</h2>
      </div>
      <div className='upsalepay-list'>
        <Link className='upsalepay-link' href='/'>
          <Image className='upsalepay-image' src={img1} alt='banner'/>
        </Link>
        <Link className='upsalepay-link' href='/'>
          <Image className='upsalepay-image' src={img2} alt='banner'/>
        </Link>
        <Link className='upsalepay-link' href='/'>
          <Image className='upsalepay-image' src={img3} alt='banner'/>
        </Link>
        <Link className='upsalepay-link' href='/'>
          <Image className='upsalepay-image' src={img4} alt='banner'/>
        </Link>
      </div>
    </div>
  )
}
