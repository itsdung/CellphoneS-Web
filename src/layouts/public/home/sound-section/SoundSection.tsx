import Link from 'next/link'
import React from 'react'
import './style.scss'
import CardItem from '@/components/Card/Card'
import { Carousel } from '@/components/carousel/Carousel'
import { soundSectionListData } from '@/constants/sound/SoundSectionListConstants'
import { SoundCarouselData } from '@/constants/sound/SoundCarouselConstants'



export default function soundSection() {
  return (
    <div className='wrapper-sound'>
        <div className='sound-header'>
            <Link href='./'>
                <h2>Âm thanh</h2>
            </Link>
            <ul className='sound-list'>
            {soundSectionListData.map((sound, index) => (
                <li key={index} className='sound-list-item'>
                <Link href={`./${sound.name.toLowerCase()}`}>
                    {sound.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className='sound-slider'>
            <Carousel>
                {SoundCarouselData.map((item, index) => (
                <CardItem key={index} item={item} />
                ))}
            </Carousel>
        </div>
    </div>
  )
}