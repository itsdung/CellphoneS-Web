import img1 from '@/assets/images/Old/ip-14-hp-cu.png'
import img2 from '@/assets/images/Old/ipad-cate-cu.png'
import img3 from '@/assets/images/Old/macbook.png'
import img4 from '@/assets/images/Old/laptop.png'
import img5 from '@/assets/images/Old/cate-tai-nghe_1.png'
import img6 from '@/assets/images/Old/cate-loa_1.png'
import img7 from '@/assets/images/Old/cate-phu-kien.png'
import img8 from '@/assets/images/Old/smarthome.png'
import img9 from '@/assets/images/Old/cate-phu-kien.png'
import img10 from '@/assets/images/Old/cate-man-hinh.png'
import img11 from '@/assets/images/Old/tivi-cu-new_1334.png'
import img12 from '@/assets/images/Old/sac.png'
import img13 from '@/assets/images/Old/sacduphong.png'
import { StaticImageData } from 'next/image'



interface OldProduct {
    image: StaticImageData | null;
    altText: string;
    name: string;
    link: string;
}

export const oldproductData: OldProduct[] = [
    { image: img1, altText: 'PC', name: 'iPhone 14' , link: '/' },
    { image: img2, altText: 'CPU', name: 'iPad' , link: '/' },
    { image: img3, altText: 'Mainboard', name: 'MacBook' , link: '/' },
    { image: img4, altText: 'RAM', name: 'Laptop' , link: '/' },
    { image: img5, altText: 'SSD', name: 'Tai nghe' , link: '/' },
    { image: img6, altText: 'VGA', name: 'Loa' , link: '/' },
    { image: img7, altText: 'PSU', name: 'Phụ kiện' , link: '/' },
    { image: img8, altText: 'Cooling', name: 'Smarthome' , link: '/' },
    { image: img9, altText: 'Case', name: 'Sạc' , link: '/' },
    { image: img10, altText: 'Case', name: 'Sạc' , link: '/' },
    { image: img11, altText: 'Case', name: 'Sạc' , link: '/' },
    { image: img12, altText: 'Case', name: 'Sạc' , link: '/' },
    { image: img13, altText: 'Case', name: 'Sạc' , link: '/' }
];