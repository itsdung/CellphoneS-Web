import { IoMdHeartEmpty } from "react-icons/io";
import phone1 from '@/assets/images/phones/oppoX5.png'
import phone2 from '@/assets/images/phones/samsung-galaxy-s24-plus.png'
import phone3 from '@/assets/images/phones/samsungtabs9fe.png'
import phone4 from '@/assets/images/phones/ss-s24-ultra-xam-222_2.png'
import phone5 from '@/assets/images/phones/tecno-camon-30.png'
import phone6 from '@/assets/images/phones/tecno-spark-20-pro-plus_1__2.png'
import { CiStar } from "react-icons/ci";
import { StaticImageData } from "next/image";

import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface HotSaleItem {
    img: StaticImageData;
    name: string;
    newpri: string;
    oldpri: string;
    payway: string;
    discount: string;
    desc: string;
    loveIc: JSX.Element;
    stars: JSX.Element;
  }
  
  export const HotSaleSliderData: HotSaleItem[] = [
    {
      img: phone1,
      name: 'Oppo X5',
      newpri: '10,000,000 đ',
      oldpri: '12,000,000 đ',
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
    },
    {
      img: phone2,
      name: 'Samsung Galaxy S24 Plus',
      newpri: '20,000,000 đ',
      oldpri: '24,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '17% OFF',
      desc: 'Latest model with exceptional features.',
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
      img: phone3,
      name: 'Samsung Tab S9 FE',
      newpri: '15,000,000 đ',
      oldpri: '18,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
      desc: 'Perfect for both work and entertainment.',
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
      img: phone4,
      name: 'Samsung S24 Ultra',
      newpri: '25,000,000 đ',
      oldpri: '30,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '20% OFF',
      desc: 'Top-tier smartphone with premium features.',
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
      img: phone5,
      name: 'Tecno Camon 30',
      newpri: '8,000,000 đ',
      oldpri: '10,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '20% OFF',
      desc: 'Affordable phone with good performance.',
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
      img: phone6,
      name: 'Tecno Spark 20 Pro Plus',
      newpri: '9,000,000 đ',
      oldpri: '11,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '18% OFF',
      desc: 'Stylish design and reliable performance.',
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