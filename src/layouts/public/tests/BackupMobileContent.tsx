'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FilterButtonData, MobileFilterField, PriceButtonData, mobileFilterFieldData } from '@/constants/mobile-page/MobileFilterConstants';
import './style.scss';
import CardItem from '@/components/Card/Card';
import { mobileData } from '@/constants/mobile-page/MobileData';
import { IoCloseCircleOutline } from 'react-icons/io5';
import PriceSlider from '@/components/price-slider/PriceSlider';
import MobileNavigator from '../mobile-page/mobile-content/mobile-navigator/MobileNavigator';


const filtermobileData = (values: any[], minPrice: number, maxPrice: number) => {
  if (values.length === 0) {
    return mobileData.filter(phone => phone.newpri >= minPrice && phone.newpri <= maxPrice);
  }
  return mobileData.filter(phone => {
    return values.some((value: any) => 
      Object.values(phone).includes(value)
    ) && phone.newpri >= minPrice && phone.newpri <= maxPrice;
  });
};

export default function MobileContent() {
const [openItemId, setOpenItemId] = useState<string | null>(null);
const [selectedValues, setSelectedValues] = useState<string[]>([]);
const [selectedValuesTemp, setSelectedValuesTemp] = useState<string[]>([]);
const [filteredData, setFilteredData] = useState(mobileData);
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(55000000);

useEffect(() => {
  const data = filtermobileData(selectedValues, minPrice, maxPrice);
  setFilteredData(data);
}, [selectedValues, minPrice, maxPrice]);

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
  setSelectedValuesTemp(prevValues => {
    const newValues = prevValues.includes(label)
      ? prevValues.filter(value => value !== label)
      : [...prevValues, label];

    console.log("Temporary Selected Values:", newValues);

    // Set selectedValuesTemp before updating selectedValues
    setSelectedValuesTemp(newValues);
  
    return newValues;
  });


  // Manage the open/close state of the filter panel
  if (parentId === FilterButtonData.id) {
    setOpenItemId(prevId => (prevId === FilterButtonData.id ? null : FilterButtonData.id));
  }
};

const handleClearAll = () => {
  setSelectedValues([]);
};

const handleApplyFilters = () => {
  // Cập nhật updatedValues từ selectedValuesTemp
  const updatedValues = selectedValuesTemp;
  console.log("Final Selected Values:", updatedValues);
  setSelectedValues(updatedValues);

  // Thực hiện lọc dữ liệu tại đây
  const filteredData = filtermobileData(updatedValues, minPrice, maxPrice);
  setFilteredData(filteredData);
};

// Hàm xử lý khi chọn hoặc bỏ chọn item
const handleToggleItem = (item: any) => {
  setSelectedValuesTemp((prevSelectedValuesTemp) => {
    const updatedValuesTemp = new Set(prevSelectedValuesTemp);

    if (updatedValuesTemp.has(item)) {
      updatedValuesTemp.delete(item); // Xóa item nếu đã có
    } else {
      updatedValuesTemp.add(item); // Thêm item nếu chưa có
    }

    // Cập nhật selectedValuesTemp
    const updatedValues = Array.from(updatedValuesTemp);
    setSelectedValuesTemp(updatedValues);

    return updatedValues;
  });
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
                  <div className='filter-btn-submenu-group' >
                    {FilterButtonData.submenu && FilterButtonData.submenu.map((item) => (
                      <div key={item.id} className='filter-btn-submenu-item'>
                        <p className='filter-btn-submenu-label'>{item.label}</p>
                        {item.submenu && (
                        <div className='filter-btn-submenu-children'>
                        {item.submenu.map((subItem) => (
                        <div 
                          key={subItem.id} 
                          className={`filter-submenu-children-item ${selectedValuesTemp.includes(subItem.label) || selectedValues.includes(subItem.label) ? 'active' : ''}`}
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
                  {(selectedValuesTemp.length || selectedValues.length) > 0 && (
                    <div className='submenu-close-group'>
                      <button className='close-btn' onClick={handleClose}>Đóng</button>
                      <button className='apply-filters-btn' onClick={handleApplyFilters}>
                        Áp dụng bộ lọc
                      </button>
                    </div>
                  )}
                </div>
                <div className='submenu-overlay' onClick={handleClose}></div>
                </>
                )}
          </div>
          
          {/* 'Giá' button */}
          <div key={PriceButtonData.id} className={`mobile-filter-item ${openItemId === PriceButtonData.id ? 'active' : ''} ${isParentActive(PriceButtonData.id) ? 'parent-active' : ''}`}>
            <div className='mobile-filter-item-header' onClick={() => handleItemClick(PriceButtonData.id)}>
              {PriceButtonData.icon && <div className='filter-item-icon'>{PriceButtonData.icon}</div>}
              <p className='filter-item-label'>{PriceButtonData.label}</p>
              {PriceButtonData.arrow && <div className='filter-item-arrow'>{PriceButtonData.arrow}</div>}
            </div>
            {openItemId === PriceButtonData.id && (
              <>
                <div className="mobile-filter-submenu price-container">
                  <PriceSlider
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onPriceChange={(min, max) => {
                      setMinPrice(min);
                      setMaxPrice(max);
                    }}
                  />
                  <div className='submenu-overlay' onClick={handleClose}></div>
                </div>
              </>
            )}
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
                      <div className='submenu-item-group'>
                        {item.submenu.map((subItem, subIndex) => (
                          <div 
                              key={subItem.id}
                              className={`mobile-submenu-item ${selectedValuesTemp.includes(subItem.label) ? 'active' : ''}`} 
                              onClick={() => handleSubItemClick(subItem.label, item.id)}
                          >
                          <p className='mobile-submenu-item-label'>{subItem.label}</p>
                          </div>
                      ))}
                      </div>
                      {(selectedValuesTemp.length || selectedValues.length) > 0 && (
                        <div className='submenu-close-group'>
                          <button className='close-btn' onClick={handleClose}>Đóng</button>
                          <button className='apply-filters-btn' onClick={handleApplyFilters}>
                            Áp dụng bộ lọc
                          </button>
                        </div>
                      )}
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
