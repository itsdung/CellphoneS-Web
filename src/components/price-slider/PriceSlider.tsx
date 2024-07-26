import React from 'react';
import ReactSlider from 'react-slider';


interface DoubleRangeSliderProps {
  minValue: number;
  maxValue: number;
  onChange: (values: [number, number]) => void;
}

const DoubleRangeSlider: React.FC<DoubleRangeSliderProps> = ({ minValue, maxValue, onChange }) => {
  const [values, setValues] = React.useState<[number, number]>([minValue, maxValue]);

  const handleChange = (newValues: [number, number]) => {
    setValues(newValues);
    onChange(newValues);
  };

  return (
    <ReactSlider
      min={0}
      max={100}
      value={values}
      onChange={handleChange}
      ariaLabel={['Lower thumb', 'Upper thumb']}
      ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  );
};

export default DoubleRangeSlider;