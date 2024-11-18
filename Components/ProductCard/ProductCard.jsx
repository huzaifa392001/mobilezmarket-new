import React from "react";
import "./ProductCard.scss";
import Image from "next/image";
import { formatDate, numberWithCommas } from "@/Utils/Utils";
import { fetchFromApi } from "@/Utils/api";
import { useDispatch } from "react-redux";
import { SET_REQUESTED_PRODUCT } from "@/Redux/Slices/Search";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchProduct = async (id, slug) => {
    await fetchFromApi(`/details/${id}/${slug}`).then((res) => {
      dispatch(SET_REQUESTED_PRODUCT(res.details));
      router.push(`/product/${id}/${slug}`);
    });
  };
  return (
    <Link
      href={{
        pathname: `/product/${product?.id}/${product?.slug}`,
      }}
      className="productCard"
    >
      <figure className="productImg">
        <Image
          src={product?.image?.thumbnail_url}
          width={200}
          height={100}
          alt={`${product.model}'s image`}
        />
      </figure>
      <div className="content">
        {product?.accessories_title ? (
          <h3>{product?.accessories_title}</h3>
        ) : (
          <h3>
            {product?.brand ? product?.brand : "Not Available"}{" "}
            {product?.model
              ? (() => {
                  // Split brand and model by space to get the first word and convert to lowercase
                  const brandFirstWord = product?.brand
                    .split(" ")[0]
                    .toLowerCase();
                  const modelWords = product?.model.split(" ");
                  const modelFirstWord = modelWords[0].toLowerCase();

                  // Check if the first word of the brand and model are the same
                  if (brandFirstWord === modelFirstWord) {
                    // Return the model without the first word
                    return modelWords.slice(1).join(" ") || "Not Available";
                  } else {
                    return product?.model;
                  }
                })()
              : "Not Available"}{" "}
          </h3>
        )}
        <h5>{numberWithCommas(product?.price)} PKR</h5>
        {product?.ram || product?.storage ? (
          <div className="specs">
            <span>{product?.ram} GB </span>
            <span>
              {product?.storage === 1 ? "1 TB" : `${product?.storage} GB`}
            </span>
            <span>{product?.pta_status}</span>
          </div>
        ) : (
          <span>{product?.accessories_category}</span>
        )}
        <span className="time">{formatDate(product.created_at)}</span>
        <span className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>
            {product?.user?.city && product?.user?.city !== "null"
              ? product?.user?.city
              : product?.user?.area || "Not Available"}
          </span>
        </span>
      </div>
    </Link>
  );
}

export default React.memo(ProductCard);
