'use client';
import React, { useEffect, useState } from 'react';
import { BiHome } from 'react-icons/bi';
import Link from 'next/link';
import { FilterButtonData, MobileFilterField, mobileFilterFieldData } from '@/constants/mobile-page/MobileFilterConstants';
import './style.scss';
import { GoChevronRight } from 'react-icons/go';
import CardItem from '@/components/Card/Card';
import { mobileData } from '@/constants/mobile-page/MobileData';
import { IoCloseCircleOutline } from 'react-icons/io5';
import MobileNavigator from '../mobile-page/mobile-content/mobile-navigator/MobileNavigator';


const filtermobileData = (values: any[]) => {
    if (values.length === 0) {
        return mobileData;
    }
    return mobileData.filter(phone => {
      return values.some((value: any) => 
        Object.values(phone).includes(value)
      );
    });
  };

export default function MobileContent() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(mobileData);

  useEffect(() => {
    const data = filtermobileData(selectedValues);
    setFilteredData(data);
  }, [selectedValues]);

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

  const handleSubItemClick = (label: string, parentId: string) => {
    setSelectedValues(prevValues => {
      const newValues = prevValues.includes(label)
        ? prevValues.filter(value => value !== label)
        : [...prevValues, label];
      console.log(newValues);

      
      const filteredData = filtermobileData(newValues);
      console.log(filteredData);
      setFilteredData(filteredData); 

      return newValues;
    });

    if (parentId === FilterButtonData.id) {
      setOpenItemId(prevId => (prevId === FilterButtonData.id ? prevId : FilterButtonData.id));
    }
  };

  const handleClearAll = () => {
    setSelectedValues([]);
  };

  const isParentActive = (parentId: string) => {
    return selectedValues.some(value => 
      mobileFilterFieldData.some(item => 
        item.submenu?.some(subItem => subItem.label === value && item.id === parentId)
      )
    );
  };
    
  return (
    <div className='mobile-content-wrapper'>
      <MobileNavigator/>
      {/*Filter for phones*/}
      <div className="mobile-filter">
        <p className="mobile-filter-title">Chọn theo tiêu chí</p>
        <div className="mobile-filter-list">
          {/* 'Bộ lọc' button */}
          <div key={FilterButtonData.id} className={`mobile-filter-item ${openItemId === FilterButtonData.id ? 'active' : ''} ${isParentActive(FilterButtonData.id) ? 'parent-active' : ''}`}>
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
                                    <div 
                                        key={subItem.id} 
                                        className={`filter-submenu-children-item ${selectedValues.includes(subItem.label) ? 'active' : ''}`}
                                        onClick={() => handleSubItemClick(subItem.label, item.id)}
                                    >
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
          
          {/* Filter By Price */}
          <div className="filterByPrice">

          </div>

          {/* list of filter figures */}
          {mobileFilterFieldData.map((item, index) => (
            <div key={item.id} className={`mobile-filter-item ${openItemId === item.id ? 'active' : ''} ${isParentActive(item.id) ? 'parent-active' : ''}`}>
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
                        <div 
                            key={subItem.id}
                            className={`mobile-submenu-item ${selectedValues.includes(subItem.label) ? 'active' : ''}`} 
                            onClick={() => handleSubItemClick(subItem.label, item.id)}
                        >
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

      <div className='filteringby'>
        {selectedValues.length > 0 && (
            <>
              <p className="filteringby-title">Đang lọc theo</p>
              <div className='filteringby-list'>
                {selectedValues.map((value, index) => (
                  <div key={index} className='filteringby-list-item'>
                    <button 
                      className='filteringby-list-item-remove' 
                      onClick={() => setSelectedValues(selectedValues.filter(v => v !== value))}
                    >
                      <IoCloseCircleOutline />
                    </button>
                    <span className='filteringby-list-item-label'>{value}</span>
                  </div>
                ))}
                {/* Clear All Button */}
                <button className='clear-all-btn' onClick={handleClearAll}>Xoá tất cả</button>
              </div>
            </>
          )}
      </div>

      <div className="mobile-category">
        {filteredData.map((item) => (
            <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
