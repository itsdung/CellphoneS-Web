import banner1 from '@/assets/images/banner/m55-right-banner.png'
import banner2 from '@/assets/images/banner/b2s-mac-2024-690300.png'
import banner3 from '@/assets/images/banner/b2s-2024-right-banner-laptop.png'
import { StaticImageData } from 'next/image';


interface Slide {
    id: number;
    src: StaticImageData;
    alt: string;
}

export const rightBannerData: Slide[] = [
  {
    id: 1,
    src: banner1,
    alt: 'Banner 1'
  },
  {
    id: 2,
    src: banner2,
    alt: 'Banner 2'
  },
  {
    id: 3,
    src: banner3,
    alt: 'Banner 3'
  }
];

