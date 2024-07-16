import React, { useId } from 'react';
import Image from 'next/image';
import './style.scss';
import { accessoryData } from '@/constants/AccessoryConstants';
import Link from 'next/link';
import BlockCategoryItem from '@/components/block-category/BlockCategoryItem';

export default function AccessoryBanner() {
  const id = useId();
  return (
    <div className='accessory-wrapper'>
        <div className='accessory-header'>
            <Link href='/'>
                <p className='accessory-header-title'>Phụ kiện</p>
            </Link>
            <Link href='/'>
                <p className='read-more-text'>Xem thêm</p>
            </Link>
        </div>
        <div className='accessory-list'>
        {accessoryData.map((item, index) => (
          <BlockCategoryItem key={`${id}`} item={item} />
        ))}
        </div>
    </div>
  )
}
