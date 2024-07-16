import React, { useId } from 'react';
import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import BlockCategoryItem from '@/components/block-category/BlockCategoryItem';
import { pcData } from '@/constants/PCBlockConstants';

export default function PCSection() {
  const id = useId();
  return (
    <div className='pc-wrapper'>
        <div className='pc-header'>
            <Link href='/'>
                <p className='pc-header-title'>Linh kiện máy tính</p>
            </Link>
            <Link href='/'>
                <p className='read-more-text'>Xem thêm</p>
            </Link>
        </div>
        <div className='pc-list'>
        {pcData.map((item, index) => (
          <div key={`${id}`} className={`pc-item pc-item-${item.position}`}>
            <BlockCategoryItem item={item} />
          </div>
        ))}
        </div>
    </div>
  )
}

