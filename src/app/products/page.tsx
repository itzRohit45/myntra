"use client";

import Filters from "@/components/product/Filters";
import ProductCard from "@/components/product/ProductCard";
import Pagination from "@/components/ui/Pagination";
import { FilterOptions, Product } from "@/types";
import { Suspense, useEffect, useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

// Create a component that uses searchParams
function ProductsContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    categories: [],
    brands: [],
    sizes: [],
    colors: [],
    minPrice: 0,
    maxPrice: 10000
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        
        // Get all search params
        searchParams.forEach((value, key) => {
          params.append(key, value);
        });
        
        // Ensure page param exists
        if (!params.has("page")) {
          params.append("page", "1");
        }
        
        setCurrentPage(parseInt(params.get("page") || "1"));
        
        const response = await fetch(`/api/products?${params.toString()}`);
        const data = await response.json();
        
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchFilterOptions = async () => {
      try {
        // In a real application, this would come from an API call
        // Here we're simulating by using the categories/brands/etc. from our products data
        const response = await fetch("/api/products");
        const data = await response.json();
        const allProducts = data.products;
        
        const categories = [...new Set(allProducts.map((p: Product) => p.category))] as string[];
        const brands = [...new Set(allProducts.map((p: Product) => p.brand))] as string[];
        const sizes = [...new Set(allProducts.flatMap((p: Product) => p.sizes))] as string[];
        const colors = [...new Set(allProducts.flatMap((p: Product) => p.colors))] as string[];
        const prices = allProducts.map((p: Product) => p.price);
        
        setFilterOptions({
          categories,
          brands,
          sizes,
          colors,
          minPrice: Math.min(...prices),
          maxPrice: Math.max(...prices)
        });
      } catch (error) {
        console.error("Error fetching filter options:", error);
      }
    };

    fetchProducts();
    fetchFilterOptions();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      </div>
    );
  }

  // Extract the current category from search params
  const currentCategory = searchParams.get("category");
  const currentSearch = searchParams.get("search");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          {currentCategory 
            ? `${currentCategory}'s Products` 
            : currentSearch 
              ? `Search Results for "${currentSearch}"` 
              : "All Products"}
        </h1>
        <p className="text-gray-600 mt-2">
          {products.length} products found
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Button */}
        <button
          className="md:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? (
            <>
              <FaTimes className="mr-2" /> Hide Filters
            </>
          ) : (
            <>
              <FaFilter className="mr-2" /> Show Filters
            </>
          )}
        </button>

        {/* Filters Sidebar */}
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } md:block md:w-1/4 lg:w-1/5`}
        >
          <Filters filterOptions={filterOptions} />
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64">
              <p className="text-lg text-gray-600 mb-4">No products found.</p>
              <p className="text-sm text-gray-500">Try adjusting your filters or search query.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* Pagination */}
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Wrap with Suspense in the main component
export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8 flex justify-center items-center h-screen">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
