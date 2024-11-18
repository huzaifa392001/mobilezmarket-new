"use client";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const ImagesSlider = (props) => {
  return (
    <>
      {props?.images && (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={props?.spaceBetween || 0}
          slidesPerView={props?.slidesPerView || 1}
        >
          {props?.images?.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img?.img_url}
                width={600}
                height={600}
                alt={`${props?.prodName}'s image`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default ImagesSlider;
