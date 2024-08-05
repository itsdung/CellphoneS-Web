'use client'
import { iphone15DetailSlider } from '@/constants/phone-details/iphone15-promax/Iphone15ProMax'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './style.scss';
import { Carousel } from '@/components/carousel/detail-carousel/Carousel';
import { IphoneData, iphoneData } from '@/constants/mobile-page/Apple/Iphone/IphoneDataConstants';
import InfoDetail from '@/components/detail-info/InfoDetail';
import DetailModal from '@/components/modal/modal-detail-info/DetailModal';


export default function DetailContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | IphoneData>(null);

  const openModal = (product: IphoneData) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    return () => {
        document.body.style.overflow = '';
    };
}, [isModalOpen]);

  return (
    <div className="detail-content">
      <div className='detail-slider'>
        <Carousel>
          {iphone15DetailSlider.map((item) => (
            <div className='detail-slider-image' key={item.id}>
              <Image
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="detail-infomation">
        {iphoneData.map((product) => (
            <InfoDetail key={product.id} item={product} onOpenModal={openModal} />
          ))}
        </div>
        {isModalOpen && selectedProduct && (
          <DetailModal item={selectedProduct} onClose={closeModal} />
        )}
    </div>
  );
}
