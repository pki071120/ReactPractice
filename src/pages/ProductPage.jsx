import React from "react";
import Product from "./../components/Product";

const ProductPage = () => {
  const data = [
    {
      id: 1,
      name: "안심 스테이크",
      price: 16030,
      url: "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/fc3eb710-126d-4c18-b776-ac6809b07a73.jpeg",
      alt: "안심 스테이크 사진",
    },
    {
      id: 2,
      name: "사과",
      price: 19900,
      url: "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/59526651-9c34-4a39-9cd0-e30669a9ec4f.jpg",
      alt: "사과 사진",
    },
    {
      id: 3,
      name: "국탕찌개",
      price: 5000,
      url: "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/cb45c971-b61a-48f2-a521-01d88b793f7e.jpg",
      alt: "국,탕,찌개 사진",
    },
  ];

  return (
    <div>
      {data.map((d) => (
        <Product
          key={d.id}
          name={d.name}
          price={d.price}
          url={d.url}
          alt={d.alt}
        />
      ))}
    </div>
  );
};

export default ProductPage;
