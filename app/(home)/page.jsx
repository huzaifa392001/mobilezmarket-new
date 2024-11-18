"use client";
import MobileBanner from "@/Components/MobileBanner/MobileBanner";
import ProductsSlider from "@/Components/ProductsSlider/ProductsSlider";
import RoundButtons from "@/Components/RoundButtons/RoundButtons";
import brands from "@/DummyData/Brands.json";
import categories from "@/DummyData/Categories.json";
import { fetchFromApi } from "@/Utils/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState();
  const [mobiles, setmobiles] = useState();
  const [accessories, setaccessories] = useState();
  const [tablets, settablets] = useState();
  const [watches, setwatches] = useState();
  // Fetch products on the server
  const getProducts = async () => {
    try {
      await fetchFromApi("/home-devices").then((res) => {
        setmobiles(res.mobile_ads);
        settablets(res.tablet_ads);
        setwatches(res.watch_ads);
        setaccessories(res.accessories_ads);
      });
    } catch (err) {
      // if (err.response?.status === 429) {
      //   setError("Too many requests. Please try again later.");
      // } else {
      //   setError("Failed to fetch products. Please try again.");
      // }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  return (  
    <>
      <MobileBanner />
      <section className="categoriesSec">
        <div className="container">
          <h2 className="secHeading">Categories</h2>
          <RoundButtons
            className={"grid4"}
            iconClass="small"
            links={categories}
          />
        </div>
      </section>
      <section className="brandsSec">
        <div className="container">
          <h2 className="secHeading">Brands</h2>
          <RoundButtons
            spaceBetween={10}
            slidesPerView={4}
            slider
            links={brands}
          />
        </div>
      </section>
      <ProductsSlider
        slidesPerView={2}
        spaceBetween={10}
        heading={"Recent Mobile Devices"}
        data={mobiles}
      />
      <ProductsSlider
        slidesPerView={2}
        spaceBetween={10}
        heading={"Recent Tablet Devices"}
        data={tablets}
      />
      <ProductsSlider
        slidesPerView={2}
        spaceBetween={10}
        heading={"Recent Smart Watches"}
        data={watches}
      />
      <ProductsSlider
        slidesPerView={2}
        spaceBetween={10}
        heading={"Recent Accessories"}
        data={accessories}
      />
    </>
  );
}
