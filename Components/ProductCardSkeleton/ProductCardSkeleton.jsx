import React from "react";
import "./ProductCardSkeleton.scss";

function ProductCardSkeleton() {
  return (
    <div className="productCardSkeleton">
      <div className="imgCont" />
      <div className="content">
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
