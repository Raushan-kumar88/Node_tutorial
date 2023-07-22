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

  const deleteProduct = async(id) => {
    const res = await axios.delete(`http://localhost:8080/products/${id}`);
    console.log(res.data);
    if(res.data._id){
      setProduct(product.filter(p=>p._id!==res.data._id));
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
          <ProductCard key={index} {...data} deleteProduct={deleteProduct} />
        ))}
      </div>
    </>
  );
};

export default Home;
