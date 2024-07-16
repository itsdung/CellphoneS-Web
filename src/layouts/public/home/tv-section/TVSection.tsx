import Link from 'next/link'
import React from 'react'
import './style.scss'
import CardItem from '@/components/Card/Card'
import { Carousel } from '@/components/carousel/Carousel'
import { tvSectionListData } from '@/constants/tv/TVSectionListConstants'
import { TVCarouselData } from '@/constants/tv/TVCarouselConstants'



export default function TVSection() {
  return (
    <div className='wrapper-TV'>
        <div className='TV-header'>
            <Link href='./'>
                <h2>Tivi</h2>
            </Link>
            <ul className='TV-list'>
            {tvSectionListData.map((TV, index) => (
                <li key={index} className='TV-list-item'>
                <Link href={`./${TV.name.toLowerCase()}`}>
                    {TV.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className='TV-slider'>
            <Carousel>
                {TVCarouselData.map((item, index) => (
                <CardItem key={index} item={item} />
                ))}
            </Carousel>
        </div>
    </div>
  )
}