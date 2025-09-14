import HeroBanner from "@/components/ui/HeroBanner";
import ProductCard from "@/components/product/ProductCard";
import { homeBanners } from "@/data/banners";
import { products } from "@/data/products";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  // Get featured products (with reliable images)
  const featuredProducts = products
    .filter(product => 
      product.images && 
      product.images.length > 0 && 
      product.images[0] && 
      product.images[0].startsWith('https://images.unsplash.com/')
    )
    .slice(0, 8);

  // Get trending products (products with highest ratings)
  const trendingProducts = [...products]
    .filter(product => 
      product.images && 
      product.images.length > 0 && 
      product.images[0] && 
      product.images[0].startsWith('https://images.unsplash.com/')
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  // Get new arrivals (using the newest IDs)
  const newArrivals = [...products]
    .filter(product => 
      product.images && 
      product.images.length > 0 && 
      product.images[0] && 
      product.images[0].startsWith('https://images.unsplash.com/')
    )
    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
    .slice(0, 8);

  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner banners={homeBanners} />

      {/* Featured Products Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link 
              href="/products" 
              className="flex items-center text-pink-500 hover:text-pink-600"
            >
              <span className="mr-2">View All</span>
              <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/products?category=Men" 
              className="relative h-48 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=400&fit=crop&q=80")' }}
              />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <h3 className="text-xl font-semibold">Men</h3>
              </div>
            </Link>
            
            <Link 
              href="/products?category=Women" 
              className="relative h-48 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=400&fit=crop&q=80")' }}
              />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <h3 className="text-xl font-semibold">Women</h3>
              </div>
            </Link>
            
            <Link 
              href="/products?category=Kids" 
              className="relative h-48 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=600&h=400&fit=crop&q=80")' }}
              />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <h3 className="text-xl font-semibold">Kids</h3>
              </div>
            </Link>
            
            <Link 
              href="/products?category=sale" 
              className="relative h-48 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop&q=80")' }}
              />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <h3 className="text-xl font-semibold">Sale</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <Link 
              href="/products?sort=rating" 
              className="flex items-center text-pink-500 hover:text-pink-600"
            >
              <span className="mr-2">View All</span>
              <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <Link 
              href="/products?sort=newest" 
              className="flex items-center text-pink-500 hover:text-pink-600"
            >
              <span className="mr-2">View All</span>
              <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
            <p className="text-xl mb-6">Up to 70% off on selected items. Limited time offer!</p>
            <Link 
              href="/products?category=sale" 
              className="inline-block px-6 py-3 bg-white text-pink-500 font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
