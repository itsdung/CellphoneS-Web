import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import './style.scss';

interface FilterItemProps {
  item: any;
  isOpen: boolean;
  onClick: () => void;
  onSubItemClick: (label: string, parentId: string) => void;
  selectedValues: string[];
}

export const FilterItem: React.FC<FilterItemProps> = ({ item, isOpen, onClick, onSubItemClick, selectedValues }) => {
  return (
    <div className={`mobile-filter-item ${isOpen ? 'active' : ''}`}>
      <div className='mobile-filter-item-header' onClick={onClick}>
        {item.icon && <div className='filter-item-icon'>{item.icon}</div>}
        <p className='filter-item-label'>{item.label}</p>
        {item.arrow && <div className='filter-item-arrow'>{item.arrow}</div>}
      </div>
      {isOpen && item.submenu && (
        <>
          <div className='mobile-filter-submenu'>
            {item.submenu.map((subItem: any) => (
              <div 
                key={subItem.id}
                className={`mobile-submenu-item ${selectedValues.includes(subItem.label) ? 'active' : ''}`}
                onClick={() => onSubItemClick(subItem.label, item.id)}
              >
                <p className='mobile-submenu-item-label'>{subItem.label}</p>
              </div>
            ))}
          </div>
          <div className='submenu-overlay' onClick={onClick}></div>
        </>
      )}
    </div>
  );
};