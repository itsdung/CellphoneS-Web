import { IoMdHeartEmpty } from "react-icons/io";
import phone1 from '@/assets/images/phones/oppoX5.png'
import phone2 from '@/assets/images/phones/samsung-galaxy-s24-plus.png'
import phone3 from '@/assets/images/phones/samsungtabs9fe.png'
import phone4 from '@/assets/images/phones/ss-s24-ultra-xam-222_2.png'
import phone5 from '@/assets/images/phones/tecno-camon-30.png'
import phone6 from '@/assets/images/phones/tecno-spark-20-pro-plus_1__2.png'
import { CiStar } from "react-icons/ci";
import { StaticImageData } from "next/image";

interface HotSaleItem {
    img: StaticImageData;
    name: string;
    newpri: string;
    oldpri: string;
    payway: string;
    discount: string;
    desc: string;
    loveIc: JSX.Element;
    stars: JSX.Element;
  }
  
  export const HotSaleSliderData: HotSaleItem[] = [
    {
      img: phone1,
      name: 'Oppo X5',
      newpri: '10,000,000 đ',
      oldpri: '12,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
      desc: 'High performance and great camera quality.',
      loveIc: <IoMdHeartEmpty />,
      stars: (
        <>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      )
    },
    {
      img: phone2,
      name: 'Samsung Galaxy S24 Plus',
      newpri: '20,000,000 đ',
      oldpri: '24,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '17% OFF',
      desc: 'Latest model with exceptional features.',
      loveIc: <IoMdHeartEmpty />,
      stars: (
        <>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      )
    },
    {
      img: phone3,
      name: 'Samsung Tab S9 FE',
      newpri: '15,000,000 đ',
      oldpri: '18,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '16% OFF',
      desc: 'Perfect for both work and entertainment.',
      loveIc: <IoMdHeartEmpty />,
      stars: (
        <>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      )
    },
    {
      img: phone4,
      name: 'Samsung S24 Ultra',
      newpri: '25,000,000 đ',
      oldpri: '30,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '20% OFF',
      desc: 'Top-tier smartphone with premium features.',
      loveIc: <IoMdHeartEmpty />,
      stars: (
        <>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      )
    },
    {
      img: phone5,
      name: 'Tecno Camon 30',
      newpri: '8,000,000 đ',
      oldpri: '10,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '20% OFF',
      desc: 'Affordable phone with good performance.',
      loveIc: <IoMdHeartEmpty />,
      stars: (
        <>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      )
    },
    {
      img: phone6,
      name: 'Tecno Spark 20 Pro Plus',
      newpri: '9,000,000 đ',
      oldpri: '11,000,000 đ',
      payway: 'Trả góp 0%',
      discount: '18% OFF',
      desc: 'Stylish design and reliable performance.',
      loveIc: <IoMdHeartEmpty />,
      stars: (
        <>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      )
    }
  ];