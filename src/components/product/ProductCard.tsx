import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={
              product.images && 
              product.images.length > 0 && 
              product.images[0] ? 
              product.images[0] : 
              "https://images.unsplash.com/photo-1561148070-b9dced4bda8b?w=400&h=400&fit=crop"
            }
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Discount Tag */}
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              {product.discount} OFF
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          {/* Brand */}
          <h3 className="font-semibold text-gray-600 mb-1">{product.brand}</h3>
          
          {/* Title */}
          <p className="text-gray-800 text-sm mb-1 truncate">{product.title}</p>
          
          {/* Price and Original Price */}
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-semibold">₹{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-gray-500 text-sm line-through">₹{product.originalPrice}</span>
                <span className="text-red-500 text-sm">{product.discount}</span>
              </>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center">
            <div className="bg-green-500 text-white text-xs px-1 py-0.5 rounded flex items-center">
              <span>{product.rating}</span>
              <FaStar size={8} className="ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
