import './style.scss';
import React from 'react';

interface SubItem {
  id: string;
  label: string;
}

interface Item {
  id: string;
  label: string;
  icon?: JSX.Element;
  arrow?: JSX.Element;
  submenu?: SubItem[];
}

interface FilterItemProps {
  item: Item;
  openItemId: string | null;
  selectedValues: string[];
  handleItemClick: (id: string) => void;
  handleSubItemClick: (label: string, parentId: string) => void;
  handleClose: () => void;
  isParentActive: (parentId: string) => boolean;
}

export default function FilterItem({
  item,
  openItemId,
  selectedValues,
  handleItemClick,
  handleSubItemClick,
  handleClose,
  isParentActive,
}: FilterItemProps) {
  return (
    <div 
      key={item.id} 
      className={`mobile-filter-item ${openItemId === item.id ? 'active' : ''} ${isParentActive(item.id) ? 'parent-active' : ''}`}
    >
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
  );
}