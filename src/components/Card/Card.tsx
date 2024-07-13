import Image, { StaticImageData } from 'next/image';
import './style.scss'

interface Item {
    img: StaticImageData;
    name: string;
    ribbon: StaticImageData;
    newpri: string;
    oldpri: string;
    payway: string;
    discount: string;
    desc: string;
    loveIc: JSX.Element;
    stars: JSX.Element;
}

const CardItem = ({ item }: { item: Item }) => {
  return (
    <div className='card-item'>
      <div className='card-item-discount'>
        <Image src={item.ribbon} alt='ribbon'/>
        <span className='discount-text'>{item.discount}</span>
        <span className='payway'>{item.payway}</span>
      </div>
      <div className='card-item-image'>
        <Image src={item.img} alt='picture'/>
      </div>
      <div className='card-item-name'>
        <p>{item.name}</p>
      </div>
      <div className='card-item-price'>
        <p className='item-newprice'>{item.newpri}</p>
        <p className='item-oldprice'>{item.oldpri}</p>
      </div>
      <div className='card-item-desc'>
        <p>{item.desc}</p>
      </div>
      <div className='card-item-feedback'>
        <div className='item-star'>
          {item.stars}
        </div>
        <div className='item-love'>
          <p>Yêu thích</p>
          <div className='love-icon'>{item.loveIc}</div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;