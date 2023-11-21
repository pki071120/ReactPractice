import React from "react";

const Product = ({ url, alt, name, price }) => {
  return (
    <div>
      <img src={url} alt={alt} />
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default Product;
