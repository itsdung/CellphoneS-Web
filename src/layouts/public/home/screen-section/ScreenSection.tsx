import Link from 'next/link'
import React from 'react'
import './style.scss'
import CardItem from '@/components/Card/Card'
import { screenSectionListData } from '@/constants/screen/ScreenSectionListConstants'
import { ScreenCarouselData } from '@/constants/screen/ScreenCarouselConstants'
import { Carousel } from '@/components/carousel/Carousel'



export default function ScreenSection() {
  return (
    <div className='wrapper-screen'>
        <div className='screen-header'>
            <Link href='./'>
                <h2>Màn hình, máy tính để bàn</h2>
            </Link>
            <ul className='screen-list'>
            {screenSectionListData.map((screen, index) => (
                <li key={index} className='screen-list-item'>
                <Link href={`./${screen.name.toLowerCase()}`}>
                    {screen.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className='screen-slider'>
            <Carousel>
                {ScreenCarouselData.map((item, index) => (
                <CardItem key={index} item={item} />
                ))}
            </Carousel>
        </div>
    </div>
  )
}
