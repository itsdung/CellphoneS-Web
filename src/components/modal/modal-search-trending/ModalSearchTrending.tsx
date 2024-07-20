'use client'
import banner from '@/assets/images/banner/b2s-update-19-06 (1).png';
import { trendingBoxData } from '@/constants/search-trending/SearchTrendingConstants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './style.scss';

interface ModalProps {
    onClose: () => void;
}

export default function ModalSearchTrending({ onClose }: ModalProps) {
  return (
    <div className='search-trending' onClick={onClose}>
        <div className="search-trending-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="search-trending-banner">
                <Link href='/'>
                    <Image src={banner} alt='banner'/>
                </Link>
            </div>
            <div className="trending-title">
                <p className="trending-title-text">Xu hướng tìm kiếm</p>
            </div>
            <div className="trending-list">
                {trendingBoxData.map((item, index) => (
                <div key={index} className="trending-list-item">
                    <Link className='trending-list-item-link' href={item.link}>
                        <Image src={item.img} alt={item.alt} />
                        <p>{item.name}</p>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
