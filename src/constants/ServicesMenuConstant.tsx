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
    title: 'Laptop',
    icon: <CiLaptop />,
  },
  {
    title: 'Âm Thanh',
    icon: <LiaHeadphonesAltSolid />,
  },
  {
    title: 'Đồng hồ, Camera',
    icon: <BsSmartwatch />,
  },
  {
    title: 'Gia dụng, Smarthome',
    icon: <TbHomeUp />,
  },
  {
    title: 'Phụ Kiện',
    icon: <BsUsbPlug />,
  },
  {
    title: 'PC, Màn hình, Máy in',
    icon: <FaComputer />,
  },
  {
    title: 'Tivi',
    icon: <PiTelevisionSimple />,
  },
  {
    title: 'Thu cũ đổi mới',
    icon: <MdOutlinePhonelinkSetup />,
  },
  {
    title: 'Hàng cũ',
    icon: <BsPhoneFlip />,
  },
  {
    title: 'Khuyến mãi',
    icon: <HiOutlineSpeakerphone />,
  },
  {
    title: 'Tin công nghệ',
    icon: <IoNewspaperOutline />,
  },
];