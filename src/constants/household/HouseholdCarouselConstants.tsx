import img1 from '@/assets/images/household/ban-chai-dien-oral-b-vitality-crossaction-d12-513.png'
import img2 from '@/assets/images/household/ban-chai-dien-xiaomi-mi-smart-electric-toothbrush-nun4087gl-t500_1_1.png'
import img3 from '@/assets/images/household/m_y_t_m_n_c_h2ofloss_hf-9p.png'
import img4 from '@/assets/images/household/may-cao-rau-philips-pq206-18_1.png'
import img5 from '@/assets/images/household/noi-chien-khong-dau-xiaomi-mi-smart-air-fryer-1_2.png'
import img6 from '@/assets/images/household/quat-dung-gaabor-gfh-n240a-1.png'
import img7 from '@/assets/images/household/xiaomi_mi_smart_tower_fan_-1.png'
import ribbon from '@/assets/icons/wrap.png'
import { StaticImageData } from "next/image";
import { v4 as uuidv4 } from 'uuid';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface HouseholdCarousel {
  id: string;
    img: StaticImageData;
    name: string;
    ribbon: StaticImageData | null;
    newpri: number;
    oldpri: number;
    payway: string;
    discount: string | null;
    desc: string;
    loveIc: JSX.Element;
    loveIcFull?: JSX.Element;
    suggest?: boolean;
    stars?: JSX.Element | null;
    chip?: string;
    type?: string;
    special?: string;
    manufacturer?: string;
}

export const HouseholdCarouselData: HouseholdCarousel[] = [
  {
    id: uuidv4(),
    img: img1,
    name: 'Bàn chải điện Oral-B Vitality CrossAction D12-513',
    ribbon: ribbon,
    newpri: 1000000,
    oldpri: 1200000,
    payway: 'Trả góp 0%',
    discount: '16% OFF',
    desc: 'Hiệu suất cao và chất lượng tuyệt vời.',
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
    img: img2,
    name: 'Bàn chải điện Xiaomi Mi Smart Electric Toothbrush',
    ribbon: null,
    newpri: 1500000,
    oldpri: 1800000,
    payway: 'Trả góp 0%',
    discount: null,
    desc: 'Mẫu mới nhất với các tính năng vượt trội.',
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
    img: img3,
    name: 'Máy tăm nước H2ofloss HF-9P',
    ribbon: ribbon,
    newpri: 2000000,
    oldpri: 2400000,
    payway: 'Trả góp 0%',
    discount: '16% OFF',
    desc: 'Hoàn hảo cho cả công việc và giải trí.',
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
    img: img4,
    name: 'Máy cạo râu Philips PQ206/18',
    ribbon: ribbon,
    newpri: 500000,
    oldpri: 600000,
    payway: 'Trả góp 0%',
    discount: '16% OFF',
    desc: 'Thiết bị hàng đầu với các tính năng cao cấp.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
  },
  {
    id: uuidv4(),
    img: img5,
    name: 'Nồi chiên không dầu Xiaomi Mi Smart Air Fryer',
    ribbon: ribbon,
    newpri: 3000000,
    oldpri: 3500000,
    payway: 'Trả góp 0%',
    discount: '14% OFF',
    desc: 'Hiệu suất cao và chất lượng tuyệt vời.',
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
    img: img6,
    name: 'Quạt đứng Gaabor GFH-N240A-1',
    ribbon: null,
    newpri: 1200000,
    oldpri: 1500000,
    payway: 'Trả góp 0%',
    discount: null,
    desc: 'Mẫu mới nhất với các tính năng vượt trội.',
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
    img: img7,
    name: 'Quạt tháp Xiaomi Mi Smart Tower Fan',
    ribbon: ribbon,
    newpri: 2000000,
    oldpri: 2500000,
    payway: 'Trả góp 0%',
    discount: '20% OFF',
    desc: 'Thiết bị hàng đầu với các tính năng cao cấp.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
  }
];