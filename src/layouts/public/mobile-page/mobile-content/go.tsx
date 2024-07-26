'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FilterButtonData, MobileFilterField, mobileFilterFieldData } from '@/constants/mobile-page/MobileFilterConstants';
import './style.scss';
import { GoChevronRight } from 'react-icons/go';
import CardItem from '@/components/Card/Card';
import { mobileData } from '@/constants/mobile-page/MobileData';
import { IoCloseCircleOutline } from 'react-icons/io5';
import MobileNavigator from './mobile-navigator/MobileNavigator';
import RangeSliderInput from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const filtermobileData = (values: string[], priceRange: [number, number]): typeof mobileData => {
  if (values.length === 0 && priceRange[0] === 0 && priceRange[1] === 10000000) return mobileData;

  return mobileData.filter(phone =>
    (values.length === 0 || values.some(value => Object.values(phone).some(val => val === value))) &&
    (phone.newpri >= priceRange[0] && phone.newpri <= priceRange[1])
  );
};

export default function MobileContent() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(mobileData);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 10000000]);
  const [showSlider, setShowSlider] = useState<boolean>(false);
  
  useEffect(() => {
    const data = filtermobileData(selectedValues, sliderValues);
    setFilteredData(data);
  }, [selectedValues, sliderValues]);

  const handleItemClick = (id: string) => {
    if (id === 'Giá') {
      setShowSlider(prev => !prev); // Toggle slider visibility
      setOpenItemId(null); // Close any other open menu
    } else {
      if (openItemId === id) {
        setOpenItemId(null);
      } else {
        setOpenItemId(id);
      }
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
      const filteredData = filtermobileData(newValues, sliderValues);
      setFilteredData(filteredData); 
      return newValues;
    });

    if (parentId === FilterButtonData.id) {
      setOpenItemId(prevId => (prevId === FilterButtonData.id ? prevId : FilterButtonData.id));
    }
  };

  const handleClearAll = () => {
    setSelectedValues([]);
    setSliderValues([0, 10000000]);
  };

  const handleSliderChange = (values: [number, number]) => {
    setSliderValues(values);
    const filteredData = filtermobileData(selectedValues, values);
    setFilteredData(filteredData);
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

          {/* list of filter figures */}
          {mobileFilterFieldData.map((item) => (
            item.label !== 'Giá' && (
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
                      {item.submenu.map((subItem) => (
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
            )
          ))}
          {/* 'Giá' item */}
          <div key="Giá" className={`mobile-filter-item ${showSlider ? 'active' : ''}`}>
            <div 
              className='mobile-filter-item-header'
              onClick={() => handleItemClick('Giá')}
            >
              <p className='filter-item-label'>Giá</p>
            </div>
            {showSlider && (
              <div className='filter-slider-container'>
                <RangeSliderInput
                  min={0}
                  max={10000000}
                  step={1000}
                  value={sliderValues}
                  onChange={handleSliderChange}
                />
                <div className='slider-values'>
                  <span>Giá từ: {sliderValues[0]}</span>
                  <span>Đến: {sliderValues[1]}</span>
                </div>
              </div>
            )}
          </div>
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