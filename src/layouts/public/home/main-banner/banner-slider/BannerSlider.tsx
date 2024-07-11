'use client'
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { bannerSlideData } from '@/constants/BannerSilderConstants';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.scss';

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleChange = (index: number) => {
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
              <img src={slide.src.src} alt={slide.alt} />
            </div>
          ))}
        </Carousel>
  
        <ul className="descriptions-list">
          {bannerSlideData.map((slide, index) => (
            <li
              className={`description-list-item ${index === activeIndex ? 'active' : ''}`}
              key={index}
              data-id={index}
              onClick={() => handleDescriptionClick(index)}
            >
              <p
                className="description-list-item-text"
                dangerouslySetInnerHTML={{ __html: slide.description }}
              ></p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BannerSlider;
