import { iphone15DetailSlider } from '@/constants/phone-details/iphone15-promax/Iphone15ProMax'
import Image from 'next/image'
import React from 'react'
import './style.scss';
import { Carousel } from '@/components/carousel/detail-carousel/Carousel';


export default function DetailContent() {
  return (
    <div className="detail-content">
        <div className='detail-slider'>
          <Carousel>
            {iphone15DetailSlider.map((item) => (
              <div className='detail-slider-image' key={item.id}>
                <Image
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            ))}
          </Carousel>
        </div>
    </div>
  )
}
