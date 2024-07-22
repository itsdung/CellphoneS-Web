import { StaticImageData } from "next/image";
import banner1 from '@/assets/images/banner/banner-sliding-samsung-moi.png'
import banner2 from '@/assets/images/banner/iphone-15-pm-nang-cap-5-7-2024.png'
import banner3 from '@/assets/images/banner/oppo-reno12-banner-sliding-5-7-2024.png'
import banner4 from '@/assets/images/banner/poco-m6-sliding-cate-27-6-2024.jpg'
import banner5 from '@/assets/images/banner/huawei-watch-gt4-home.png'
import banner6 from '@/assets/images/banner/tai-nge-sony-wh-1000xm5-home.png'

interface Slide {
    src: StaticImageData;
    alt: string;
    description: string;
}
  
export  const bannerSlideData: Slide[] = [
    {
      src: banner1,
      alt: 'Hình ảnh 2',
      description: 'GALAXY Z6 SERIES<br/>Đặt trước ngay',
    },
    {
      src: banner2,
      alt: 'Hình ảnh 1',
      description: 'RENO 12 SERIES<br/>Giá chỉ từ 9.49 triệu',
    },
    {
      src: banner3,
      alt: 'Hình ảnh 3',
      description: 'IPHONE 15 PROMAX<br/>Nâng cấp ngay',
    },
    {
      src: banner4,
      alt: 'Hình ảnh 2',
      description: 'GALAXY WATCH MỚI<br/>Đặt trước ngay',
    },
    {
      src: banner5,
      alt: 'Hình ảnh 3',
      description: 'HUAWEI WATCH GT4<br/>Giá chỉ 4.49 triệu',
    },
  ];