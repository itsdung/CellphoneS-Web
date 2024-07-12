import { CiLaptop } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaComputer } from "react-icons/fa6";
import { BsPhoneFlip, BsSmartwatch, BsUsbPlug } from "react-icons/bs";
import { IoNewspaperOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { StaticImageData } from 'next/image'
import { LiaHeadphonesAltSolid } from 'react-icons/lia'
import { TbHomeUp } from 'react-icons/tb'
import { PiTelevisionSimple } from 'react-icons/pi'
import { MdOutlinePhonelinkSetup } from 'react-icons/md'

interface SubMenuItem {
  title: string;
  subMenu?: SubMenuItem[];
}

interface ServiceMenuItem {
    title: string;
    icon: JSX.Element | StaticImageData;
    subMenu?: SubMenuItem[];
}

export const serviceMenuData: ServiceMenuItem[] = [
  {
    title: 'Điện Thoại, Tablet',
    icon: <IoPhonePortraitOutline />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'Laptop',
    icon: <CiLaptop />,
    subMenu: [
      {
        title: 'Thương hiệu',
        subMenu: [
          { title: 'Mac' },
          { title: 'ASUS' },
          { title: 'Lenovo' },
          { title: 'Dell' },
          { title: 'HP' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Promax' },
          { title: 'Galaxy Z Fold' },
        ]
      },
      { title: 'Máy tính bảng' },
      { title: 'Máy tính bảng hot' },
    ]
  },
  {
    title: 'Âm Thanh',
    icon: <LiaHeadphonesAltSolid />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'Đồng hồ, Camera',
    icon: <BsSmartwatch />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'Gia dụng, Smarthome',
    icon: <TbHomeUp />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'Phụ Kiện',
    icon: <BsUsbPlug />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'PC, Màn hình, Máy in',
    icon: <FaComputer />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'Tivi',
    icon: <PiTelevisionSimple />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'Thu cũ đổi mới',
    icon: <MdOutlinePhonelinkSetup />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'Hàng cũ',
    icon: <BsPhoneFlip />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'Khuyến mãi',
    icon: <HiOutlineSpeakerphone />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
  {
    title: 'Tin công nghệ',
    icon: <IoNewspaperOutline />,
    subMenu: [
      {
        title: 'Hãng điện thoại',
        subMenu: [
          { title: 'iPhone' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'OPPO' },
          { title: 'realme' },
          { title: 'vivo' },
          { title: 'ASUS' },
          { title: 'Nokia' },
          { title: 'TECHNO' },
          { title: 'Nubia' },
          { title: 'OnePlus' },
          { title: 'Masstel' },
          { title: 'Sony' },
          { title: 'Điện thoại phổ thông' },
        ]
      },
      {
        title: 'Mức giá',
        subMenu: [
          { title: 'Dưới 2 triệu' },
          { title: 'Từ 2 - 4 triệu' },
          { title: 'Từ 4 - 7 triệu' },
          { title: 'Từ 7 - 13 triệu' },
          { title: 'Từ 13 - 20 triệu' },
          { title: 'Trên 20 triệu' },
        ]
      },
      {
        title: 'Điện thoại hot',
        subMenu: [
          { title: 'iPhone 15 Pro Max' },
          { title: 'Galaxy Z Fold6' },
          { title: 'Galaxy Z Flip6' },
          { title: 'Samsung Galaxy A35' },
          { title: 'Oppo reno12 5G' },
          { title: 'Oppo reno12 F' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad' },
          { title: 'Samsung' },
          { title: 'Xiaomi' },
          { title: 'Lenovo' },
          { title: 'Nokia' },
          { title: 'Kindle' },
        ]
      },
      {
        title: 'Hãng máy tính bảng',
        subMenu: [
          { title: 'iPad Air 2024' },
          { title: 'iPad Pro 2024' },
          { title: 'Galaxy Tab S9 FE 5G' },
          { title: 'Galaxy Tab S9 Ultra' },
          { title: 'Xiaomi Pad 6 256GB' },
          { title: 'Xiaomi Pad SE' },
        ]
      },
    ]
  },
];