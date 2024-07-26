declare module 'react-range-slider-input' {
    import * as React from 'react';
  
    export interface RangeSliderInputProps {
      min?: number;
      max?: number;
      step?: number;
      value?: number[];
      onChange?: (values: number[]) => void;
    }
  
    export class RangeSliderInput extends React.Component<RangeSliderInputProps> {}
}