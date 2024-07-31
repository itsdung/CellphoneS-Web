"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FilterButtonData,
  MobileFilterField,
  PriceButtonData,
  availableButtonData,
  mobileFilterFieldData,
} from "@/constants/mobile-page/MobileFilterConstants";
import "./style.scss";
import CardItem from "@/components/Card/Card";
import { mobileData } from "@/constants/mobile-page/MobileData";
import { IoCloseCircleOutline } from "react-icons/io5";
import PriceSlider from "@/components/price-slider/PriceSlider";
import MobileNavigator from "../mobile-page/mobile-content/mobile-navigator/MobileNavigator";
import { PiSortAscending, PiSortDescending } from "react-icons/pi";

const filtermobileData = (
  values: string[],
  minPrice: number,
  maxPrice: number,
  sortOrder: 'asc' | 'desc' | 'discount'
) => {
  let filteredData = mobileData.filter((phone) => {
    const matchesPrice = phone.newpri >= minPrice && phone.newpri <= maxPrice;
    const matchesAvailability = !values.includes('Sẵn hàng') || phone.available;
    const matchesValues = values.length === 0 || values.some((value: string) =>
      Object.values(phone).flat().includes(value)
    );

    return matchesPrice && matchesAvailability && matchesValues;
  });

  // Sort the filtered data
  if (sortOrder === 'asc') {
    filteredData.sort((a, b) => a.newpri - b.newpri);
  } else if (sortOrder === 'desc') {
    filteredData.sort((a, b) => b.newpri - a.newpri);
  } else if (sortOrder === 'discount') {
    filteredData.sort((a, b) => {
      const discountA = a.discount || 0;
      const discountB = b.discount || 0;
      return discountB - discountA;
    });
  }

  return filteredData;
};

