'use client';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { bannerSlideData } from '@/constants/BannerSilderConstants';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import './style.scss';

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [visibleDescriptions, setVisibleDescriptions] = useState(bannerSlideData.slice(0, 5));
  const [transitionDirection, setTransitionDirection] = useState<string>('');

  useEffect(() => {
    const start = activeIndex >= 5 ? activeIndex - 4 : 0;
    setVisibleDescriptions(bannerSlideData.slice(start, start + 5));
  }, [activeIndex]);

  const handleChange = (index: number) => {
    if (index > activeIndex) {
      setTransitionDirection('left');
    } else {
      setTransitionDirection('right');
    }
    setActiveIndex(index);
  };

  const handleDescriptionClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="banner-slider-container">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showArrows={true}
        showStatus={false}
        selectedItem={activeIndex}
        showIndicators={false}
        infiniteLoop={true}
        onChange={handleChange}
      >
        {bannerSlideData.map((slide, index) => (
          <div key={index} className="banner-slide">
            <Image src={slide.src} alt={slide.alt} layout="responsive" />
          </div>
        ))}
      </Carousel>

      <ul className="descriptions-list">
        {visibleDescriptions.map((slide, index) => {
          const globalIndex = bannerSlideData.indexOf(slide);
          return (
            <li
              className={`description-list-item ${globalIndex === activeIndex ? 'active' : ''}`}
              key={globalIndex}
              data-id={globalIndex}
              onClick={() => handleDescriptionClick(globalIndex)}
            >
              <p
                className="description-list-item-text"
                dangerouslySetInnerHTML={{ __html: slide.description }}
              ></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BannerSlider;