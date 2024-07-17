import img1 from '@/assets/icons/pay-method/apple-pay-og.png';
import img2 from '@/assets/icons/pay-method/vnpay-logo.png';
import img3 from '@/assets/icons/pay-method/momo_1.png';
import img4 from '@/assets/icons/pay-method/onepay-logo.png';
import img5 from '@/assets/icons/pay-method/mpos-logo.png';
import img6 from '@/assets/icons/pay-method/kredivo-logo.png';
import img7 from '@/assets/icons/pay-method/zalopay-logo.png';
import img8 from '@/assets/icons/pay-method/alepay-logo.png';
import img9 from '@/assets/icons/pay-method/fundiin.png';
import { StaticImageData } from 'next/image';

interface FooterPayData {
    img: StaticImageData;
    link: string;
  }
  

 export const footerpayData: FooterPayData[] = [
    { img: img1, link: 'https://www.apple.com/apple-pay/' },
    { img: img2, link: 'https://vnpay.vn/' },
    { img: img3, link: 'https://momo.vn/' },
    { img: img4, link: 'https://onepay.vn/' },
    { img: img5, link: 'https://mpos.vn/' },
    { img: img6, link: 'https://www.kredivo.com/' },
    { img: img7, link: 'https://zalopay.vn/' },
    { img: img8, link: 'https://alepay.vn/' },
    { img: img9, link: 'https://fundiin.vn/' },
  ];
