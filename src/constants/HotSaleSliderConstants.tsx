import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import phone1 from '@/assets/images/phones/oppoX5.png'
import phone2 from '@/assets/images/phones/samsung-galaxy-s24-plus.png'
import phone3 from '@/assets/images/phones/samsungtabs9fe.png'
import phone4 from '@/assets/images/phones/ss-s24-ultra-xam-222_2.png'
import phone5 from '@/assets/images/phones/tecno-camon-30.png'
import phone6 from '@/assets/images/phones/tecno-spark-20-pro-plus_1__2.png'
import ribbon from '@/assets/icons/wrap.png'
import { v4 as uuidv4 } from 'uuid';
import { StaticImageData } from "next/image";

import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface HotSaleItem {
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

export const HotSaleSliderData: HotSaleItem[] = [
  {
    id: uuidv4(),
    img: phone1,
    name: 'Oppo X5',
    ribbon: ribbon,
    newpri: 10000000,
    oldpri: 12000000,
    payway: 0,
    discount: 16,
    desc: 'High performance and great camera quality.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
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
    img: phone2,
    name: 'Samsung Galaxy S24 Plus',
    ribbon: ribbon,
    newpri: 15000000,
    oldpri: 18000000,
    payway: 0,
    discount: 16,
    desc: 'Latest model with exceptional features.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
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
    img: phone3,
    name: 'Samsung Tab S9 FE',
    ribbon: ribbon,
    newpri: 15000000,
    oldpri: 18000000,
    payway: 0,
    discount: 16,
    desc: 'Perfect for both work and entertainment.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
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
    img: phone4,
    name: 'Samsung S24 Ultra',
    ribbon: ribbon,
    newpri: 25000000,
    oldpri: 30000000,
    payway: 0,
    discount: 16,
    desc: 'Top-tier smartphone with premium features.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
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
    img: phone5,
    name: 'Tecno Camon 30',
    ribbon: ribbon,
    newpri: 8000000,
    oldpri: 10000000,
    payway: 0,
    discount: 16,
    desc: 'Affordable phone with good performance.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
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
    img: phone6,
    name: 'Tecno Spark 20 Pro Plus',
    ribbon: ribbon,
    newpri: 9000000,
    oldpri: 11000000,
    payway: 0,
    discount: 16,
    desc: 'Stylish design and reliable performance.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
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