"use client";
import React, { useEffect, useState } from "react";
import "./ProductDetailLayout.scss";
import { useDispatch, useSelector } from "react-redux";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import { usePathname } from "next/navigation";
import { fetchFromApi } from "@/Utils/api";
import { SET_LOADING, SET_REQUESTED_PRODUCT } from "@/Redux/Slices/Search";
import { formatDate } from "@/Utils/Utils";
import Image from "next/image";
import Link from "next/link";
import ProductsSlider from "../ProductsSlider/ProductsSlider";

function ProductDetailLayout() {
	const loading = useSelector((state) => state.search.loading);
	// const product = useSelector((state) => state.search.requestedProduct);
	const [product, setProduct] = useState();
	const [user, setUser] = useState()
	const [moreAds, setMoreAds] = useState()
	const [relatedAds, setRelatedAds] = useState()

	const path = usePathname();
	const dispatch = useDispatch();

	const [images, setImages] = useState([]);

	// Function to fetch the product details
	const searchProduct = async (id, slug) => {
		try {
			dispatch(SET_LOADING(true));
			const res = await fetchFromApi(`/details/${id}/${slug}`);
			setProduct(res.details);
			setUser(res.details.user)
			setMoreAds(res.more_ads)
			setRelatedAds(res.related_ads)
			console.clear();
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
		<section className="productDetailSec">
			<div className="container mx-auto">
				<figure className="imgCont">
					{product ? (
						<ImagesSlider
							loaded={loading}
							spaceBetween={0}
							slidesPerView={1}
							images={images}
							prodName={product?.model || "Product"}
						/>
					) : (
						<div className="imgSkeleton"></div>
					)}
				</figure>
				<div className="prodDetailContent">
					<div className="details">
						{product?.sell_status ? (
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
						) : (
							<h1 className="line"></h1>
						)}
						<div className="priceCont">
							{product?.price ? (
								<h4 className="price">PKR {product?.price || "N/A"}</h4>
							) : (
								<span className="line"></span>
							)}

							{product?.sell_status ? (
								<h4
									className={`${product?.sell_status === "In Stock" ? "green" : ""
										}`}
								>
									{product?.sell_status || "Unknown"}
								</h4>
							) : (
								<span className="line"></span>
							)}
						</div>
						<div className="location">
							{product?.user?.city && (
								<>
									<i className="fas fa-map-marker-alt"></i>
									<span>
										{product.user.city !== "null" ? product.user.city
											: product?.user?.area || "Not Available"}
									</span>
								</>
							)}
						</div>
						<div className="details">
							{product?.ram && (
								<div className="detailRow">
									{product?.ram?.trim() ? (
										<>
											<span>RAM</span>
											<span>{product?.ram}GB</span>
										</>
									) : (
										<span className="line"></span>
									)}
								</div>
							)}
							{product?.storage && (

								<div className="detailRow">
									{product?.storage ? (
										<>
											<span>Storage</span>
											<span>
												{product?.storage === 1
													? "1 TB"
													: `${product?.storage} GB`}
											</span>
										</>
									) : (
										<span className="line"></span>
									)}
								</div>
							)}
							{product?.warranty && (
								<div className="detailRow">
									{product?.warranty?.trim() ? (
										<>
											<span>Warranty</span>
											<span>{product?.warranty}</span>
										</>
									) : (
										<span className="line"></span>
									)}
								</div>
							)}
							{product?.product_type && (
								<div className="detailRow">
									{product?.product_type?.trim() ? (
										<>
											<span>Product Condition</span>
											<span>{product?.product_type}</span>
										</>
									) : (
										<span className="line"></span>
									)}
								</div>
							)}
							{product?.pta_status && (
								<div className="detailRow">
									{product?.pta_status.trim() ? (
										<>
											<span>PTA Status</span>
											<span>{product?.pta_status}</span>
										</>
									) : (
										<span className="line"></span>
									)}
								</div>
							)}

							<div className="detailRow">
								{product?.user ? (
									<>
										<span>Posted By</span>
										<span>{product?.user?.name}</span>
									</>
								) : (
									<span className="line"></span>
								)}
							</div>
							<div className="detailRow">
								{product?.created_at ? (
									<>
										<span>Date</span>
										<span className="time">
											{formatDate(product?.created_at)}
										</span>
									</>
								) : (
									<span className="line"></span>
								)}
							</div>
						</div>
						<div className="description">
							<h4>Description</h4>
							<p>{product?.description}</p>
						</div>
					</div>
					<div className="user">
						<h4>Seller Details</h4>
						<Link href={""} className="userCont">
							<figure className="imgCont">
								<Image src={user?.photo_url} width={50} height={50} alt="" />
							</figure>
							<div className="profile">
								<h3>{product?.user?.user_type === "business"
									? product?.user?.shop_name
									: product?.user?.name}</h3>
								<span>View Profile</span>
							</div>
							<i className="fas fa-chevron-right"></i>
						</Link>
					</div>
					<div className="products">
						<ProductsSlider sliderLoop sectionClass={'p-0'} heading={"Related Products"} data={relatedAds} slidesPerView={2} spaceBetween={10} />
					</div>
					<div className="products">
						<ProductsSlider sliderLoop sectionClass={'p-0'} heading={"More Products"} data={moreAds} slidesPerView={2} spaceBetween={10} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductDetailLayout;
