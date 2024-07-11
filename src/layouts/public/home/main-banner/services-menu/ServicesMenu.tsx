'use client'
import { serviceMenuData } from '@/constants/ServicesMenuConstant'
import React, { useState } from 'react'
import './style.scss'
import { IoChevronForwardOutline } from 'react-icons/io5'

export default function ServicesMenu() {

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
                    <IoChevronForwardOutline className='item-arrow'/>
                </div>
            ))}
        </div>
    </div>
  )
}
