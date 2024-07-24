'use client';
import React, { useState } from 'react';
import { BiHome } from 'react-icons/bi';
import Link from 'next/link';
import { FilterButtonData, MobileFilterField, mobileFilterFieldData } from '@/constants/mobile-page/MobileFilterConstants';
import './style.scss';
import { GoChevronRight } from 'react-icons/go';

export default function MobileContent() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  };

  const handleClose = () => {
    setOpenItemId(null);
  };
    
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
          <GoChevronRight className='arrow-icon' />
          <div className='mobile-navigator'>
            <p className="mobile-navigator-text">Điện thoại</p>
          </div>
        </div>
      </div>

      <div className="mobile-filter">
        <p className="mobile-filter-title">Chọn theo tiêu chí</p>
        <div className="mobile-filter-list">

            <div key={FilterButtonData.id} className={`mobile-filter-item ${openItemId === FilterButtonData.id ? 'active' : ''}`}>
                <div 
                    className='mobile-filter-item-header'
                    onClick={() => handleItemClick(FilterButtonData.id)}
                >
                    {FilterButtonData.icon && <div className='filter-item-icon'>{FilterButtonData.icon}</div>}
                    <p className='filter-item-label'>{FilterButtonData.label}</p>
                    {FilterButtonData.arrow && <div className='filter-item-arrow'>{FilterButtonData.arrow}</div>}
                </div>
                {openItemId === FilterButtonData.id && (
                <>
                    <div className='filter-btn-submenu'>
                        {FilterButtonData.submenu && FilterButtonData.submenu.map((item) => (
                            <div key={item.id} className='filter-btn-submenu-item'>
                            <p className='filter-btn-submenu-label'>{item.label}</p>
                            {item.submenu && (
                            <div className='filter-btn-submenu-children'>
                                {item.submenu.map((subItem) => (
                                    <div key={subItem.id} className='filter-submenu-children-item'>
                                    <p className='mobile-submenu-item-label'>{subItem.label}</p>
                                    </div>
                                ))}
                            </div>
                            )}
                            </div>
                        ))}
                        </div>
                        <div className='submenu-overlay' onClick={handleClose}></div>
                </>
                )}
            </div>


          {mobileFilterFieldData.map((item, index) => (
            <div key={item.id} className={`mobile-filter-item ${openItemId === item.id ? 'active' : ''}`}>
              <div 
                className='mobile-filter-item-header'
                onClick={() => handleItemClick(item.id)}
              >
                {item.icon && <div className='filter-item-icon'>{item.icon}</div>}
                <p className='filter-item-label'>{item.label}</p>
                {item.arrow && <div className='filter-item-arrow'>{item.arrow}</div>}
              </div>
              {item.submenu && openItemId === item.id && (
                <>
                    <div className='mobile-filter-submenu'>
                    {item.submenu.map((subItem, subIndex) => (
                        <div key={subItem.id} className='mobile-submenu-item'>
                        <p className='mobile-submenu-item-label'>{subItem.label}</p>
                        </div>
                    ))}
                    </div>
                    <div className='submenu-overlay' onClick={handleClose}></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
