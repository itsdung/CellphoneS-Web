import { ReactElement } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export interface MobileFilterField {
  label: string;
  icon?: string; 
  arrow?: ReactElement; 
  link?: string;  
}


export const mobileFilterFieldData: MobileFilterField[] = [
  {
    label: 'Bộ lọc',
    icon: 'price-icon', 
    arrow: <FiChevronDown />, 
    link: '/',
  },
  {
    label: 'Sẵn sàng',
    icon: 'brand-icon',
    arrow: <FiChevronDown />,
    link: '/',
  },
  {
    label: 'Giá',
    icon: 'storage-icon',
    arrow: <FiChevronDown />,
    link: '/',
  },
  {
    label: 'Nhu cầu sử dụng',
    icon: 'chip-icon',
    arrow: <FiChevronDown />,
    link: '/',
  },
  {
    label: 'Chip xử lý',
    icon: 'price-icon', 
    arrow: <FiChevronDown />, 
    link: '/',
  },
  {
    label: 'Loại điện thoại',
    icon: 'brand-icon',
    arrow: <FiChevronDown />,
    link: '/',
  },
  {
    label: 'Dung lượng RAM',
    icon: 'storage-icon',
    arrow: <FiChevronDown />,
    link: '/',
  },
  {
    label: 'Bộ nhớ trong',
    icon: 'chip-icon',
    arrow: <FiChevronDown />,
    link: '/',
  },
  {
    label: 'Tính năng đặc biệt',
    icon: 'price-icon', 
    arrow: <FiChevronDown />, 
    link: '/',
  },
  {
    label: 'Sẵn sàng',
    icon: 'brand-icon',
    arrow: <FiChevronDown />,
    link: '/',
  },
  {
    label: 'Giá',
    icon: 'storage-icon',
    arrow: <FiChevronDown />,
    link: '/',
  },
  {
    label: 'Nhu cầu sử dụng',
    icon: 'chip-icon',
    arrow: <FiChevronDown />,
    link: '/',
  },
];