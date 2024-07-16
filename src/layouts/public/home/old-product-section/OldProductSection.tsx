import React, { useId } from 'react';
import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import BlockCategoryItem from '@/components/block-category/BlockCategoryItem';
import { oldproductData } from '@/constants/OldProductConstants';

export default function OldProductBanner() {
  const id = useId();
  return (
    <div className='oldproduct-wrapper'>
        <div className='oldproduct-header'>
            <Link href='/'>
                <p className='oldproduct-header-title'>Hàng cũ</p>
            </Link>
            <Link href='/'>
                <p className='read-more-text'>Xem thêm</p>
            </Link>
        </div>
        <div className='oldproduct-list'>
        {oldproductData.map((item, index) => (
          <BlockCategoryItem key={`${id}`} item={item} />
        ))}
        </div>
    </div>
  )
}
