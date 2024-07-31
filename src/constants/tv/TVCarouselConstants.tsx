import tv1 from '@/assets/images/TV/coocaa.png'
import tv2 from '@/assets/images/TV/samsungua55au7002.png'
import tv3 from '@/assets/images/TV/samsungua55au7700kxxv.png'
import tv4 from '@/assets/images/TV/smart-tivi-samsung-uhd-4k-43-inch-ua43au7002.png'
import tv5 from '@/assets/images/TV/smart_tivi_coocaa_fhd_43_inch_wifi_43s3u.png'
import tv6 from '@/assets/images/TV/xiaomi-55-2.png'
import tv7 from '@/assets/images/TV/xiaomi-55.png'
import ribbon from '@/assets/icons/wrap.png'
import { StaticImageData } from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface TVCarousel {
  id: string;
  img: StaticImageData;
  name: string;
  ribbon: StaticImageData | null;
  newpri: number;
  oldpri: number;
  payway?: number;
  discount?: number;
  desc: string;
  loveIc: JSX.Element;
  loveIcFull?: JSX.Element;
  suggest?: boolean;
  stars?: JSX.Element | null;
  chip?: string;
  type?: string;
  special?: string[];
  manufacturer?: string;
  available?: boolean;
}

// Dữ liệu TVCarouselData với trường id mới và giá đã được chuyển đổi
export const TVCarouselData: TVCarousel[] = [
  {
    id: uuidv4(),  // Thêm trường id
    img: tv1,
    name: 'Tivi Coocaa',
    ribbon: ribbon,
    newpri: 8000000,  // Giá đã chuyển đổi thành số
    oldpri: 10000000, // Giá đã chuyển đổi thành số
    payway: 0,
    discount: 20,
    desc: 'Smart TV với chất lượng hình ảnh tuyệt vời.',
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
    img: tv2,
    name: 'Samsung UA55AU7002',
    ribbon: ribbon,
    newpri: 12000000,  // Giá đã chuyển đổi thành số
    oldpri: 14000000,  // Giá đã chuyển đổi thành số
    payway: 0,
    discount: 20,
    desc: 'TV UHD 4K với độ phân giải cao, hình ảnh tuyệt vời.',
    loveIc: <IoMdHeartEmpty />,
    stars: null,
  },
  {
    id: uuidv4(),  // Thêm trường id
    img: tv3,
    name: 'Samsung UA55AU7700KXXV',
    ribbon: ribbon,
    newpri: 15000000,  // Giá đã chuyển đổi thành số
    oldpri: 18000000,  // Giá đã chuyển đổi thành số
    payway: 0,
    discount: 16,
    desc: 'TV thông minh với nhiều tính năng cao cấp.',
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
    id: uuidv4(),  
    img: tv4,
    name: 'Samsung UHD 4K 43 inch UA43AU7002',
    ribbon: ribbon,
    newpri: 10000000,  
    oldpri: 12000000,  
    payway: 0,
    discount: 16,
    desc: 'TV 4K với chất lượng hình ảnh xuất sắc.',
    loveIc: <IoMdHeartEmpty />,
    stars: null,
  },
  {
    id: uuidv4(),  
    img: tv5,
    name: 'Smart Tivi Coocaa FHD 43 inch WiFi 43S3U',
    ribbon: null,
    newpri: 7000000,  
    oldpri: 9000000,  
    payway: 0,
    desc: 'TV FHD với khả năng kết nối WiFi.',
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
    id: uuidv4(),  
    img: tv6,
    name: 'Xiaomi TV 55 inch Model 2',
    ribbon: ribbon,
    newpri: 11000000,  
    oldpri: 13000000,  
    payway: 0,
    discount: 15,
    desc: 'TV thông minh với màn hình lớn và sắc nét.',
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
    id: uuidv4(),  
    img: tv7,
    name: 'Xiaomi TV 55 inch Model 1',
    ribbon: ribbon,
    newpri: 10500000,  
    oldpri: 12500000,  
    payway: 0,
    discount: 16,
    desc: 'TV thông minh với nhiều tính năng hiện đại.',
    loveIc: <IoMdHeartEmpty />,
    stars: null,
  }
];