import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Slider = (slides) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000 "
                  : " opacity-0"
              }
            >
              <FaArrowAltCircleLeft
                onClick={prevSlide}
                className=" absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <Image width="1440" height="600" src={slide.image} alt="/" />
              )}
              <FaArrowAltCircleRight
                className=" absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
                onClick={nextSlide}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
