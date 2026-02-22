import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 pt-10 pb-4">
      <div className=" rounded-3xl overflow-hidden shadow-xl mx-8">
        {/* ================= TOP NEWSLETTER SECTION ================= */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-10 text-white relative flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
            </h2>
            <p className="mb-6 text-sm opacity-90">
              Sign up for free! Join the community.
            </p>

            <div className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 rounded-md text-black w-64 outline-none"
              />
              <button className="bg-[#232321] text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                SUBMIT
              </button>
            </div>
          </div>

          <div>
            <img src="/images/Logo2.png" alt="" className="h-25 w-auto" />
          </div>
        </div>

        {/* ================= DARK FOOTER SECTION ================= */}
        <div className="bg-gray-900 text-white p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* About */}
            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">About us</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
                <li>Golf</li>
                <li>Hiking</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">Follow us</h3>
              <div className="flex space-x-4 text-gray-300 text-lg">
                <FaFacebookF className="cursor-pointer hover:text-white" />
                <FaInstagram className="cursor-pointer hover:text-white" />
                <FaTwitter className="cursor-pointer hover:text-white" />
                <FaTiktok className="cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <img src="/images/Logo (1).png" alt="" className="h-60 w-auto" />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-gray-500 py-4 bg-gray-100">
          © {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
