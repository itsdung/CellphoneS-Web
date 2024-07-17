import React from 'react'
import Image from 'next/image'
import verticalBanner from '@/assets/images/banner/b2s-update-19-06 (1).gif'
import './style.scss'
import Link from 'next/link'

export default function SaleBanner() {
  return (
    <div className='sale-banner'>
        <Link href='https://www.youtube.com/'>
          <Image src={verticalBanner} alt='verticalBanner'/>
        </Link>
    </div>
  )
}
