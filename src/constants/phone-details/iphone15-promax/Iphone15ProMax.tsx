import img1 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__1.png'
import img2 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__2.png'
import img3 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__3.png'
import img4 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__4.png'
import img5 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__5.png'
import img6 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__6.png'
import img7 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__7.png'
import img8 from '@/assets/images/mobile-data/detail/iphone15-promax/iphone-15-pro-max_4__8.png'
import { StaticImageData } from 'next/image'
import { v4 as uuidv4 } from 'uuid';

// Define the interface for each image item
interface ImageItem {
  id: string;
  src: StaticImageData;
  alt: string;
}

// Define the slider with unique ids
export const iphone15DetailSlider: ImageItem[] = [
    { id: uuidv4(), src: img1, alt: 'iPhone 15 Pro Max Image 1' },
    { id: uuidv4(), src: img2, alt: 'iPhone 15 Pro Max Image 2' },
    { id: uuidv4(), src: img3, alt: 'iPhone 15 Pro Max Image 3' },
    { id: uuidv4(), src: img4, alt: 'iPhone 15 Pro Max Image 4' },
    { id: uuidv4(), src: img5, alt: 'iPhone 15 Pro Max Image 5' },
    { id: uuidv4(), src: img6, alt: 'iPhone 15 Pro Max Image 6' },
    { id: uuidv4(), src: img7, alt: 'iPhone 15 Pro Max Image 7' },
    { id: uuidv4(), src: img8, alt: 'iPhone 15 Pro Max Image 8' },
];