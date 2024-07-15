import Link from 'next/link'
import React from 'react'
import './style.scss'
import CardItem from '@/components/Card/Card'
import { Carousel } from '@/components/carousel/Carousel'
import { tabletSectionListData } from '@/constants/tablet/TabletListConstants'
import { TabletCarouselData } from '@/constants/tablet/TabletCarouselConstants'



export default function TabletSection() {
  return (
    <div className='wrapper-tablet'>
        <div className='tablet-header'>
            <Link href='./'>
                <h2>Máy tính bảng</h2>
            </Link>
            <ul className='tablet-list'>
            {tabletSectionListData.map((tablet, index) => (
                <li key={index} className='tablet-list-item'>
                <Link href={`./${tablet.name.toLowerCase()}`}>
                    {tablet.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className='tablet-slider'>
            <Carousel>
                {TabletCarouselData.map((item, index) => (
                <CardItem key={index} item={item} />
                ))}
            </Carousel>
        </div>
    </div>
  )
}