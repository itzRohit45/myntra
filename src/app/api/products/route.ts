import { products } from "@/data/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  // Parse query parameters
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const color = searchParams.get("color");
  const size = searchParams.get("size");
  const sort = searchParams.get("sort");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");
  const search = searchParams.get("search");
  
  // Filter products based on query parameters
  let filteredProducts = [...products];
  
  if (category) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  if (brand) {
    filteredProducts = filteredProducts.filter(
      product => product.brand.toLowerCase() === brand.toLowerCase()
    );
  }
  
  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      product => product.price >= parseInt(minPrice)
    );
  }
  
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      product => product.price <= parseInt(maxPrice)
    );
  }
  
  if (color) {
    filteredProducts = filteredProducts.filter(product => 
      product.colors.some(c => c.toLowerCase() === color.toLowerCase())
    );
  }
  
  if (size) {
    filteredProducts = filteredProducts.filter(product => 
      product.sizes.some(s => s.toLowerCase() === size.toLowerCase())
    );
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(searchLower) ||
      product.brand.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      (product.description && product.description.toLowerCase().includes(searchLower)) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchLower)))
    );
  }
  
  // Sort products
  if (sort) {
    switch (sort) {
      case "price_low_to_high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_high_to_low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filteredProducts.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case "discount":
        filteredProducts.sort((a, b) => {
          const discountA = parseInt(a.discount);
          const discountB = parseInt(b.discount);
          return discountB - discountA;
        });
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
  }
  
  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
  return NextResponse.json({
    products: paginatedProducts,
    total: filteredProducts.length,
    page,
    totalPages: Math.ceil(filteredProducts.length / limit)
  });
}
