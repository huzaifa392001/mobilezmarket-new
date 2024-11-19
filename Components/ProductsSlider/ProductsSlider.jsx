"use client";
import React from "react";
import "./ProductsSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";

function ProductsSlider(props) {
  return (
    <>
      <h2 className="secHeading">{props?.heading || ""}</h2>
      <Swiper
        className="productSlider"
        spaceBetween={props?.spaceBetween}
        slidesPerView={props?.slidesPerView}
        loop={props?.sliderLoop}
      >
        {props?.data ? (
          <>
            {props?.data?.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            {[1, 2].map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCardSkeleton />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
      </>
  );
}

export default React.memo(ProductsSlider);
