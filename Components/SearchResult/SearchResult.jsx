"use client";
import { SET_SEARCH_DATA } from "@/Redux/Slices/Search";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchResult() {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState();
  const query = useSelector((store) => store.search.query) || [];

  return (
    <section className="productSec">
      <div className="container">
        <h2 className="secHeading">{query || "Heading"}</h2>
        <div className="searchRow">
          {searchData ? (
            searchData?.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))
          ) : (
            <h1>Products Not Available</h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