export default function MobileContent() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedValuesTemp, setSelectedValuesTemp] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(mobileData);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(55000000);
  const [minPriceTemp, setMinPriceTemp] = useState(0);
  const [maxPriceTemp, setMaxPriceTemp] = useState(55000000);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'discount'>('asc');

  useEffect(() => {
    const data = filtermobileData(selectedValues, minPrice, maxPrice, sortOrder);
    setFilteredData(data);
    console.log("Filtered Data after useEffect:", data);
  }, [selectedValues, minPrice, maxPrice, sortOrder]);


  //Khi item parent click 2 lần sẽ đóng
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
    setSelectedValuesTemp((prevValues) => {
      const newValues = prevValues.includes(label)
        ? prevValues.filter((value) => value !== label)
        : [...prevValues, label];

      console.log("Temporary Selected Values:", newValues);

      // Set selectedValuesTemp before updating selectedValues
      setSelectedValuesTemp(newValues);

      return newValues;
    });

    // Manage the open/close state of the filter panel
    if (parentId === FilterButtonData.id) {
      setOpenItemId((prevId) =>
        prevId === FilterButtonData.id ? null : FilterButtonData.id
      );
    }
  };

  const handleAvailableClick = () => {
    setSelectedValuesTemp((prevValues) => {
      const updatedValues = prevValues.includes('Sẵn hàng')
        ? prevValues.filter(value => value !== 'Sẵn hàng')
        : [...prevValues, 'Sẵn hàng'];
        console.log(updatedValues)
  
      // Thực hiện lọc dữ liệu ngay lập tức sau khi cập nhật selectedValuesTemp
      const data = filtermobileData(updatedValues, minPrice, maxPrice, sortOrder);
      setFilteredData(data);
      console.log("Filtered Data after applying available filter:", data);
  
      return updatedValues;
    });
  
    setOpenItemId(prevId =>
      prevId === availableButtonData.id ? null : availableButtonData.id
    );
  };

  const handleClearAll = () => {
    setSelectedValues([]);
    setSelectedValuesTemp([]);
    setMinPriceTemp(0);
    setMaxPriceTemp(55000000);
    setMinPrice(0);
    setMaxPrice(55000000);
  };

  const handleApplyFilters = () => {
    // Cập nhật updatedValues từ selectedValuesTemp
    setMinPrice(minPriceTemp);
    setMaxPrice(maxPriceTemp);
    const updatedValues = selectedValuesTemp;
    setSelectedValues(updatedValues);

    console.log("Applied Min Price:", minPriceTemp);
    console.log("Applied Max Price:", maxPriceTemp);
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

  const handleRemoveFilter = (value: string) => {
    // Xóa giá trị khỏi selectedValues
    const updatedSelectedValues = selectedValues.filter((v) => v !== value);
    setSelectedValues(updatedSelectedValues);
    
    // Xóa giá trị khỏi selectedValuesTemp
    const updatedSelectedValuesTemp = selectedValuesTemp.filter((v) => v !== value);
    setSelectedValuesTemp(updatedSelectedValuesTemp);
  };

  const handleApplyAndClose = () => {
    handleApplyFilters();
    handleClose();
  };

  const isParentActive = (parentId: string) => {
    return selectedValues.some((value) =>
      mobileFilterFieldData.some((item) =>
        item.submenu?.some(
          (subItem) => subItem.label === value && item.id === parentId
        )
      )
    );
  };

  return (
    <div className="mobile-content-wrapper">
      <MobileNavigator />
      {/*Filter for phones*/}
      <div className="mobile-filter">
        <p className="mobile-filter-title">Chọn theo tiêu chí</p>
        <div className="mobile-filter-list">
          {/* 'Bộ lọc' button */}
          <div
            key={FilterButtonData.id}
            className={`mobile-filter-item ${
              openItemId === FilterButtonData.id ? "active" : ""
            } ${isParentActive(FilterButtonData.id) ? "parent-active" : ""}`}
          >
            <div
              className="mobile-filter-item-header"
              onClick={() => handleItemClick(FilterButtonData.id)}
            >
              {FilterButtonData.icon && (
                <div className="filter-item-icon">{FilterButtonData.icon}</div>
              )}
              <p className="filter-item-label">{FilterButtonData.label}</p>
              {FilterButtonData.arrow && (
                <div className="filter-item-arrow">
                  {FilterButtonData.arrow}
                </div>
              )}
            </div>
            {openItemId === FilterButtonData.id && (
              <>
                <div className="filter-btn-submenu">
                  <div className="filter-btn-submenu-group">
                    {FilterButtonData.submenu &&
                      FilterButtonData.submenu.map((item) => (
                        <div key={item.id} className="filter-btn-submenu-item">
                          <p className="filter-btn-submenu-label">
                            {item.label}
                          </p>
                          {item.submenu && (
                            <div className="filter-btn-submenu-children">
                              {item.submenu.map((subItem) => (
                                <div
                                  key={subItem.id}
                                  className={`filter-submenu-children-item ${
                                    selectedValuesTemp.includes(subItem.label)
                                      ? "active"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handleSubItemClick(subItem.label, item.id)
                                  }
                                >
                                  <p className="mobile-submenu-item-label">
                                    {subItem.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                  {(selectedValuesTemp.length || selectedValues.length) > 0 && (
                    <div className="submenu-close-group">
                      <button className="close-btn" onClick={handleClose}>
                        Đóng
                      </button>
                      <button
                        className="apply-filters-btn"
                        onClick={handleApplyAndClose}
                      >
                        Áp dụng bộ lọc
                      </button>
                    </div>
                  )}
                </div>
                <div className="submenu-overlay" onClick={handleClose}></div>
              </>
            )}
          </div>

          {/* Available button */}
          <div
            key={availableButtonData.id}
              className={`mobile-filter-item ${
              openItemId === availableButtonData.id ? "active" : ""
            }`}
          >
              <div
                className="mobile-filter-item-header"
                onClick={() => handleAvailableClick()}
              >
                {FilterButtonData.icon && (
                  <div className="filter-item-icon">{availableButtonData.icon}</div>
                )}
                <p className="filter-item-label">{availableButtonData.label}</p>
              </div>
            </div>


          {/* 'Giá' button */}
          <div
            key={PriceButtonData.id}
            className={`mobile-filter-item ${
              openItemId === PriceButtonData.id ? "active" : ""
            } ${isParentActive(PriceButtonData.id) ? "parent-active" : ""}`}
          >
            <div
              className="mobile-filter-item-header"
              onClick={() => handleItemClick(PriceButtonData.id)}
            >
              {PriceButtonData.icon && (
                <div className="filter-item-icon">{PriceButtonData.icon}</div>
              )}
              <p className="filter-item-label">{PriceButtonData.label}</p>
              {PriceButtonData.arrow && (
                <div className="filter-item-arrow">{PriceButtonData.arrow}</div>
              )}
            </div>
            {openItemId === PriceButtonData.id && (
              <>
                <div className="mobile-filter-submenu price-container">
                  <PriceSlider
                    minPrice={minPriceTemp}
                    maxPrice={maxPriceTemp}
                    onPriceChange={(min, max) => {
                      setMinPriceTemp(min);
                      setMaxPriceTemp(max);
                      console.log("Min Price Temp:", min);
                      console.log("Max Price Temp:", max);
                    }}
                  />
                  <div className="submenu-close-group">
                    <button className="close-btn" onClick={handleClose}>
                      Đóng
                    </button>
                    <button
                      className="apply-filters-btn"
                      onClick={handleApplyAndClose}
                    >
                      Áp dụng bộ lọc
                    </button>
                  </div>
                  {/* <div className="submenu-overlay" onClick={handleClose}></div> */}
                </div>
              </>
            )}
          </div>

          {/* list of filter figures */}
          {mobileFilterFieldData.map((item, index) => (
            <div
              key={item.id}
              className={`mobile-filter-item ${
                openItemId === item.id ? "active" : ""
              } ${isParentActive(item.id) ? "parent-active" : ""}`}
            >
              <div
                className="mobile-filter-item-header"
                onClick={() => handleItemClick(item.id)}
              >
                {item.icon && (
                  <div className="filter-item-icon">{item.icon}</div>
                )}
                <p className="filter-item-label">{item.label}</p>
                {item.arrow && (
                  <div className="filter-item-arrow">{item.arrow}</div>
                )}
              </div>
              {item.submenu && openItemId === item.id && (
                <>
                  <div className="mobile-filter-submenu">
                    <div className="submenu-item-group">
                      {item.submenu.map((subItem, subIndex) => (
                        <div
                          key={subItem.id}
                          className={`mobile-submenu-item ${
                            selectedValuesTemp.includes(subItem.label)
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleSubItemClick(subItem.label, item.id)
                          }
                        >
                          <p className="mobile-submenu-item-label">
                            {subItem.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    {(selectedValuesTemp.length || selectedValues.length) >
                      0 && (
                      <div className="submenu-close-group">
                        <button className="close-btn" onClick={handleClose}>
                          Đóng
                        </button>
                        <button
                          className="apply-filters-btn"
                          onClick={handleApplyAndClose}
                        >
                          Áp dụng bộ lọc
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="submenu-overlay" onClick={handleClose}></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="filteringby">
      {(selectedValues.length > 0 || minPrice !== 0 || maxPrice !== 55000000) && (
        <>
          <p className="filteringby-title">Đang lọc theo</p>
          <div className="filteringby-list">
            {selectedValues.map((value, index) => (
              <div key={index} className="filteringby-list-item"
              onClick={() => handleRemoveFilter(value)}
              >
                <button className="filteringby-list-item-remove">
                  <IoCloseCircleOutline className="close-icon-btn" />
                </button>
                <span className="filteringby-list-item-label">{value}</span>
              </div>
            ))}
            {(minPrice !== 0 || maxPrice !== 55000000) && (
              <div className="filteringby-list-item">
                <button
                  className="filteringby-list-item-remove"
                  onClick={() => {
                    setMinPrice(0);
                    setMaxPrice(55000000);
                    setMinPriceTemp(0);
                    setMaxPriceTemp(55000000);
                  }}
                >
                  <IoCloseCircleOutline className="close-icon-btn" />
                </button>
                <span className="filteringby-list-item-label">
                  {minPrice === 0 && maxPrice === 55000000
                    ? "Giá: Tất cả"
                    : `Giá từ ${minPrice.toLocaleString()}đ đến ${maxPrice.toLocaleString()}đ`}
                </span>
              </div>
            )}
            {/* Clear All Button */}
            <button className="clear-all-btn" onClick={handleClearAll}>
              Xoá tất cả
            </button>
          </div>
        </>
      )}
    </div>

      <div className="sortingby">
        <p className="sortingby-title">Sắp xếp theo</p>
        <div className="sortingby-button">
          <button
            className={`sortingby-button-ascend ${sortOrder === 'asc' ? 'active' : ''}`}
            onClick={() => setSortOrder('asc')}
          >
            <PiSortDescending className="sort-icon" />
            Thấp đến cao
          </button>
          <button
            className={`sortingby-button-descend ${sortOrder === 'desc' ? 'active' : ''}`}
            onClick={() => setSortOrder('desc')}
          >
            <PiSortAscending className="sort-icon" />
            Cao đến thấp
          </button>
          <button
            className={`sortingby-button-discount ${sortOrder === 'discount' ? 'active' : ''}`}
            onClick={() => setSortOrder('discount')}
          >
            Khuyến mãi HOT
          </button>
        </div>
      </div>


      <div className="mobile-category">
        {filteredData.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
