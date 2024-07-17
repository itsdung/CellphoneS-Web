import { upsaleData } from '@/constants/UpsaleSliderConstants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './style.scss'
import { Carousel } from '@/components/carousel/Carousel4'

export default function UpsaleSection() {
  return (
    <div className='upsale-section'>
        <div className='upsale-header'>
            <h2>Ưu đãi sinh viên</h2>
        </div>
        <div className='upsale-slider'>
            <Carousel>
                {upsaleData.map((item, index) => (
                    <div key={index} className='upsale-item'>
                    <Link className='upsale-link' href={item.link} >
                        {item.image && (
                            <Image
                            src={item.image}
                            alt={item.altText}
                            />
                        )}
                    </Link>
                    </div>
                ))}
            </Carousel>
        </div>
    </div>
  )
}
