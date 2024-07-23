import React from 'react';
import { BiHome } from 'react-icons/bi';
import Link from 'next/link';

export default function MobileContent() {
  return (
    <div className='mobile-content-wrapper'>
        <div className="mobile-navigator">
            <div className='mobile-navigator-content'>
                <div className='home-navigator'>
                    <BiHome className='home-navigator-icon' />
                    <Link href='/'>
                        <p className="home-navigator-text">Trang chủ</p>
                    </Link>
                </div>
                <div className='mobile-navigator'>
                    <p className="mobile-navigator-text">Trang chủ</p>
                </div>
            </div>
        </div>

        <div className="mobile-filter">
            
        </div>
    </div>
  )
}
