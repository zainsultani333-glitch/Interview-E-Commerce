import React from "react";
import { Star } from "lucide-react";

const DoItRightPage = () => {
  const newDrops = [
    { id: 1, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$200", image: "/api/placeholder/400/400" },
    { id: 2, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$150", image: "/api/placeholder/400/400" },
    { id: 3, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$100", image: "/api/placeholder/400/400" }
  ];

  const categories = [
    { 
      id: 1, 
      name: "LIFESTYLE SHOES", 
      price: "$50", 
      description: "Good Quality high-wear/comfort shoes for daily use.",
      image: "/api/placeholder/400/300"
    },
    { 
      id: 2, 
      name: "BASKETBALL SHOES", 
      price: "$30", 
      description: "Good Quality high-wear/comfort shoes for basketball.",
      image: "/api/placeholder/400/300"
    }
  ];

  const reviews = [
    { id: 1, title: "Good Quality", text: "High-quality running shoes with good cushioning and support.", price: "$120", rating: 5 },
    { id: 2, title: "Good Quality", text: "Good quality running shoes with a comfortable fit.", price: "$130", rating: 5 },
    { id: 3, title: "Good Quality", text: "Good quality running shoes with excellent cushioning and support.", price: "$140", rating: 5 }
  ];

  const StarRating = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - DO IT RIGHT */}
      <div className="relative h-[60vh] bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-wider">
            DO IT RIGHT
          </h1>
          <div className="w-24 h-1 bg-white mb-8" />
          <p className="text-xl text-white/90 max-w-2xl">
            Premium athletic footwear for champions
          </p>
        </div>
      </div>

      {/* Nike Air Max Feature */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">New Arrival</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">NIKE AIR MAX</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-lg">
                Nike introducing the new air max for everyday comfort
              </p>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="flex-1">
              <div className="bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center">
                <span className="text-gray-500">Nike Air Max Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Drops Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">DON'T MISS OUT NEW DROPS</h2>
        <div className="w-20 h-1 bg-gray-900 mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newDrops.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-3">Price: {product.price}</p>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.name}</p>
              <button className="text-gray-900 font-medium hover:underline">
                Shop Now →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">CATEGORIES</h2>
          <div className="w-20 h-1 bg-gray-900 mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-3">Price: {category.price}</p>
                  <p className="text-gray-500 mb-4">{category.description}</p>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">REVIEWS</h2>
        <div className="w-20 h-1 bg-gray-900 mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{review.title}</h3>
              <p className="text-gray-600 mb-3">{review.text}</p>
              <p className="text-gray-900 font-semibold mb-3">{review.price}</p>
              <StarRating />
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to find your perfect fit?</h3>
          <p className="text-gray-300 mb-6">Join our newsletter for exclusive drops and offers</p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoItRightPage;