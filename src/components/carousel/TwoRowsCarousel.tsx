'use client'
import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.scss";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function CustomNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        onClick={onClick}
      >
        <MdNavigateNext style={{ color: "black"}} />
      </div>
    );
  }
  
  function CustomPrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        onClick={onClick}
      >
        <MdNavigateBefore style={{ color: "black"}} />
      </div>
    );
  }

export function TwoRowsCarousel({ children }: any) {
  const settings = {
    className: "center tworow",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    // rows: 2,
    slidesPerRow: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="slider-contain">
        <Slider {...settings}>
            {children}
        </Slider>
    </div>
  )
}