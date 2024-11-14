"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./MobileBanner.scss";
import SearchScreen from "../SearchScreen/SearchScreen";
import { useSelector } from "react-redux";
import store from "@/Redux/Store";
import { SET_SEARCHSCREEN_ACTIVE } from "@/Redux/Slices/Search";

function MobileBanner() {
  const showSearch = useSelector((state) => state.search.isActive);

  const toggleSearchScreen = () => {
    store.dispatch(SET_SEARCHSCREEN_ACTIVE(true));
  };

  return (
    <>
      <section className="mobileBanner">
        <div className="container mx-auto">
          <div className="logoCont">
            <Image
              src={"/images/logo-white.png"}
              width={150}
              height={50}
              alt="Website Logo"
            />
          </div>
          <h1>Top Mobilephone Marketplace in Pakistan</h1>
          <Swiper
            className="pillsCont"
            spaceBetween={10}
            slidesPerView={2.75}
          >
            <SwiperSlide>
              <Link href={""} className="pill selected">
                Mobiles
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={""} className="pill">
                Tablets
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={""} className="pill">
                Watches
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={""} className="pill">
                Accessories
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className="searchBar">
            <button className="inputCont" onClick={toggleSearchScreen}>
              <i className="fas fa-search"></i>
              <span className="input">Search Mobile Phones</span>
            </button>
          </div>
        </div>
      </section>
      {showSearch && <SearchScreen />}
    </>
  );
}

export default MobileBanner;
