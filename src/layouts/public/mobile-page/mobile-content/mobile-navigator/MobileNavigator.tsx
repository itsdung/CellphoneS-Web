import React from 'react';
import './style.scss';
import { BiHome } from 'react-icons/bi';
import Link from 'next/link';
import { GoChevronRight } from 'react-icons/go';

export default function MobileNavigator() {
  return (
    <div className="mobile-navigator-container">
      <div className='mobile-navigator-content'>
        <div className='home-navigator'>
          <BiHome className='home-navigator-icon' />
          <Link href='/'>
            <p className="home-navigator-text">Trang chủ</p>
          </Link>
        </div>
        <GoChevronRight className='arrow-icon' />
        <div className='mobile-navigator'>
          <p className="mobile-navigator-text">Điện thoại</p>
        </div>
      </div>
    </div>
  )
}
