import { newsData } from '@/constants/NewsItemConstants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './style.scss'

export default function NewsSection() {
  return (
    <div className='news-section'>
        <div className='news-header'>
            <h2>Tin công nghệ</h2>
            <p className='read-all-btn'>Xem tất cả</p>
        </div>
        <div className='news-list'>
            {newsData.map((item, index) => (
                <div key={index} className='news-item'>
                    <Link className='news-link' href={item.link}>
                        <Image className='news-image' src={item.img} alt='post-thumb'   />
                    </Link>
                    <p className='news-post'>{item.post}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
