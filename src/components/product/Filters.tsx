"use client";

import { FilterOptions } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

interface FiltersProps {
  filterOptions: FilterOptions;
}

const Filters = ({ filterOptions }: FiltersProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // Parse search params
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category")
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    searchParams.get("brand")
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    searchParams.get("size")
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(
    searchParams.get("color")
  );
  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("minPrice") || filterOptions.minPrice.toString(),
    max: searchParams.get("maxPrice") || filterOptions.maxPrice.toString(),
  });

  // Apply filters
  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (selectedCategory) {
      params.set("category", selectedCategory);
    } else {
      params.delete("category");
    }
    
    if (selectedBrand) {
      params.set("brand", selectedBrand);
    } else {
      params.delete("brand");
    }
    
    if (selectedSize) {
      params.set("size", selectedSize);
    } else {
      params.delete("size");
    }
    
    if (selectedColor) {
      params.set("color", selectedColor);
    } else {
      params.delete("color");
    }
    
    if (priceRange.min && priceRange.min !== filterOptions.minPrice.toString()) {
      params.set("minPrice", priceRange.min);
    } else {
      params.delete("minPrice");
    }
    
    if (priceRange.max && priceRange.max !== filterOptions.maxPrice.toString()) {
      params.set("maxPrice", priceRange.max);
    } else {
      params.delete("maxPrice");
    }
    
    // Reset to page 1 when filters change
    params.set("page", "1");
    
    router.push(`${pathname}?${params.toString()}`);
    
    // Close filter sidebar on mobile after applying
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSelectedSize(null);
    setSelectedColor(null);
    setPriceRange({
      min: filterOptions.minPrice.toString(),
      max: filterOptions.maxPrice.toString(),
    });
    
    router.push(pathname);
    
    // Close filter sidebar on mobile after resetting
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Check if any filters are applied
  const hasActiveFilters = () => {
    return (
      selectedCategory !== null ||
      selectedBrand !== null ||
      selectedSize !== null ||
      selectedColor !== null ||
      priceRange.min !== filterOptions.minPrice.toString() ||
      priceRange.max !== filterOptions.maxPrice.toString()
    );
  };

  return (
    <div className="relative">
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-md mb-4"
      >
        <FaFilter />
        <span>Filters</span>
      </button>

      {/* Filter Overlay for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Filter Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 fixed md:sticky top-0 left-0 h-full md:h-auto z-50 md:z-auto w-3/4 md:w-full bg-white md:bg-transparent overflow-y-auto p-4 md:p-0`}
      >
        <div className="md:hidden flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="font-semibold">Filters</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <div className="space-y-2">
              {filterOptions.categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="radio"
                    id={`category-${category}`}
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="mr-2"
                  />
                  <label htmlFor={`category-${category}`} className="text-sm">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-semibold mb-2">Brands</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {filterOptions.brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <input
                    type="radio"
                    id={`brand-${brand}`}
                    name="brand"
                    checked={selectedBrand === brand}
                    onChange={() => setSelectedBrand(brand)}
                    className="mr-2"
                  />
                  <label htmlFor={`brand-${brand}`} className="text-sm">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-2">Price Range</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
                className="w-full p-2 border rounded text-sm"
              />
              <span>to</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="font-semibold mb-2">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                  className={`px-3 py-1 text-sm border rounded-md ${
                    selectedSize === size
                      ? "border-pink-500 bg-pink-50 text-pink-500"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="font-semibold mb-2">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                  className={`h-8 w-8 rounded-full border-2 ${
                    selectedColor === color ? "border-pink-500" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  title={color.charAt(0).toUpperCase() + color.slice(1)}
                />
              ))}
            </div>
          </div>

          {/* Filter Actions */}
          <div className="flex space-x-4 pt-4 border-t">
            <button
              onClick={applyFilters}
              className="px-4 py-2 bg-pink-500 text-white rounded-md text-sm"
            >
              Apply Filters
            </button>
            
            {hasActiveFilters() && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
