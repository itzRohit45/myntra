"use client";

import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const categories = [
  { name: "Men", path: "/products?category=Men" },
  { name: "Women", path: "/products?category=Women" },
  { name: "Kids", path: "/products?category=Kids" },
  { name: "Sale", path: "/products?category=sale" },
];

const navLinks = [
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const { getCartItemsCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-pink-500">MYNTRA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.path}
                className="font-medium text-gray-600 hover:text-pink-500 transition-colors"
              >
                {category.name}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="font-medium text-gray-600 hover:text-pink-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Search, Wishlist, Profile, Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </form>

            <Link href="/wishlist" className="text-gray-600 hover:text-pink-500">
              <FaHeart size={24} />
            </Link>

            <Link href="/profile" className="text-gray-600 hover:text-pink-500">
              <FaUser size={24} />
            </Link>

            <Link href="/cart" className="text-gray-600 hover:text-pink-500 relative">
              <FaShoppingBag size={24} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </form>

          <div className="flex justify-between mb-4">
            <Link 
              href="/wishlist" 
              className="flex flex-col items-center text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaHeart size={24} />
              <span className="text-sm mt-1">Wishlist</span>
            </Link>

            <Link 
              href="/profile" 
              className="flex flex-col items-center text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaUser size={24} />
              <span className="text-sm mt-1">Profile</span>
            </Link>

            <Link 
              href="/cart" 
              className="flex flex-col items-center text-gray-600 relative"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaShoppingBag size={24} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 right-0 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
              <span className="text-sm mt-1">Cart</span>
            </Link>
          </div>

          <div className="space-y-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.path}
                className="block font-medium text-gray-600 hover:text-pink-500 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block font-medium text-gray-600 hover:text-pink-500 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
