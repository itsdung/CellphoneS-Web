import PriceSlider from "@/components/price-slider/PriceSlider";
import './style.scss';

interface IPriceButton {
    openItemId: string | null;
    handleItemClick: (id: string) => void;
    handleClose: () => void;
    minPrice: number;
    maxPrice: number;
    setMinPrice: (price: number) => void;
    setMaxPrice: (price: number) => void;
    PriceButtonData: any;
    isParentActive: (parentId: string) => boolean;
  }
  
  export default function PriceButton({
    openItemId,
    handleItemClick,
    handleClose,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    PriceButtonData,
    isParentActive
  }: IPriceButton) {
    return (
      <>
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
      </>
    );
  }