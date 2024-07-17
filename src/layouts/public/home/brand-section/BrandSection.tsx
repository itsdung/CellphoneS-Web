import img1 from '@/assets/images/brand-banner/SIS asus.png';
import img2 from '@/assets/images/brand-banner/apple-chinh-hang-home.png';
import img3 from '@/assets/images/brand-banner/gian-hang-samsung-home.png';
import img4 from '@/assets/images/brand-banner/xiaomi.png';
import './style.scss';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function BrandSection() {
  return (
    <div className='brand-section'>
      <div className='brand-header'>
        <h2>Chuyên trang thương hiệu</h2>
      </div>
      <div className='brand-list'>
        <Link className='brand-link' href='/'>
          <Image className='brand-image' src={img1} alt='banner'/>
        </Link>
        <Link className='brand-link' href='/'>
          <Image className='brand-image' src={img2} alt='banner'/>
        </Link>
        <Link className='brand-link' href='/'>
          <Image className='brand-image' src={img3} alt='banner'/>
        </Link>
        <Link className='brand-link' href='/'>
          <Image className='brand-image' src={img4} alt='banner'/>
        </Link>
      </div>
    </div>
  )
}

