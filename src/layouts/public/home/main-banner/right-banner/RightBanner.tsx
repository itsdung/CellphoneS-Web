'use client'
import { rightBannerData } from '@/constants/RightBannerContants'
import Link from 'next/link'
import Image from 'next/image'
import React, { useId } from 'react'
import './style.scss'

export default function RightBanner() {
  const id = useId();
  return (
    <div className='right-banner'>
      {rightBannerData.map((banner,index) => (
        <Link className='right-banner-item' href='/' key={`${id}`}>
          <Image src={banner.src}  alt="banner" width={260}/>
        </Link>
      ))}
    </div>
  )
}
