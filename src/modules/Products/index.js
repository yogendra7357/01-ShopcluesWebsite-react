import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col text-center w-full justify-center item-center">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mt-4 ">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-700 font-serif mt-4 ">ALL PRODUCTS</h1>

        {products.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8">
            <ProductCard products={products} />
          </div>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </>
  );
};

export default Products;
