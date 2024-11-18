"use client";
import React, { useEffect, useState } from "react";
import "./ProductDetailLayout.scss";
import { useDispatch, useSelector } from "react-redux";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import { usePathname } from "next/navigation";
import { fetchFromApi } from "@/Utils/api";
import { SET_LOADING, SET_REQUESTED_PRODUCT } from "@/Redux/Slices/Search";
import { formatDate } from "@/Utils/Utils";

function ProductDetailLayout() {
  const loading = useSelector((state) => state.search.loading);
  const product = useSelector((state) => state.search.requestedProduct);

  const path = usePathname();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);

  // Function to fetch the product details
  const searchProduct = async (id, slug) => {
    try {
      dispatch(SET_LOADING(true));
      const res = await fetchFromApi(`/details/${id}/${slug}`);
      dispatch(SET_REQUESTED_PRODUCT(res.details));
      console.clear();
      console.log("product=> ", res);
      return res.details; // Return the fetched product details
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      dispatch(SET_LOADING(false));
    }
  };

  const getProduct = async () => {
    try {
      const productId = path.split("/")[2];
      const productSlug = path.split("/")[3];

      if (!product || product?.id !== productId) {
        const fetchedProduct = await searchProduct(productId, productSlug);
        setImages(fetchedProduct?.productimages || []);
      } else {
        setImages(product?.productimages || []);
      }
    } catch (error) {
      console.error(`Error in getProduct: ${error}`);
    }
  };

  useEffect(() => {
    getProduct();
  }, [path]);

  return (
    <>
      {!loading ? (
        <section className="productDetailSec">
          <div className="container mx-auto">
            <figure className="imgCont">
              <ImagesSlider
                spaceBetween={0}
                slidesPerView={1}
                images={images}
                prodName={product?.model || "Product"}
              />
            </figure>
            <div className="content">
              <h1>
                {product?.accessories_title ? (
                  <>{product.accessories_title}</>
                ) : (
                  <>
                    {product?.brand}{" "}
                    {product?.model?.replace(
                      new RegExp(`^${product?.brand}\\s*`, "i"),
                      ""
                    )}
                  </>
                )}
              </h1>
              <div className="priceCont">
                <h4 className="price">PKR {product?.price || "N/A"}</h4>
                <h4
                  className={`${
                    product?.sell_status === "In Stock" ? "green" : ""
                  }`}
                >
                  {product?.sell_status || "Unknown"}
                </h4>
              </div>
              <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  {product?.user?.city && product.user.city !== "null"
                    ? product.user.city
                    : product?.user?.area || "Not Available"}
                </span>
              </div>
              <div className="details">
                <div className="detailRow">
                  <span>RAM</span>
                  <span>{product?.ram}GB</span>
                </div>
                <div className="detailRow">
                  <span>Storage</span>
                  <span>
                    {product?.storage === 1 ? "1 TB" : `${product?.storage} GB`}
                  </span>
                </div>
                <div className="detailRow">
                  <span>Warranty</span>
                  <span>{product?.warranty}</span>
                </div>
                <div className="detailRow">
                  <span>Product Condition</span>
                  <span>{product?.product_type}</span>
                </div>
                <div className="detailRow">
                  <span>PTA Status</span>
                  <span>{product?.pta_status}</span>
                </div>
                <div className="detailRow">
                  <span>Posted By</span>
                  <span>{product?.user?.name}</span>
                </div>
                <div className="detailRow">
                  <span>Date</span>
                  <span className="time">{formatDate(product.created_at)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default ProductDetailLayout;
