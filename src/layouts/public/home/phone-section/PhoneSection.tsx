import { phoneSectionListData } from '@/constants/PhoneSectionListConstants'
import Link from 'next/link'
import React from 'react'
import './style.scss'
import { TwoRowsCarousel } from '@/components/carousel/TwoRowsCarousel'
import CardItem from '@/components/Card/Card'
import { PhoneCarouselData } from '@/constants/PhoneCarouselConstants'

export default function PhoneSection() {
  return (
    <div className='wrapper-phone'>
        <div className='phone-header'>
            <Link href='./'>
                <h2>Điện thoại nổi bật nhất</h2>
            </Link>
            <ul className='phone-list'>
            {phoneSectionListData.map((phone, index) => (
                <li key={index} className='phone-list-item'>
                <Link href={`./${phone.name.toLowerCase()}`}>
                    {phone.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className='phone-slider'>
            <TwoRowsCarousel>
                {PhoneCarouselData.map((item, index) => (
                <CardItem key={index} item={item} />
                ))}
            </TwoRowsCarousel>
        </div>
    </div>
  )
}
