'use client'
import Image, { StaticImageData } from 'next/image';
import './style.scss'
import Link from 'next/link';
import { SVGProps, useState } from 'react';
import ribbon from '@/assets/icons/wrap.png';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface Item {
  id: string;
  img: StaticImageData;
  name: string;
  ribbon: StaticImageData | null;
  newpri: number;
  oldpri: number;
  payway?: number;
  discount?: number;
  desc: string;
  loveIc: JSX.Element;
  loveIcFull?: JSX.Element;
  suggest?: boolean;
  stars?: JSX.Element | null;
  chip?: string;
  type?: string;
  special?: string[];
  manufacturer?: string;
  available?: boolean;
}

const PriceDisplay = ({ price }: { price: number }) => {
  return <>{price.toLocaleString('vi-VN')} đ</>;
};

const CardItem = ({ item }: { item: Item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLoveIcFull, setShowLoveIcFull] = useState(false);

  const toggleLoveIcon = () => {
      setShowLoveIcFull(!showLoveIcFull);
  };
  return (
    <div className='card-item'>
      {item.ribbon && (
        <div className='card-item-discount'>
          <Image src={item.ribbon} alt='ribbon'/>
          <span className='discount-text'>{item.discount}% OFF</span>
          <span className='payway'>Trả góp {item.payway}%</span>
        </div>
      )}
      <div className='card-item-image'>
        <Link href='/'>
          <Image src={item.img} alt='picture' width={160} height={160}/>
        </Link>
      </div>
      <div className='card-item-name'>
        <Link href='/'>
          <p>{item.name}</p>
        </Link>
      </div>
      <div className='card-item-price'>
        <Link className='price-link' href='/'>
          <p className='item-newprice'><PriceDisplay price={item.newpri} /></p>
          <p className='item-oldprice'><PriceDisplay price={item.oldpri} /></p>
        </Link>
      </div>
      <div className='card-item-desc'>
        <Link href='/'>
          <p>{item.desc}</p>
        </Link>
      </div>
      <div className='card-item-feedback'>
        <div className='item-star'>
          {item.stars}
        </div>
        <div className='item-love'>
          <p>Yêu thích</p>
          <div className='love-icon'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
          >
              {isHovered && item.loveIcFull ? item.loveIcFull : item.loveIc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;