'use client'
import { serviceMenuData } from '@/constants/ServicesMenuConstant';
import React, { useState } from 'react';
import './style.scss';
import { IoChevronForwardOutline } from 'react-icons/io5';

export default function TestSidebar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className='services-menu'>
      <div className='menu-wrapper'>
        {serviceMenuData.map((item, index) => (
          <div key={index} className='menu-item' onMouseEnter={() => handleMouseEnter(item.title)} onMouseLeave={handleMouseLeave}>
            <div className='menu-item-left'>
              <div className='menu-item-left-icon'>{React.isValidElement(item.icon) ? item.icon : null}</div>
              <div className='title'>{item.title}</div>
            </div>
            <IoChevronForwardOutline className='item-arrow' />
            {hoveredItem === item.title && item.subMenu && (
              <div className='sub-menu'>
                {item.subMenu.map((subItem, subIndex) => (
                  <div key={subIndex} className='sub-menu-column'>
                    <div className='sub-menu-title'>{subItem.title}</div>
                    {subItem.subMenu && (
                      <ul className='sub-menu-list'>
                        {subItem.subMenu.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex}>{subSubItem.title}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}