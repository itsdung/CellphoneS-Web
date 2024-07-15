import sound1 from '@/assets/images/sounds/apple-airpods-pro-2-usb-c_1_h2.png'
import sound2 from '@/assets/images/sounds/group_170_1_h1.png'
import sound3 from '@/assets/images/sounds/samsung-galaxy-buds-2-pro-00.png'
import sound4 from '@/assets/images/sounds/samsung-galaxy-buds-3-spa.png'
import sound5 from '@/assets/images/sounds/sony.png'
import sound6 from '@/assets/images/sounds/tai-nghe-khong-day-anker-soundcore-r50i-a3949_2_.png'
import sound7 from '@/assets/images/sounds/tai-nghe-khong-day-huawei-freeclip-000.png'
import sound8 from '@/assets/images/sounds/tai-nghe-samsung-galaxy-buds-3-pro-spa.png'
import ribbon from '@/assets/icons/wrap.png'
import { StaticImageData } from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface SoundCarousel {
    img: StaticImageData;
    name: string;
    ribbon: StaticImageData;
    newpri: string;
    oldpri: string;
    payway: string;
    discount: string;
    desc: string;
    loveIc: JSX.Element;
    stars: JSX.Element;
  }
  
  export const SoundCarouselData: SoundCarousel[] = [
    {
      img: sound1,
      name: 'Tai nghe Apple AirPods Pro 2 USB-C',
      ribbon: ribbon,
      newpri: '10,000,000 đ',
      oldpri: '12,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
      desc: 'High performance and great sound quality.',
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
      img: sound2,
      name: 'Tai nghe Group 170',
      ribbon: ribbon,
      newpri: '15,000,000 đ',
      oldpri: '18,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
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
      img: sound3,
      name: 'Tai nghe Samsung Galaxy Buds 2 Pro',
      ribbon: ribbon,
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
      img: sound4,
      name: 'Tai nghe Samsung Galaxy Buds 3',
      ribbon: ribbon,
      newpri: '25,000,000 đ',
      oldpri: '30,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '20% OFF',
      desc: 'Top-tier headphones with premium features.',
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
      img: sound5,
      name: 'Tai nghe Sony',
      ribbon: ribbon,
      newpri: '8,000,000 đ',
      oldpri: '10,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '20% OFF',
      desc: 'Affordable headphones with good performance.',
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
      img: sound6,
      name: 'Tai nghe không dây Anker Soundcore R50i',
      ribbon: ribbon,
      newpri: '10,000,000 đ',
      oldpri: '12,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
      desc: 'High performance and great sound quality.',
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
      img: sound7,
      name: 'Tai nghe không dây Huawei Freeclip',
      ribbon: ribbon,
      newpri: '15,000,000 đ',
      oldpri: '18,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
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
      img: sound8,
      name: 'Tai nghe Samsung Galaxy Buds 3 Pro',
      ribbon: ribbon,
      newpri: '12,000,000 đ',
      oldpri: '14,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '14% OFF',
      desc: 'Excellent sound quality and battery life.',
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
    // Bạn có thể tiếp tục thêm các sản phẩm khác vào đây
  ];