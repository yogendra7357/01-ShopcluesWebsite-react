import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Statistic from "../../components/Statistic";
import ProductCard from "../../components/ProductCard";
import Products from "../Products";
import Categories from "../../components/Categories";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mt-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font font-serif text-orange-700">
          POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
      <div className="flex w-full  justify-center items-center ">
        <Products />
      </div>

      <Statistic />
    </>
  );
};

export default Home;
