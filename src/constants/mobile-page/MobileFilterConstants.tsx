import { ReactElement } from 'react';
import { FaFilter, FaShippingFast } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { RiCashFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

export interface MobileFilterField {
  id: string;
  label: string;
  icon?: ReactElement; 
  arrow?: ReactElement; 
  submenu?: MobileFilterField[];
}


export const mobileFilterFieldData: MobileFilterField[] = [
    {
      id: uuidv4(),
      label: 'Bộ lọc', 
      icon: <FaFilter />,
    },
    {
      id: uuidv4(),
      label: 'Sẵn sàng',
      icon: <FaShippingFast />,
    },
    {
      id: uuidv4(),
      label: 'Giá',
      icon: <RiCashFill />,
    },
    {
      id: uuidv4(),
      label: 'Nhu cầu sử dụng',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: 'Chơi game' },
          { id: uuidv4(), label: 'Pin trâu' },
          { id: uuidv4(), label: 'Dung lượng lớn' },
          { id: uuidv4(), label: 'Cấu hình cao' },
          { id: uuidv4(), label: 'Mỏng nhẹ' },
          { id: uuidv4(), label: 'Chụp ảnh đẹp' },
          { id: uuidv4(), label: 'Nhỏ gọn, dễ cầm nắm' },
          { id: uuidv4(), label: 'Livestream' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Chip xử lý',
      arrow: <FiChevronDown />, 
      submenu: [
          { id: uuidv4(), label: 'Snapdragon' },
          { id: uuidv4(), label: 'Apple A' },
          { id: uuidv4(), label: 'Mediatek Dimensity' },
          { id: uuidv4(), label: 'Mediatek Helio' },
          { id: uuidv4(), label: 'Exynos' },
          { id: uuidv4(), label: 'Unisoc' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Loại điện thoại',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: 'Iphone(IOS)' },
          { id: uuidv4(), label: 'Android' },
          { id: uuidv4(), label: 'Điện thoại phổ thông' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Dung lượng RAM',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: 'Dưới 4GB' },
          { id: uuidv4(), label: '4GB-6GB' },
          { id: uuidv4(), label: '6GB-8GB' },
          { id: uuidv4(), label: '8GB-12GB' },
          { id: uuidv4(), label: '12GB trở lên' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Bộ nhớ trong',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: '128GB và 256GB' },
          { id: uuidv4(), label: 'Trên 512GB' },
          { id: uuidv4(), label: 'Dưới 32GB' },
          { id: uuidv4(), label: '32GB và 64GB' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Tính năng đặc biệt',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: 'Sạc không dây' },
          { id: uuidv4(), label: 'Bảo mật vân tay' },
          { id: uuidv4(), label: 'Nhận diện khuôn mặt' },
          { id: uuidv4(), label: 'Kháng nước, kháng bụi' },
          { id: uuidv4(), label: 'Hỗ trợ 5G' },
          { id: uuidv4(), label: 'Điện thoại AI' },
          { id: uuidv4(), label: 'Đi kèm bút cảm ứng' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Tính năng camera',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: 'Chụp xoá phông' },
          { id: uuidv4(), label: 'Chụp góc rộng' },
          { id: uuidv4(), label: 'Quay video 4K' },
          { id: uuidv4(), label: 'Chụp zoom xa' },
          { id: uuidv4(), label: 'Chụp marco' },
          { id: uuidv4(), label: 'Chống rung' },
          { id: uuidv4(), label: 'Quay video 8K' },
          { id: uuidv4(), label: 'Camera AI' },
          { id: uuidv4(), label: 'Chụp ảnh chuyển động' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Tần số quét',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: '60Hz' },
          { id: uuidv4(), label: '120Hz' },
          { id: uuidv4(), label: '90Hz' },
          { id: uuidv4(), label: 'Từ 144Hz trở lên' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Kích thước màn hình',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: 'Trên 6 inch' },
          { id: uuidv4(), label: 'Dưới 6 inch' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Kiểu màn hình',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: 'Tai thỏ' },
          { id: uuidv4(), label: 'Tràn viền (Không khiếm khuyết)' },
          { id: uuidv4(), label: 'Màn hình gập' },
          { id: uuidv4(), label: 'Giọt nước' },
          { id: uuidv4(), label: 'Đục lỗ (Nốt ruồi)' },
          { id: uuidv4(), label: 'Dynamic Island' },
        ],
    },
    {
      id: uuidv4(),
      label: 'Công nghệ NFC',
      arrow: <FiChevronDown />,
      submenu: [
          { id: uuidv4(), label: 'Có' },
          { id: uuidv4(), label: 'Có - Chưa hỗ trợ tại Việt Nam' },
          { id: uuidv4(), label: 'Không' },
        ],
    },
  ];

