import img1 from '@/assets/images/banner1/b2s-2024-slide-full-deal.png'
import img2 from '@/assets/images/banner1/b2s-2024-slide-laptop.png'
import img3 from '@/assets/images/banner1/b2s-2024-slide-macbook.png'
import img4 from '@/assets/images/banner1/b2s-2024-slide-samsung.png'
import img5 from '@/assets/images/banner1/b2s-ipad-update-new-25-06.png'
import { StaticImageData } from 'next/image'

interface Upsale {
    image: StaticImageData | null;
    altText: string;
    name: string;
    link: string;
  }
  
  export const upsaleData: Upsale[] = [
    { image: img1, altText: 'Full Deal', name: 'Khuyến mãi toàn diện', link: '/' },
    { image: img2, altText: 'Laptop', name: 'Máy tính xách tay', link: '/' },
    { image: img3, altText: 'Macbook', name: 'Máy tính Macbook', link: '/' },
    { image: img4, altText: 'Samsung', name: 'Thiết bị Samsung', link: '/' },
    { image: img5, altText: 'iPad Update', name: 'Cập nhật iPad', link: '/' },
  ];