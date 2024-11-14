"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./RoundButtons.scss";
import Image from "next/image";

function RoundButtons(props) {
  return (
    <>
      {props?.slider ? (
        <Swiper
          className="btnCont slider"
          spaceBetween={props?.spaceBetween}
          slidesPerView={props?.slidesPerView}
        >
          {props?.links?.map(({ name, url, icon }, index) => (
            <SwiperSlide key={index}>
              <Link href={url} className="pill selected">
                <span className={`icon ${props?.iconClass}`}>
                  <Image
                    src={`/images/brands/${icon}`}
                    width={40}
                    height={40}
                    alt={`${name}'s Icon`}
                  />
                </span>
                <span className="text">{name}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={`btnCont ${props?.className}`}>
          {props?.links?.map(({ name, url, icon }, index) => (
            <Link key={index} href={url}>
              <span className={`icon ${props?.iconClass}`}>
                <i className={icon}></i>
              </span>
              <span className="text">{name}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default RoundButtons;
