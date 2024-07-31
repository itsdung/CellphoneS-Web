import screen1 from '@/assets/images/screen/5_36_21.png'
import screen2 from '@/assets/images/screen/group_258_5.png'
import screen3 from '@/assets/images/screen/man-hinh-di-dong-asus-zenscreen-mb166cr-15-6-inch_4_.png'
import screen4 from '@/assets/images/screen/man-hinh-gaming-e-dra-egm27f100-27-inch.png'
import screen5 from '@/assets/images/screen/man-hinh-hkc-mb27v9-u-27-inch_1.png'
import screen6 from '@/assets/images/screen/man-hinh-msi-pro-mp223-22-inch.png'
import screen7 from '@/assets/images/screen/man-hinh-xiaomi-a27i-ela5345eu-27-inch.png'
import ribbon from '@/assets/icons/wrap.png'
import { StaticImageData } from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface ScreenCarousel {
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

export const ScreenCarouselData: ScreenCarousel[] = [
  {
    id: uuidv4(),
    img: screen1,
    name: 'Màn hình Xiaomi Mi 27 inch A271 ELA5345EU',
    ribbon: ribbon,
    newpri: 10000000,
    oldpri: 12000000,
    payway: 0,
    discount: 15,
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
    img: screen2,
    name: 'Màn hình LG UltraWide 29WQ600 29 inch',
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
    img: screen3,
    name: 'Màn hình MSI Pro MP223 22 inch',
    ribbon: ribbon,
    newpri: 15000000,
    oldpri: 18000000,
    payway: 0,
    discount: 20,
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
    img: screen4,
    name: 'Màn hình LG 27 inch 27UP600',
    ribbon: ribbon,
    newpri: 25000000,
    oldpri: 30000000,
    payway: 0,
    discount: 20,
    desc: 'Top-tier laptop with premium features.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    stars: null,
  },
  {
    id: uuidv4(),
    img: screen5,
    name: 'Màn hình Gaming E-DRA EGM27F100 27 inch',
    ribbon: ribbon,
    newpri: 8000000,
    oldpri: 10000000,
    payway: 0,
    discount: 20,
    desc: 'Affordable laptop with good performance.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    stars: null,
  },
  {
    id: uuidv4(),
    img: screen6,
    name: 'Acer Predator XB253Q FHD 25 inch 360Hz',
    ribbon: ribbon,
    newpri: 10000000,
    oldpri: 12000000,
    payway: 0,
    discount: 16,
    desc: 'High performance and great camera quality.',
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
    img: screen7,
    name: 'MSI Optix G241VC 24 inch 165Hz',
    ribbon: ribbon,
    newpri: 15000000,
    oldpri: 18000000,
    payway: 0,
    discount: 16,
    desc: 'Latest model with exceptional features.',
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
];
