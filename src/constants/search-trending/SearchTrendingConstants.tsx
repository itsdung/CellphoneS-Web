import img1 from '@/assets/images/trending-box/iphone-15-pro-max_2__1.png';
import img2 from '@/assets/images/trending-box/dien-thoai-oppo-reno12-5g-trang-1.png';
import img3 from '@/assets/images/trending-box/image_1170_3.png';
import img4 from '@/assets/images/trending-box/ipad-air-6-m2-11-inch-256gb.png';
import img5 from '@/assets/images/trending-box/ipad-pro-m4-11-inch-1.png';
import img6 from '@/assets/images/trending-box/mba13-m3-spacegray-gallery1-202402_4.png';
import img7 from '@/assets/images/trending-box/poco-m6_1_.png';
import img8 from '@/assets/images/trending-box/combo-camera-hanh-dong-dji-action-4_1_.png';
import img9 from '@/assets/images/trending-box/google-tivi-coocaa-4k-70-inch-70c9.png';
import img10 from '@/assets/images/trending-box/samsung-galaxy-buds-3-3.png';
import { StaticImageData } from 'next/image';

export interface TrendingBoxItem {
    img: StaticImageData;
    name: string;
    alt: string;
    link: string;
  }
  
export const trendingBoxData: TrendingBoxItem[] = [
    { img: img1, name: "iPhone 15 Pro Max", alt: "iPhone 15 Pro Max Image", link: "/" },
    { img: img2, name: "Oppo Reno12 5G", alt: "Oppo Reno12 5G Image", link: "/" },
    { img: img3, name: "Product 3", alt: "Product 3 Image", link: "/" },
    { img: img4, name: "iPad Air 6 M2", alt: "iPad Air 6 M2 Image", link: "/" },
    { img: img5, name: "iPad Pro M4", alt: "iPad Pro M4 Image", link: "/" },
    { img: img6, name: "MacBook Air M3", alt: "MacBook Air M3 Image", link: "/" },
    { img: img7, name: "Poco M6", alt: "Poco M6 Image", link: "/" },
    { img: img8, name: "DJI Action 4", alt: "DJI Action 4 Image", link: "/" },
    { img: img9, name: "Coocaa 4K TV", alt: "Coocaa 4K TV Image", link: "/" },
    { img: img10, name: "Samsung Galaxy Buds 3", alt: "Samsung Galaxy Buds 3 Image", link: "/" },
];