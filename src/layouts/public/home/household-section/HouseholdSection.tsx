import Link from 'next/link'
import React from 'react'
import './style.scss'
import CardItem from '@/components/Card/Card'
import { Carousel } from '@/components/carousel/Carousel'
import { householdSectionListData } from '@/constants/household/HouseholdSectionListConstants'
import { HouseholdCarouselData } from '@/constants/household/HouseholdCarouselConstants'



export default function HouseholdSection() {
  return (
    <div className='wrapper-household'>
        <div className='household-header'>
            <Link href='./'>
                <h2>Đồ gia dụng</h2>
            </Link>
            <ul className='household-list'>
            {householdSectionListData.map((household, index) => (
                <li key={index} className='household-list-item'>
                <Link href={`./${household.name.toLowerCase()}`}>
                    {household.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className='household-slider'>
            <Carousel>
                {HouseholdCarouselData.map((item, index) => (
                <CardItem key={index} item={item} />
                ))}
            </Carousel>
        </div>
    </div>
  )
}
