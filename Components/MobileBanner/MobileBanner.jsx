"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./MobileBanner.scss";
import SearchScreen from "../SearchScreen/SearchScreen";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_SEARCH_QUERY,
  SET_SEARCHSCREEN_ACTIVE,
} from "@/Redux/Slices/Search";
import { useRouter } from "next/navigation";

function MobileBanner() {
  const dispatch = useDispatch();
  const router = useRouter();
  const showSearch = useSelector((state) => state.search.isActive);

  const toggleSearchScreen = () => {
    dispatch(SET_SEARCHSCREEN_ACTIVE(true));
  };

  const setSearchQuery = (query) => {
    dispatch(SET_SEARCH_QUERY(query));
    router.push(`/devices/${query}`);
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
          <h1>Mobilephone Marketplace in Pakistan</h1>
          <Swiper className="pillsCont" spaceBetween={10} slidesPerView={2.75}>
            <SwiperSlide>
              <button
                onClick={() => setSearchQuery("mobiles")}
                className="pill selected"
              >
                Mobiles
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setSearchQuery("tablets")}
                className="pill"
              >
                Tablets
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setSearchQuery("watches")}
                className="pill"
              >
                Watches
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => setSearchQuery("accessories")}
                className="pill"
              >
                Accessories
              </button>
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
