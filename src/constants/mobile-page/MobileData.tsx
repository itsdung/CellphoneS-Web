import img1 from '@/assets/images/mobile-data/asus-rog-phone-6-12gb-256gb.png';
import img2 from '@/assets/images/mobile-data/infinix-hot-40-pro.png';
import img3 from '@/assets/images/mobile-data/infinix-hot-40i-8gb-256gb_20.png';
import img4 from '@/assets/images/mobile-data/iphone-11-128gb.png';
import img5 from '@/assets/images/mobile-data/iphone-11-64gb.png';
import img6 from '@/assets/images/mobile-data/iphone-12-128gb.png';
import img7 from '@/assets/images/mobile-data/iphone-13-128gb.png';
import img8 from '@/assets/images/mobile-data/iphone-13-pro-max-128gb.png';
import img9 from '@/assets/images/mobile-data/iphone-13-pro-max-256gb.png';
import img10 from '@/assets/images/mobile-data/iphone-14-promax-128gb.png';
import img11 from '@/assets/images/mobile-data/iphone-14.png';
import img12 from '@/assets/images/mobile-data/iphone-15-plus_1-128gb.png';
import img13 from '@/assets/images/mobile-data/iphone-15-pro-max-256gb.png';
import img14 from '@/assets/images/mobile-data/masstel-lux-20.png';
import img15 from '@/assets/images/mobile-data/nokia-220-4g.png';
import img16 from '@/assets/images/mobile-data/nokia-c32.png';
import img17 from '@/assets/images/mobile-data/oppo-a18.png';
import img18 from '@/assets/images/mobile-data/oppo-reno-11f.png';
import img19 from '@/assets/images/mobile-data/oppo-reno-7.png';
import img20 from '@/assets/images/mobile-data/oppo-reno10-pro-plus.png';
import img21 from '@/assets/images/mobile-data/oppo-reno12f-5g.png';
import img22 from '@/assets/images/mobile-data/poco-m6.png';
import img23 from '@/assets/images/mobile-data/realme-c33.png';
import img24 from '@/assets/images/mobile-data/realme-c55.png';
import img25 from '@/assets/images/mobile-data/realme-c67.png';
import img26 from '@/assets/images/mobile-data/samsung-galaxy-a15-lte.png';
import img27 from '@/assets/images/mobile-data/samsung-galaxy-m34-5g.png';
import img28 from '@/assets/images/mobile-data/samsung-galaxy-s21.png';
import img29 from '@/assets/images/mobile-data/samsung-galaxy-s23_1.png';
import img30 from '@/assets/images/mobile-data/samsung-galaxy-s24-ultra.png';
import img31 from '@/assets/images/mobile-data/samsung-galaxy-z-fold6.png';
import img32 from '@/assets/images/mobile-data/sony-xperia-1vi.png';
import img33 from '@/assets/images/mobile-data/vivo-v27e.png';
import img34 from '@/assets/images/mobile-data/vivo-y18s.png';
import img35 from '@/assets/images/mobile-data/xiaomi-13t.png';
import img36 from '@/assets/images/mobile-data/xiaomi-poco-x6-pro5G.png';
import img37 from '@/assets/images/mobile-data/xiaomi-redmi-note-12-pro-4g.png';
import img38 from '@/assets/images/mobile-data/xiaomi-redmi-note-12-pro-5g.png';
import img39 from '@/assets/images/mobile-data/zte-blade-v50.png';
import img40 from '@/assets/images/mobile-data//zte-blade-a54.png';
import ribbon from '@/assets/icons/wrap.png';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { StaticImageData } from "next/image";
import { v4 as uuidv4 } from 'uuid';

import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface mobileData {
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
    stars?: JSX.Element;
    chip?: string;
    type?: string;
    special?: string;
    manufacturer?: string;
}

