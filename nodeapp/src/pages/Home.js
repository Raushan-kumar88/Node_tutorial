import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data";
import axios from "axios";
const Home = () => {
  const [product, setProduct] = useState(products);

  const getProduct = async() => {
    const res = await axios.get("http://localhost:8080/products");
    // console.log(res);
    if (res.data) {
      setProduct(res.data);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log("data current data", product);
  return (
    <>
      <div className="items-center w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {product.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </div>
    </>
  );
};

export default Home;
