import React, { useState } from "react";

const AdidasProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("navy");
  
  const sizes = [38, 39, 40, 41, 42, 43, 44, 45];
  
  const colors = [
    { id: "navy", class: "bg-blue-900", label: "Shadow Navy" },
    { id: "green", class: "bg-green-800", label: "Army Green" }
  ];

  const relatedProducts = [
    { id: 1, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/images/logo.png" },
    { id: 2, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/api/placeholder/300/300" },
    { id: 3, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/api/placeholder/300/300", note: "Spelling variation included as per original" },
    { id: 4, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/api/placeholder/300/300" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Left Column - Image */}
        <div className="md:w-1/2">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/600/600"
              alt="Adidas 4DFWD X Parley Running Shoes"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="md:w-1/2 space-y-6">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900">
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </h1>

          {/* Price */}
          <p className="text-2xl font-semibold text-gray-900">
            $125.00
          </p>

          {/* Color Selection */}
          <div className="space-y-3">
            <span className="text-sm font-medium text-gray-700">COLOR</span>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-10 h-10 rounded-full ${color.class} ${
                    selectedColor === color.id 
                      ? "ring-2 ring-offset-2 ring-gray-900" 
                      : ""
                  }`}
                  aria-label={color.label}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <span className="text-sm font-medium text-gray-700">SIZE</span>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center text-sm font-medium rounded-md transition-colors
                    ${
                      selectedSize === size
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-gray-900"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors">
              ADD TO CART
            </button>
            <button className="flex-1 border border-gray-900 text-gray-900 py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors">
              BUY IT NOW
            </button>
          </div>

          {/* About the Product */}
          <div className="pt-6 space-y-4 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">ABOUT THE PRODUCT</h2>
            
            <p className="text-sm text-gray-600">
              Shadow Navy / Army Green
            </p>
            
            <p className="text-sm text-gray-600">
              This product is excluded from all promotional discounts and offers:
            </p>

            {/* Features List */}
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
              <li>
                Pay over time in interest-free installments with Affirm, Klarna or Afterpay.
              </li>
              <li>
                Join adClub to get unlimited free standard shipping, returns & exchanges.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You may also like</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">VIEW PRODUCT</span>
                <span className="text-sm font-semibold text-gray-900">{product.price}</span>
              </div>
              {product.note && (
                <p className="text-xs text-gray-400 mt-1 italic">{product.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 pt-4 text-xs text-gray-400 border-t border-gray-200">
        <p>Free shipping on orders $50+ • Free returns • Member exclusive</p>
      </div>
    </div>
  );
};

export default AdidasProductPage;