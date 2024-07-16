import Image, { StaticImageData } from 'next/image';
import './style.scss'
import Link from 'next/link';


interface BlockCategoryItem {
    image: StaticImageData | null;
    altText: string;
    name: string;
    link: string;
    position?: number;
}

const BlockCategoryItem = ({ item }: { item: BlockCategoryItem }) => {
  return (
    <Link href={item.link} >
        <div className='block-category-item'>
            <p className='block-category-item-title'>{item.name}</p>
            <div className='block-category-item-image'>
                {item.image && (
                    <Image
                    src={item.image}
                    alt={item.altText}
                    />
                )}
              </div>
        </div>
    </Link>
  );
}

export default BlockCategoryItem;