"use client";

import ImageGallery from "@/components/product/ImageGallery";
import ProductCard from "@/components/product/ProductCard";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { FaMinus, FaPlus, FaShoppingBag, FaStar } from "react-icons/fa";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const router = useRouter();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSimilarProducts = useCallback(async (category: string) => {
    try {
      const response = await fetch(`/api/products?category=${category}&limit=4`);
      const data = await response.json();
      // Filter out the current product from similar products
      setSimilarProducts(
        data.products.filter((p: Product) => p.id !== productId).slice(0, 4)
      );
    } catch (error) {
      console.error("Error fetching similar products:", error);
    }
  }, [productId]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
        
        // Reset selected size and color when product changes
        setSelectedSize(undefined);
        setSelectedColor(undefined);
        setQuantity(1);
        
        // Fetch similar products
        fetchSimilarProducts(data.category);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId, fetchSimilarProducts]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // Validate size selection
    if (product.sizes.length > 0 && !selectedSize) {
      alert("Please select a size");
      return;
    }
    
    // Validate color selection
    if (product.colors.length > 0 && !selectedColor) {
      alert("Please select a color");
      return;
    }
    
    addToCart(product, quantity, selectedSize, selectedColor);
    
    // Navigate to cart
    router.push("/cart");
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <button 
            onClick={() => router.push("/products")}
            className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="w-full lg:w-1/2">
          <ImageGallery images={product.images} title={product.title} />
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{product.brand}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{product.title}</h2>
            
            {/* Ratings */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-500 text-white px-2 py-1 rounded-sm flex items-center text-sm">
                <span>{product.rating}</span>
                <FaStar size={12} className="ml-1" />
              </div>
              <span className="text-gray-500 text-sm">Based on customer reviews</span>
            </div>
            
            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-semibold">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="text-red-500">{product.discount} OFF</span>
                </>
              )}
            </div>
            
            <div className="text-green-600 font-medium mb-6">
              inclusive of all taxes
            </div>
          </div>

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">SELECT SIZE</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`h-10 w-10 rounded-full flex items-center justify-center border ${
                      selectedSize === size
                        ? "border-pink-500 bg-pink-50 text-pink-500"
                        : "border-gray-300 text-gray-800"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">SELECT COLOR</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`h-8 w-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-pink-500"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    title={color.charAt(0).toUpperCase() + color.slice(1)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">QUANTITY</h3>
            <div className="flex items-center border border-gray-300 w-min rounded">
              <button
                className="px-3 py-1 text-gray-600"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <FaMinus size={12} />
              </button>
              <span className="px-4 py-1 border-l border-r border-gray-300 min-w-[40px] text-center">
                {quantity}
              </span>
              <button
                className="px-3 py-1 text-gray-600"
                onClick={() => setQuantity(quantity + 1)}
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mb-6">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-pink-500 text-white rounded-md flex items-center justify-center gap-2 hover:bg-pink-600 transition-colors"
            >
              <FaShoppingBag />
              <span>ADD TO BAG</span>
            </button>
          </div>

          {/* Product Description */}
          {product.description && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">PRODUCT DETAILS</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
