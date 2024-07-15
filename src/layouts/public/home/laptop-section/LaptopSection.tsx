
import Link from 'next/link'
import React from 'react'
import './style.scss'
import { Carousel } from '@/components/carousel/TwoRowsCarousel'
import CardItem from '@/components/Card/Card'
import { laptopSectionListData } from '@/constants/laptop/LaptopSectionListConstant'
import { LaptopCarouselData } from '@/constants/laptop/LaptopCarouselConstants'


export default function LaptopSection() {
  return (
    <div className='wrapper-laptop'>
        <div className='laptop-header'>
            <Link href='./'>
                <h2>Laptop</h2>
            </Link>
            <ul className='laptop-list'>
            {laptopSectionListData.map((laptop, index) => (
                <li key={index} className='laptop-list-item'>
                <Link href={`./${laptop.name.toLowerCase()}`}>
                    {laptop.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className='laptop-slider'>
            <Carousel>
                {LaptopCarouselData.map((item, index) => (
                <CardItem key={index} item={item} />
                ))}
            </Carousel>
        </div>
    </div>
  )
}
