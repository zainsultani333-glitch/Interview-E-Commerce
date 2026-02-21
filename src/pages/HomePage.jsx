import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../features/products/components/ProductCard";
import products from "../features/products/data/mockProducts";

const HomePage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome to MyStore</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;