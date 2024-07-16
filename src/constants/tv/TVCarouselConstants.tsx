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
import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface TVCarousel {
    img: StaticImageData;
    name: string;
    ribbon: StaticImageData | null;
    newpri: string;
    oldpri: string;
    payway: string;
    discount: string | null;
    desc: string;
    loveIc: JSX.Element;
    stars: JSX.Element | null;
  }
  
  export const TVCarouselData: TVCarousel[] = [
    {
      img: tv1,
      name: 'Tivi Coocaa',
      ribbon: ribbon,
      newpri: '8,000,000 đ',
      oldpri: '10,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '20% OFF',
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
      img: tv2,
      name: 'Samsung UA55AU7002',
      ribbon: ribbon,
      newpri: '12,000,000 đ',
      oldpri: '14,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '14% OFF',
      desc: 'TV UHD 4K với độ phân giải cao, hình ảnh tuyệt vời.',
      loveIc: <IoMdHeartEmpty />,
      stars: null,
    },
    {
      img: tv3,
      name: 'Samsung UA55AU7700KXXV',
      ribbon: ribbon,
      newpri: '15,000,000 đ',
      oldpri: '18,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
      desc: 'TV thông minh với nhiều tính năng cao cấp.',
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
      img: tv4,
      name: 'Samsung UHD 4K 43 inch UA43AU7002',
      ribbon: ribbon,
      newpri: '10,000,000 đ',
      oldpri: '12,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
      desc: 'TV 4K với chất lượng hình ảnh xuất sắc.',
      loveIc: <IoMdHeartEmpty />,
      stars: null,
    },
    {
      img: tv5,
      name: 'Smart Tivi Coocaa FHD 43 inch WiFi 43S3U',
      ribbon: null,
      newpri: '7,000,000 đ',
      oldpri: '9,000,000 đ',
      payway: 'Trả góp 0%',
      discount: null,
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
      img: tv6,
      name: 'Xiaomi TV 55 inch Model 2',
      ribbon: ribbon,
      newpri: '11,000,000 đ',
      oldpri: '13,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '15% OFF',
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
      img: tv7,
      name: 'Xiaomi TV 55 inch Model 1',
      ribbon: ribbon,
      newpri: '10,500,000 đ',
      oldpri: '12,500,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
      desc: 'TV thông minh với nhiều tính năng hiện đại.',
      loveIc: <IoMdHeartEmpty />,
      stars: null,
    }
  ];