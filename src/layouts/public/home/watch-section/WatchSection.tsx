import Link from 'next/link'
import React from 'react'
import './style.scss'
import CardItem from '@/components/Card/Card'
import { Carousel } from '@/components/carousel/Carousel'
import { watchSectionListData } from '@/constants/watch/WatchSectionListConstants'
import { WatchCarouselData } from '@/constants/watch/WatchCarouselConstants'



export default function WatchSection() {
  return (
    <div className='wrapper-watch'>
        <div className='watch-header'>
            <Link href='./'>
                <h2>Đồng hồ thông minh</h2>
            </Link>
            <ul className='watch-list'>
            {watchSectionListData.map((watch, index) => (
                <li key={index} className='watch-list-item'>
                <Link href={`./${watch.name.toLowerCase()}`}>
                    {watch.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className='watch-slider'>
            <Carousel>
                {WatchCarouselData.map((item, index) => (
                <CardItem key={index} item={item} />
                ))}
            </Carousel>
        </div>
    </div>
  )
}