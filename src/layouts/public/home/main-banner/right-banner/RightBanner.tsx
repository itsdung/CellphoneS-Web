import { rightBannerData } from '@/constants/RightBannerContants'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import './style.scss'

export default function RightBanner() {
  return (
    <div className='right-banner'>
      {rightBannerData.map(banner => (
        <Link className='right-banner-item' href='/'>
          <Image src={banner.src} alt="banner" width={260}/>
        </Link>
      ))}
    </div>
  )
}
