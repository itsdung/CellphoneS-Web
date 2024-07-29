import React from 'react';
import './style.scss';


interface IFilterButton {
    openItemId: string | null;
    handleItemClick: (id: string) => void;
    handleSubItemClick: (label: string, parentId: string) => void;
    handleClose: () => void;
    selectedValues: string[];
    FilterButtonData: any;
    isParentActive: (parentId: string) => boolean;
}

export default function FilterButton({
    openItemId,
    handleItemClick,
    handleSubItemClick,
    handleClose,
    selectedValues,
    FilterButtonData,
    isParentActive
    }: IFilterButton) 
{
  return (
    <>
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
                        {FilterButtonData.submenu && FilterButtonData.submenu.map((item: any) => (
                            <div key={item.id} className='filter-btn-submenu-item'>
                                <p className='filter-btn-submenu-label'>{item.label}</p>
                                {item.submenu && (
                                <div className='filter-btn-submenu-children'>
                                {item.submenu.map((subItem: any) => (
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
    </>
  )
}