export const mobileData: mobileData[] = [
    {
        id: uuidv4(),
        img: img1,
        name: 'ASUS ROG Phone 6 12GB 256GB',
        ribbon: ribbon,
        newpri: 10000000,
        oldpri: 12000000,
        payway: 'Trả góp 0%',
        discount: '16% OFF',
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
        ),
        chip: 'Snapdragon',
        type: 'Android',
        special: 'Bảo mật vân tay',
        manufacturer: 'ASUS',
      },
      {
        id: uuidv4(),
        img: img2,
        name: 'Infinix Hot 40 Pro',
        ribbon: ribbon,
        newpri: 4000000,
        oldpri: 4500000,
        payway: 'Trả góp 0%',
        discount: '16% OFF',
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
        ),
        chip: 'Snapdragon',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'ASUS',
      },
      {
        id: uuidv4(),
        img: img3,
        name: 'Infinix Hot 40i 8GB 256GB',
        ribbon: ribbon,
        newpri: 3500000,
        oldpri: 4000000,
        payway: 'Trả góp 0%',
        discount: '13% OFF',
        desc: 'Great battery life and performance.',
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
        ),
        chip: 'Mediatek Dimensity',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'Infinix',
    },
    {
        id: uuidv4(),
        img: img4,
        name: 'iPhone 11 128GB',
        ribbon: ribbon,
        newpri: 12000000,
        oldpri: 15000000,
        payway: 'Trả góp 0%',
        discount: '20% OFF',
        desc: 'High performance and sleek design.',
        suggest: true,
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
        ),
        chip: 'Apple A',
        type: 'Iphone(IOS)',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img5,
        name: 'iPhone 11 64GB',
        ribbon: ribbon,
        newpri: 10000000,
        oldpri: 13000000,
        payway: 'Trả góp 0%',
        discount: '23% OFF',
        desc: 'High performance and sleek design.',
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
        ),
        chip: 'Apple A',
        type: 'Iphone(IOS)',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img6,
        name: 'iPhone 12 128GB',
        ribbon: ribbon,
        newpri: 15000000,
        oldpri: 18000000,
        payway: 'Trả góp 0%',
        discount: '17% OFF',
        desc: 'High performance and sleek design.',
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
        ),
        chip: 'Apple A',
        type: 'Iphone(IOS)',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img7,
        name: 'iPhone 13 128GB',
        ribbon: ribbon,
        newpri: 18000000,
        oldpri: 22000000,
        payway: 'Trả góp 0%',
        discount: '20% OFF',
        desc: 'Superior camera and performance, best quality.',
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
        ),
        chip: 'Apple A',
        type: 'Iphone(IOS)',
        special: 'Điện thoại AI',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img8,
        name: 'iPhone 13 Pro Max 128GB',
        ribbon: ribbon,
        newpri: 25000000,
        oldpri: 29000000,
        payway: 'Trả góp 0%',
        discount: '14% OFF',
        desc: 'High-end performance and features, performance.',
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
        ),
        chip: 'Apple A',
        type: 'Iphone(IOS)',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img9,
        name: 'iPhone 13 Pro Max 256GB',
        ribbon: ribbon,
        newpri: 30000000,
        oldpri: 35000000,
        payway: 'Trả góp 0%',
        discount: '14% OFF',
        suggest: true,
        desc: 'Top-of-the-line features and performance.',
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
        ),
        chip: 'Apple A',
        type: 'IPhone(IOS)',
        special: 'Face ID',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img10,
        name: 'iPhone 14 Pro Max 128GB',
        ribbon: ribbon,
        newpri: 32000000,
        oldpri: 36000000,
        payway: 'Trả góp 0%',
        discount: '11% OFF',
        desc: 'Latest model with advanced features.',
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
        ),
        chip: 'Apple A',
        type: 'Iphone(IOS)',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img11,
        name: 'iPhone 14 128GB',
        ribbon: ribbon,
        newpri: 25000000,
        oldpri: 28000000,
        payway: 'Trả góp 0%',
        discount: '11% OFF',
        desc: 'Great performance with new design.',
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
        ),
        chip: 'Apple A',
        type: 'Iphone(IOS)',
        special: 'Điện thoại AI',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img12,
        name: 'iPhone 15 Plus 128GB',
        ribbon: ribbon,
        newpri: 29000000,
        oldpri: 32000000,
        payway: 'Trả góp 0%',
        discount: '9% OFF',
        suggest: true,
        desc: 'Latest features with larger display, high quality.',
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
        ),
        chip: 'Apple A',
        type: 'Iphone(IOS)',
        special: 'Điện thoại AI',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img13,
        name: 'iPhone 15 Pro Max 256GB',
        ribbon: ribbon,
        newpri: 35000000,
        oldpri: 40000000,
        payway: 'Trả góp 0%',
        discount: '12% OFF',
        desc: 'Premium performance and features.',
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
        ),
        chip: 'Apple A',
        type: 'Iphone(IOS)',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Apple',
    },
    {
        id: uuidv4(),
        img: img14,
        name: 'Masstel Lux 20',
        ribbon: ribbon,
        newpri: 2000000,
        oldpri: 2500000,
        payway: 'Trả góp 0%',
        discount: '20% OFF',
        desc: 'Affordable option with good performance.',
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
        ),
        chip: 'Unisoc',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'Masstel',
    },
    {
        id: uuidv4(),
        img: img15,
        name: 'Nokia 220 4G',
        ribbon: ribbon,
        newpri: 1200000,
        oldpri: 1500000,
        payway: 'Trả góp 0%',
        discount: '20% OFF',
        desc: 'Basic phone with 4G support.',
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
        ),
        chip: 'Unisoc',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'Nokia',
    },
    {
        id: uuidv4(),
        img: img16,
        name: 'Nokia C32',
        ribbon: ribbon,
        newpri: 3000000,
        oldpri: 3500000,
        payway: 'Trả góp 0%',
        discount: '14% OFF',
        desc: 'Entry-level smartphone with good features.',
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
        ),
        chip: 'Unisoc',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'Nokia',
    },
    {
        id: uuidv4(),
        img: img17,
        name: 'Oppo A18',
        ribbon: ribbon,
        newpri: 4500000,
        oldpri: 5000000,
        payway: 'Trả góp 0%',
        discount: '10% OFF',
        desc: 'Good performance and camera for the price.',
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
        ),
        chip: 'Mediatek Helio',
        type: 'Android',
        special: 'Sạc không dây',
        manufacturer: 'Oppo',
    },
    {
        id: uuidv4(),
        img: img18,
        name: 'Oppo Reno 11F',
        ribbon: ribbon,
        newpri: 6000000,
        oldpri: 7000000,
        payway: 'Trả góp 0%',
        discount: '15% OFF',
        desc: 'Mid-range phone with good features.',
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
        ),
        chip: 'Mediatek Helio',
        type: 'Android',
        special: 'Sạc không dây',
        manufacturer: 'Oppo',
    },
    {
        id: uuidv4(),
        img: img19,
        name: 'Oppo Reno 7',
        ribbon: ribbon,
        newpri: 7000000,
        oldpri: 8000000,
        payway: 'Trả góp 0%',
        discount: '12% OFF',
        desc: 'Great camera and performance.',
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
        ),
        chip: 'Mediatek Helio',
        type: 'Android',
        special: 'Sạc không dây',
        manufacturer: 'Oppo',
    },
    {
        id: uuidv4(),
        img: img20,
        name: 'Oppo Reno 10 Pro Plus',
        ribbon: ribbon,
        newpri: 9000000,
        oldpri: 10000000,
        payway: 'Trả góp 0%',
        discount: '10% OFF',
        desc: 'High-end performance and features.',
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
        ),
        chip: 'Mediatek Helio',
        type: 'Android',
        special: 'Sạc không dây',
        manufacturer: 'Oppo',
    },
    {
        id: uuidv4(),
        img: img21,
        name: 'Oppo Reno 12F 5G',
        ribbon: ribbon,
        newpri: 8000000,
        oldpri: 9000000,
        payway: 'Trả góp 0%',
        discount: '12% OFF',
        desc: '5G phone with great features.',
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
        ),
        chip: 'Mediatek Helio',
        type: 'Android',
        special: 'Điện thoại AI',
        manufacturer: 'Oppo',
    },
    {
        id: uuidv4(),
        img: img22,
        name: 'Poco M6',
        ribbon: ribbon,
        newpri: 3000000,
        oldpri: 3500000,
        payway: 'Trả góp 0%',
        discount: '14% OFF',
        desc: 'Budget phone with decent performance.',
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
        ),
        chip: 'Snapdragon',
        type: 'Android',
        special: 'Sạc không dây',
        manufacturer: 'Xiaomi',
    },
    {
        id: uuidv4(),
        img: img23,
        name: 'Realme C33',
        ribbon: ribbon,
        newpri: 2500000,
        oldpri: 3000000,
        payway: 'Trả góp 0%',
        discount: '17% OFF',
        desc: 'Entry-level phone with good features.',
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
        ),
        chip: 'Unisoc',
        type: 'Android',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'realme',
    },
    {
        id: uuidv4(),
        img: img24,
        name: 'Realme C55',
        ribbon: ribbon,
        newpri: 3500000,
        oldpri: 4000000,
        payway: 'Trả góp 0%',
        discount: '12% OFF',
        desc: 'Budget phone with good performance.',
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
        ),
        chip: 'Mediatek Dimensity',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'realme',
    },
    {
        id: uuidv4(),
        img: img25,
        name: 'Realme C67',
        ribbon: ribbon,
        newpri: 4000000,
        oldpri: 4500000,
        payway: 'Trả góp 0%',
        discount: '11% OFF',
        desc: 'Good performance and battery life.',
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
        ),
        chip: 'Mediatek Dimensity',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'realme',
    },
    {
        id: uuidv4(),
        img: img26,
        name: 'Samsung Galaxy A15 LTE',
        ribbon: ribbon,
        newpri: 5000000,
        oldpri: 5500000,
        payway: 'Trả góp 0%',
        discount: '9% OFF',
        desc: 'Affordable Samsung phone with good features.',
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
        ),
        chip: 'Exynos',
        type: 'Android',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Samsung',
    },
    {
        id: uuidv4(),
        img: img27,
        name: 'Samsung Galaxy M34 5G',
        ribbon: ribbon,
        newpri: 7000000,
        oldpri: 7500000,
        payway: 'Trả góp 0%',
        discount: '7% OFF',
        desc: '5G phone with good performance.',
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
        ),
        chip: 'Exynos',
        type: 'Android',
        special: 'Điện thoại AI',
        manufacturer: 'Samsung',
    },
    {
        id: uuidv4(),
        img: img28,
        name: 'Samsung Galaxy S21',
        ribbon: ribbon,
        newpri: 12000000,
        oldpri: 13000000,
        payway: 'Trả góp 0%',
        discount: '10% OFF',
        desc: 'High-end phone with great features.',
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
        ),
        chip: 'Exynos',
        type: 'Android',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Samsung',
    },
    {
        id: uuidv4(),
        img: img29,
        name: 'Samsung Galaxy S23',
        ribbon: ribbon,
        newpri: 14000000,
        oldpri: 15000000,
        payway: 'Trả góp 0%',
        discount: '7% OFF',
        desc: 'Flagship phone with top performance.',
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
        ),
        chip: 'Mediatek Dimensity',
        type: 'Android',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Samsung',
    },
    {
        id: uuidv4(),
        img: img30,
        name: 'Samsung Galaxy Z Fold 5',
        ribbon: ribbon,
        newpri: 30000000,
        oldpri: 33000000,
        payway: 'Trả góp 0%',
        discount: '9% OFF',
        desc: 'Foldable phone with cutting-edge technology.',
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
        ),
        chip: 'Exynos',
        type: 'Android',
        special: 'Điện thoại AI',
        manufacturer: 'Samsung',
    },
    {
        id: uuidv4(),
        img: img31,
        name: 'Samsung Galaxy Z Fold 6',
        ribbon: ribbon,
        newpri: 34000000,
        oldpri: 36000000,
        payway: 'Trả góp 0%',
        discount: '5% OFF',
        desc: 'Latest foldable phone with advanced features.',
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
        ),
        chip: 'Exynos',
        type: 'Android',
        special: 'Điện thoại AI',
        manufacturer: 'Samsung',
    },
    {
        id: uuidv4(),
        img: img32,
        name: 'Sony Xperia 1 VI',
        ribbon: ribbon,
        newpri: 21000000,
        oldpri: 22000000,
        payway: 'Trả góp 0%',
        discount: '8% OFF',
        desc: 'High-end phone with excellent display and camera.',
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
        ),
        chip: 'Mediatek Helio',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'Sony',
    },
    {
        id: uuidv4(),
        img: img33,
        name: 'Vivo V27e',
        ribbon: ribbon,
        newpri: 6000000,
        oldpri: 6500000,
        payway: 'Trả góp 0%',
        discount: '7% OFF',
        desc: 'Affordable phone with good camera performance.',
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
        ),
        chip: 'Mediatek Helio',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'vivo',
    },
    {
        id: uuidv4(),
        img: img34,
        name: 'Vivo Y18S',
        ribbon: ribbon,
        newpri: 4000000,
        oldpri: 4500000,
        payway: 'Trả góp 0%',
        discount: '10% OFF',
        desc: 'Budget-friendly phone with reliable performance.',
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
        ),
        chip: 'Mediatek Dimensity',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'vivo',
    },
    {
        id: uuidv4(),
        img: img35,
        name: 'Xiaomi 13T',
        ribbon: ribbon,
        newpri: 12000000,
        oldpri: 13000000,
        payway: 'Trả góp 0%',
        discount: '12% OFF',
        desc: 'High-performance phone with premium features.',
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
        ),
        chip: 'Snapdragon',
        type: 'Android',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Xiaomi',
    },
    {
        id: uuidv4(),
        img: img36,
        name: 'Xiaomi Poco X6 Pro 5G',
        ribbon: ribbon,
        newpri: 8000000,
        oldpri: 8500000,
        payway: 'Trả góp 0%',
        discount: '15% OFF',
        desc: 'Powerful phone with 5G support and great performance.',
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
        ),
        chip: 'Snapdragon',
        type: 'Android',
        special: 'Nhận diện khuôn mặt',
        manufacturer: 'Xiaomi',
    },
    {
        id: uuidv4(),
        img: img37,
        name: 'Xiaomi Redmi Note 12 Pro 4G',
        ribbon: ribbon,
        newpri: 7000000,
        oldpri: 7500000,
        payway: 'Trả góp 0%',
        discount: '10% OFF',
        desc: 'Reliable performance with good camera and battery life.',
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
        ),
        chip: 'Snapdragon',
        type: 'Android',
        special: 'Bảo mật vân tay',
        manufacturer: 'Xiaomi',
    },
    {
        id: uuidv4(),
        img: img38,
        name: 'Xiaomi Redmi Note 12 Pro 5G',
        ribbon: ribbon,
        newpri: 8000000,
        oldpri: 8500000,
        payway: 'Trả góp 0%',
        discount: '12% OFF',
        desc: '5G phone with high performance and great features.',
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
        ),
        chip: 'Snapdragon',
        type: 'Android',
        special: 'Bảo mật vân tay',
        manufacturer: 'Xiaomi',
    },
    {
        id: uuidv4(),
        img: img39,
        name: 'ZTE Blade V50',
        ribbon: ribbon,
        newpri: 4000000,
        oldpri: 4500000,
        payway: 'Trả góp 0%',
        discount: '8% OFF',
        desc: 'Affordable phone with decent performance.',
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
        ),
        chip: 'Unisoc',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'ZTE',
    },
    {
        id: uuidv4(),
        img: img40,
        name: 'ZTE Blade A54',
        ribbon: ribbon,
        newpri: 3000000,
        oldpri: 3500000,
        payway: 'Trả góp 0%',
        discount: '10% OFF',
        desc: 'Budget phone with good features and value for money.',
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
        ),
        chip: 'Unisoc',
        type: 'Android',
        special: 'Hỗ trợ 5G',
        manufacturer: 'ZTE',
    },
]