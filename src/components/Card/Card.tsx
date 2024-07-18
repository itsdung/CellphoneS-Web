'use client'
import Image, { StaticImageData } from 'next/image';
import './style.scss'
import Link from 'next/link';
import { useState } from 'react';

interface Item {
    img: StaticImageData | string;
    name: string;
    ribbon: StaticImageData | null;
    newpri: string;
    oldpri: string;
    payway: string;
    discount: string | null;
    desc: string;
    loveIc: JSX.Element;
    loveIcFull?: JSX.Element;
    stars: JSX.Element | null;
}

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
          <span className='discount-text'>{item.discount}</span>
          <span className='payway'>{item.payway}</span>
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
          <p className='item-newprice'>{item.newpri}</p>
          <p className='item-oldprice'>{item.oldpri}</p>
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