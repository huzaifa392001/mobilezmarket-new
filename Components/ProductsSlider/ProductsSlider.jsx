"use client";
import React from "react";
import "./ProductsSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard/ProductCard";

function ProductsSlider(props) {
  return (
    <section className="productSec">
      <div className="container">
        <h2 className="secHeading">{props?.heading || ""}</h2>
        <Swiper
          className="productSlider"
          spaceBetween={props?.spaceBetween}
          slidesPerView={props?.slidesPerView}
        >
          {props?.data?.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductsSlider;
