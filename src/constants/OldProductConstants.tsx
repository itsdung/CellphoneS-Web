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
    { image: img1, altText: 'PC', name: 'Điện thoại cũ' , link: '/' },
    { image: img2, altText: 'CPU', name: 'Máy tính bảng cũ' , link: '/' },
    { image: img3, altText: 'Mainboard', name: 'Mac cũ' , link: '/' },
    { image: img4, altText: 'RAM', name: 'Laptop cũ' , link: '/' },
    { image: img5, altText: 'SSD', name: 'Tai nghe cũ' , link: '/' },
    { image: img6, altText: 'VGA', name: 'Loa cũ' , link: '/' },
    { image: img7, altText: 'PSU', name: 'Đồng hồ thông minh cũ' , link: '/' },
    { image: img8, altText: 'Cooling', name: 'Nhà thông minh cũ' , link: '/' },
    { image: img9, altText: 'Case', name: 'Phụ kiện cũ' , link: '/' },
    { image: img10, altText: 'Case', name: 'Màn hình cũ' , link: '/' },
    { image: img11, altText: 'Case', name: 'TV cũ' , link: '/' },
    { image: img12, altText: 'Case', name: 'Cáp sạc cũ' , link: '/' },
    { image: img13, altText: 'Case', name: 'Pin dự phòng cũ' , link: '/' }
];