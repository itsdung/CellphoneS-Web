import img1 from '@/assets/images/blockPC/PC.png'
import img2 from '@/assets/images/blockPC/cpu_chip1.png'
import img3 from '@/assets/images/blockPC/mainboard_1.png'
import img4 from '@/assets/images/blockPC/ram_2.png'
import img5 from '@/assets/images/blockPC/ssd_2.png'
import img6 from '@/assets/images/blockPC/vga.png'
import img7 from '@/assets/images/blockPC/psu.png'
import img8 from '@/assets/images/blockPC/tan_nhiet_2.png'
import img9 from '@/assets/images/blockPC/case_1.png'
import { StaticImageData } from 'next/image'

interface PC {
    image: StaticImageData | null;
    altText: string;
    name: string;
    link: string;
    position?: number;
  }
  
  export const pcData: PC[] = [
    { image: img1, altText: 'PC', name: 'PC', link: '/', position: 1 },
    { image: img2, altText: 'CPU', name: 'CPU', link: '/', position: 2 },
    { image: img3, altText: 'Mainboard', name: 'Mainboard', link: '/', position: 3 },
    { image: img4, altText: 'RAM', name: 'RAM', link: '/', position: 4 },
    { image: img5, altText: 'SSD', name: 'Ổ cứng', link: '/', position: 5},
    { image: img6, altText: 'VGA', name: 'Card màn hình', link: '/', position: 6},
    { image: img7, altText: 'PSU', name: 'Nguồn máy tính', link: '/', position: 7 },
    { image: img8, altText: 'Cooling', name: 'Tản nhiệt', link: '/', position: 8},
    { image: img9, altText: 'Case', name: 'Case máy tính', link: '/', position: 9}
  ];