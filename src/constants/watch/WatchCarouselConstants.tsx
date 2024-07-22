import watch1 from '@/assets/images/watch/apple-watch-se-2023-40mm.png'
import watch2 from '@/assets/images/watch/apple_lte_3__1.png'
import watch3 from '@/assets/images/watch/band_8_active.png'
import watch4 from '@/assets/images/watch/huawei-green.png'
import watch5 from '@/assets/images/watch/huawei_1__1_2.png'
import watch6 from '@/assets/images/watch/huawei_3__1_1.png'
import watch7 from '@/assets/images/watch/xiaomi_2_1.png'
import watch8 from '@/assets/images/watch/xiaomiii.png'
import ribbon from '@/assets/icons/wrap.png'
import { StaticImageData } from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface WatchCarousel {
  id: string;  // Trường id mới
  img: StaticImageData;
  name: string;
  ribbon: StaticImageData | null;
  newpri: number;  // Thay đổi kiểu thành number
  oldpri: number;  // Thay đổi kiểu thành number
  payway: string;
  discount: string | null;
  desc: string;
  loveIc: JSX.Element;
  loveIcFull?: JSX.Element;
  suggest?: boolean;
  stars: JSX.Element | null;
}

// Dữ liệu WatchCarouselData với trường id mới và giá đã được chuyển đổi
export const WatchCarouselData: WatchCarousel[] = [
  {
    id: uuidv4(), 
    img: watch1,
    name: 'Apple Watch SE 2023 40mm',
    ribbon: null,
    newpri: 10000000,  // Giá đã chuyển đổi thành số
    oldpri: 12000000,  // Giá đã chuyển đổi thành số
    payway: 'Trả góp 0%',
    discount: null,
    desc: 'High performance and great camera quality.',
    loveIc: <IoMdHeartEmpty />,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),  // Thêm trường id
    img: watch2,
    name: 'Apple Watch LTE 3',
    ribbon: ribbon,
    newpri: 15000000,  // Giá đã chuyển đổi thành số
    oldpri: 18000000,  // Giá đã chuyển đổi thành số
    payway: 'Trả góp 0%',
    discount: '16% OFF',
    desc: 'Latest model with exceptional features.',
    loveIc: <IoMdHeartEmpty />,
    suggest: true,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),  // Thêm trường id
    img: watch3,
    name: 'Xiaomi Band 8 Active',
    ribbon: ribbon,
    newpri: 15000000,  // Giá đã chuyển đổi thành số
    oldpri: 18000000,  // Giá đã chuyển đổi thành số
    payway: 'Trả góp 0%',
    discount: '16% OFF',
    desc: 'Perfect for both work and entertainment. Top-tier watch with premium features.',
    loveIc: <IoMdHeartEmpty />,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),  // Thêm trường id
    img: watch4,
    name: 'Huawei Watch Green',
    ribbon: ribbon,
    newpri: 25000000,  // Giá đã chuyển đổi thành số
    oldpri: 30000000,  // Giá đã chuyển đổi thành số
    payway: 'Trả góp 0%',
    discount: '20% OFF',
    desc: 'Top-tier watch with premium features.',
    loveIc: <IoMdHeartEmpty />,
    stars: null,
  },
  {
    id: uuidv4(),  // Thêm trường id
    img: watch5,
    name: 'Huawei Watch 1',
    ribbon: ribbon,
    newpri: 8000000,  // Giá đã chuyển đổi thành số
    oldpri: 10000000,  // Giá đã chuyển đổi thành số
    payway: 'Trả góp 0%',
    discount: '20% OFF',
    desc: 'Affordable watch with good performance.',
    loveIc: <IoMdHeartEmpty />,
    stars: null,
  },
  {
    id: uuidv4(),  // Thêm trường id
    img: watch6,
    name: 'Huawei Watch 3',
    ribbon: ribbon,
    newpri: 10000000,  // Giá đã chuyển đổi thành số
    oldpri: 12000000,  // Giá đã chuyển đổi thành số
    payway: 'Trả góp 0%',
    discount: '16% OFF',
    desc: 'High performance and great camera quality.',
    loveIc: <IoMdHeartEmpty />,
    suggest: true,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),  // Thêm trường id
    img: watch7,
    name: 'Xiaomi Watch 2',
    ribbon: ribbon,
    newpri: 15000000,  // Giá đã chuyển đổi thành số
    oldpri: 18000000,  // Giá đã chuyển đổi thành số
    payway: 'Trả góp 0%',
    discount: '16% OFF',
    desc: 'Latest model with exceptional features.',
    loveIc: <IoMdHeartEmpty />,
    stars: null,
  },
  {
    id: uuidv4(),  // Thêm trường id
    img: watch8,
    name: 'Xiaomi Watch 3',
    ribbon: ribbon,
    newpri: 10000000,  
    oldpri: 12000000,  
    payway: 'Trả góp 0%',
    discount: '16% OFF',
    desc: 'High performance and great camera quality.',
    loveIc: <IoMdHeartEmpty />,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  }
];