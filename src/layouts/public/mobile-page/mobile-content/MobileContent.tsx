import React from 'react';
import { BiHome } from 'react-icons/bi';
import Link from 'next/link';
import { MobileFilterField, mobileFilterFieldData } from '@/constants/mobile-page/MobileFilterConstants';
import './style.scss';
import { GoChevronRight } from 'react-icons/go';

export default function MobileContent() {
    
  return (
    <div className='mobile-content-wrapper'>
        <div className="mobile-navigator-container">
            <div className='mobile-navigator-content'>
                <div className='home-navigator'>
                    <BiHome className='home-navigator-icon' />
                    <Link href='/'>
                        <p className="home-navigator-text">Trang chủ</p>
                    </Link>
                </div>
                <GoChevronRight className='arrow-icon'/>
                <div className='mobile-navigator'>
                    <p className="mobile-navigator-text">Điện thoại</p>
                </div>
            </div>
        </div>

        <div className="mobile-filter">
            <p className="mobile-filter-title">Chọn theo tiêu chí</p>
            <div className="mobile-filter-list">
                {mobileFilterFieldData.map((item, index) => (
                <div key={item.id} className='mobile-filter-item'>
                    <div className='mobile-filter-item-header'>
                        {item.icon && <div className='filter-item-icon'>{item.icon}</div>}
                        <p className='filter-item-label'>{item.label}</p>
                        {item.arrow && <div className='filter-item-arrow'>{item.arrow}</div>}
                    </div>
                    {item.submenu && (
                    <div className='mobile-filter-submenu'>
                        {item.submenu.map((subItem, subIndex) => (
                        <div key={subItem.id} className='mobile-submenu-item'>
                            <p className='mobile-submenu-item-label'>{subItem.label}</p>
                        </div>
                        ))}
                    </div>
                    )}
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
