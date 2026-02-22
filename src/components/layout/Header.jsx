import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../features/cart/useCart";
import { FaSearch, FaUser, FaAngleDown } from "react-icons/fa";

const Header = () => {
  const { state } = useCart();

  return (
    <header className="bg-white shadow-md rounded-b-3xl px-6 py-3 flex items-center justify-between mx-">
      {/* Left: Navigation */}
      <nav className="flex space-x-6 items-center">
        <Link to="/new-drops" className="font-medium hover:text-gray-700">
          New Drops
        </Link>

        {/* Man Dropdown */}
        <div className="relative group">
          <button className="flex items-center font-medium hover:text-gray-700 space-x-1">
            <span>Man</span>
            <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180" />
          </button>
          <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible z-10">
            <Link
              to="/man/shirts"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Shirts
            </Link>
            <Link to="/man/pants" className="block px-4 py-2 hover:bg-gray-100">
              Pants
            </Link>
            <Link to="/man/shoes" className="block px-4 py-2 hover:bg-gray-100">
              Shoes
            </Link>
          </div>
        </div>

        {/* Woman Dropdown */}
        <div className="relative group">
          <button className="flex items-center font-medium hover:text-gray-700 space-x-1">
            <span>Woman</span>
            <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180" />
          </button>
          <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible z-10">
            <Link
              to="/woman/dresses"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Dresses
            </Link>
            <Link
              to="/woman/tops"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Tops
            </Link>
            <Link
              to="/woman/shoes"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Shoes
            </Link>
          </div>
        </div>
      </nav>

      {/* Center: Logo */}
      <div className="flex justify-center items-center">
        <Link to="/">
          <img
            src="/images/Logo.png"
            alt="MyStore Logo"
            className="h-6 w-auto" // adjust height as needed
          />
        </Link>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-gray-900">
          <FaSearch size={20} />
        </button>
        <button className="text-gray-700 hover:text-gray-900">
          <FaUser size={20} />
        </button>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <div className="px-3 py-1 bg-orange-500 text-white rounded-full font-medium">
            {state.items.length}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
