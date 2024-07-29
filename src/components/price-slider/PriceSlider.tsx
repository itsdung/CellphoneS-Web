import React from 'react';
import ReactSlider from 'react-slider';
import './style.scss';

interface PriceSliderProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceSlider: React.FC<PriceSliderProps> = ({ minPrice, maxPrice, onPriceChange }) => {
  // range values
  const min = 0;
  const max = 55000000; 

  
  const handleChange = (values: number[]) => {
    onPriceChange(values[0], values[1]);
  };

  return (
    <div className="price-slider">
      <div className="price-range">
        <span>{minPrice.toLocaleString()}đ</span>
        <span>{maxPrice.toLocaleString()}đ</span>
      </div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        ariaLabel={['Lower thumb', 'Upper thumb']}
        min={min}
        max={max}
        step={500000}
        value={[minPrice, maxPrice]}
        onChange={handleChange}
      />
      
    </div>
  );
};

export default PriceSlider;