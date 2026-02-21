import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-2 inline-block px-4 py-2 bg-black text-white rounded"
      >
        View
      </Link>
    </div>
  );
};

export default ProductCard;