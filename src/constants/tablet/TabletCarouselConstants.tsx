import tab1 from '@/assets/images/tablet/frame_100_1_2__2_2.png'
import tab2 from '@/assets/images/tablet/ipad-10-2-inch-2021_1.png'
import tab3 from '@/assets/images/tablet/ipad-10-9-inch-2022.png'
import tab4 from '@/assets/images/tablet/ipad-air-5.png'
import tab5 from '@/assets/images/tablet/ipad-air-6-m2-11-inch_9_.png'
import tab6 from '@/assets/images/tablet/ipad-mini-6_1_.png'
import tab7 from '@/assets/images/tablet/mi-pad-6-cps-doc-quyen.png'
import ribbon from '@/assets/icons/wrap.png'
import { StaticImageData } from "next/image";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}


interface TabletCarousel {
    id: string;
    img: StaticImageData;
    name: string;
    ribbon: StaticImageData;
    newpri: number;
    oldpri: number;
    payway: string;
    discount: string;
    desc: string;
    loveIc: JSX.Element;
    loveIcFull?: JSX.Element;
    suggest?: true;
    stars: JSX.Element;
}

export const TabletCarouselData: TabletCarousel[] = [
    {
        id: uuidv4(),
        img: tab1,
        name: 'Samsung Galaxy Tab S9 FE 5G',
        ribbon: ribbon,
        newpri: 10000000,
        oldpri: 12000000,
        payway: 'Trả góp 0%',
        discount: '16% OFF',
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
        img: tab2,
        name: 'iPad Air 6 M2 11 inch Wifi',
        ribbon: ribbon,
        newpri: 15000000,
        oldpri: 18000000,
        payway: 'Trả góp 0%',
        discount: '16% OFF',
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
    {
        id: uuidv4(),
        img: tab3,
        name: 'iPad Air 5 10.9 inch (2022)',
        ribbon: ribbon,
        newpri: 15000000,
        oldpri: 18000000,
        payway: 'Trả góp 0%',
        discount: '16% OFF',
        desc: 'Perfect for both work and entertainment.',
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
        img: tab4,
        name: 'iPad Pro 11 2021 M1 WiFi',
        ribbon: ribbon,
        newpri: 25000000,
        oldpri: 30000000,
        payway: 'Trả góp 0%',
        discount: '20% OFF',
        desc: 'Top-tier laptop with premium features.',
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
        img: tab5,
        name: 'iPad Pro M4 11 inch Wifi',
        ribbon: ribbon,
        newpri: 8000000,
        oldpri: 10000000,
        payway: 'Trả góp 0%',
        discount: '20% OFF',
        desc: 'Affordable laptop with good performance.',
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
        img: tab6,
        name: 'iPad Air 5 10.9 inch (2022)',
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
        )
    },
    {
        id: uuidv4(),
        img: tab7,
        name: 'Xiaomi Redmi Pad SE 6GB 128GB',
        ribbon: ribbon,
        newpri: 15000000,
        oldpri: 18000000,
        payway: 'Trả góp 0%',
        discount: '16% OFF',
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