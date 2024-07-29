import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import './style.scss';

interface IFilteringByProps {
  selectedValues: string[];
  setSelectedValues: (values: string[]) => void;
  handleClearAll: () => void;
}

export default function FilteringBy({
    selectedValues,
    setSelectedValues,
    handleClearAll
  }: IFilteringByProps) {
  return (
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
  )
}
