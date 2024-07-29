'use client';
import React, { useEffect, useState } from 'react';
import CardItem from '@/components/Card/Card';
import MobileNavigator from './mobile-navigator/MobileNavigator';
import FilterButton from './mobile-filter-button/FilterButton';
import PriceButton from './mobile-price-button/PriceButton';
import FilterItem from './filter-item/FilterItem';
import FilteringBy from './filteringby-section/FilteringBy';
import { FilterButtonData, MobileFilterField, PriceButtonData, mobileFilterFieldData } from '@/constants/mobile-page/MobileFilterConstants';
import { mobileData } from '@/constants/mobile-page/MobileData';
import './style.scss';

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
  setSelectedValues(prevValues => {
    const newValues = prevValues.includes(label)
      ? prevValues.filter(value => value !== label)
      : [...prevValues, label]; // Add label if it's not already selected

    // Update filtered data when selected values change
    const data = filtermobileData(newValues, minPrice, maxPrice);
    setFilteredData(data);
    console.log(newValues);

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
      <div className="mobile-filter">
        <p className="mobile-filter-title">Chọn theo tiêu chí</p>
        <div className="mobile-filter-list">
          {/* 'Bộ lọc' button */}
          <FilterButton
            openItemId={openItemId}
            handleItemClick={handleItemClick}
            handleSubItemClick={handleSubItemClick}
            handleClose={handleClose}
            selectedValues={selectedValues}
            FilterButtonData={FilterButtonData}
            isParentActive={isParentActive}
          />
          {/* 'Bộ lọc' button */}
          
          {/* 'Giá' button */}
          <PriceButton
            openItemId={openItemId}
            handleItemClick={handleItemClick}
            handleClose={handleClose}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            PriceButtonData={PriceButtonData}
            isParentActive={isParentActive}
          />
          {/* 'Giá' button */}
          
          {/* list of filter figures button */}
          {mobileFilterFieldData.map((item) => (
            <FilterItem
              key={item.id}
              item={item}
              openItemId={openItemId}
              selectedValues={selectedValues}
              handleItemClick={handleItemClick}
              handleSubItemClick={handleSubItemClick}
              handleClose={handleClose}
              isParentActive={isParentActive}
            />
          ))}
          {/* list of filter figures button */}
        </div>
      </div>

      {/* Filtering-By section */}
      <FilteringBy
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
        handleClearAll={handleClearAll}
      />
      {/* Filtering-By section */}

      <div className="mobile-category">
        {filteredData.map((item) => (
            <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
