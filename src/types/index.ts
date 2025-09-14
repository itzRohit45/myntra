export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  description?: string;
  gender?: string;
  tags?: string[];
}

export type CartItem = Product & {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
};

export interface Category {
  id: string;
  name: string;
  subcategories?: string[];
}

export interface Banner {
  id: string;
  image: string;
  title: string;
  link: string;
}

export interface FilterOptions {
  categories: string[];
  brands: string[];
  sizes: string[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
}
