import React, { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

const ShoppingCartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState("");

  const relatedProducts = [
    { id: 1, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/api/placeholder/200/200" },
    { id: 2, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/api/placeholder/200/200" },
    { id: 3, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES (NEW)", price: "$125", image: "/api/placeholder/200/200" },
    { id: 4, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/api/placeholder/200/200" }
  ];

  const handleQuantityChange = (increment) => {
    setQuantity(prev => Math.max(1, prev + increment));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sale Banner */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold">Saving to celebrate</h2>
            <p className="text-sm text-gray-300">
              Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="text-sm hover:underline">Join us</button>
            <span className="text-gray-500">|</span>
            <button className="text-sm hover:underline">Sign-In</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Bag</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:w-2/3">
            {/* Warning Message */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                Items in your bag not reserved - check out now to make them yours.
              </p>
            </div>

            {/* Cart Item */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Product Image */}
                <div className="sm:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/128/128"
                    alt="DROPSET TRAINER SHOES"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">DROPSET TRAINER SHOES</h3>
                      <p className="text-sm text-gray-600 mt-1">Men's Road Running Shoes</p>
                      <p className="text-sm text-gray-600">Enamel Blue/ University White</p>
                      
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Size 10</span>
                        </p>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-gray-700">Quantity:</span>
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => handleQuantityChange(-1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                              disabled={quantity <= 1}
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price and Remove */}
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between mt-4 sm:mt-0">
                      <span className="font-semibold text-gray-900">$130.00</span>
                      <button className="text-gray-400 hover:text-red-500 transition-colors ml-4 sm:ml-0 sm:mt-2">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* You May Also Like - Mobile/Tablet view (appears here on smaller screens) */}
            <div className="mt-8 lg:hidden">
              <h2 className="text-xl font-bold text-gray-900 mb-4">You may also like</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="bg-gray-100 rounded-lg overflow-hidden mb-2 aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xs font-medium text-gray-900 line-clamp-2 mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">VIEW PRODUCT</span>
                      <span className="text-xs font-semibold text-gray-900">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">1 ITEM</span>
                  <span className="text-gray-900">$130.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery</span>
                  <span className="text-gray-900">$6.99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sales Tax</span>
                  <span className="text-gray-900">-</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">$136.99</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors mb-4">
                CHECKOUT
              </button>

              {/* Promo Code */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Use a promo code</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                  <button className="px-4 py-2 border border-gray-900 text-gray-900 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Secure checkout · PayPal · Credit Card · Apple Pay
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like - Desktop view (hidden on mobile/tablet) */}
        <div className="hidden lg:block mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">You may also like</h2>
          <div className="grid grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-2 aspect-square">
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
                  <span className="text-xs text-gray-600">VIEW PRODUCT</span>
                  <span className="text-xs font-semibold text-gray-900">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-xs text-gray-500 border-t border-gray-200 pt-4">
          <p>Free shipping on orders $50+ · Free returns · 60-day trial</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage; 