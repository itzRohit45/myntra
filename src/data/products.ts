import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    title: "Men's Casual Slim Fit Shirt",
    brand: "Roadster",
    price: 899,
    originalPrice: 1299,
    discount: "30%",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1593757147298-e064ed1419e5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "blue", "black"],
    category: "Men",
    gender: "Men",
    tags: ["casual", "shirts", "slim fit"],
    description: "A comfortable slim-fit casual shirt perfect for daily wear."
  },
  {
    id: "2",
    title: "Women's Floral Print Dress",
    brand: "Sassafras",
    price: 1199,
    originalPrice: 1999,
    discount: "40%",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=400&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["pink", "blue", "white"],
    category: "Women",
    gender: "Women",
    tags: ["dresses", "floral", "casual"],
    description: "A beautiful floral print dress for a stylish casual look."
  },
  {
    id: "3",
    title: "Kids' Cartoon Print T-Shirt",
    brand: "YK",
    price: 499,
    originalPrice: 699,
    discount: "28%",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1624572498399-15517a0aac52?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["yellow", "white", "blue"],
    category: "Kids",
    gender: "Kids",
    tags: ["tshirts", "cartoon", "casual"],
    description: "Fun cartoon print t-shirt for kids made with soft cotton."
  },
  {
    id: "4",
    title: "Men's Running Shoes",
    brand: "HRX",
    price: 1599,
    originalPrice: 2499,
    discount: "36%",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop"
    ],
    sizes: ["UK7", "UK8", "UK9", "UK10"],
    colors: ["black", "grey", "white"],
    category: "Men",
    gender: "Men",
    tags: ["shoes", "running", "sports"],
    description: "Lightweight and durable running shoes with excellent cushioning."
  },
  {
    id: "5",
    title: "Women's Handbag",
    brand: "Lavie",
    price: 1299,
    originalPrice: 1999,
    discount: "35%",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1751522917613-68281b131e45?w=400&h=400&fit=crop",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=400&h=400&fit=crop"
    ],
    sizes: ["Regular"],
    colors: ["brown", "black", "tan"],
    category: "Women",
    gender: "Women",
    tags: ["accessories", "bags", "handbags"],
    description: "Stylish and spacious handbag with multiple compartments."
  },
  {
    id: "6",
    title: "Men's Slim Fit Jeans",
    brand: "Levis",
    price: 1899,
    originalPrice: 2499,
    discount: "24%",
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop"
    ],
    sizes: ["30", "32", "34", "36"],
    colors: ["blue", "black", "grey"],
    category: "Men",
    gender: "Men",
    tags: ["jeans", "slim fit", "casual"],
    description: "Classic slim fit jeans with comfortable stretch fabric."
  },
  {
    id: "7",
    title: "Women's Printed Kurta",
    brand: "Anouk",
    price: 799,
    originalPrice: 1299,
    discount: "38%",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue", "yellow", "pink"],
    category: "Women",
    gender: "Women",
    tags: ["kurta", "ethnic", "casual"],
    description: "Beautifully printed kurta made with breathable cotton fabric."
  },
  {
    id: "8",
    title: "Kids' Denim Dungaree",
    brand: "H&M",
    price: 1499,
    originalPrice: 1999,
    discount: "25%",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["blue", "black"],
    category: "Kids",
    gender: "Kids",
    tags: ["dungaree", "denim", "casual"],
    description: "Adorable denim dungaree for kids with adjustable straps."
  },
  {
    id: "9",
    title: "Men's Formal Shirt",
    brand: "Louis Philippe",
    price: 1799,
    originalPrice: 2299,
    discount: "22%",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?w=400&h=400&fit=crops"
    ],
    sizes: ["38", "40", "42", "44"],
    colors: ["white", "blue", "light blue"],
    category: "Men",
    gender: "Men",
    tags: ["formal", "shirts", "office wear"],
    description: "Premium formal shirt perfect for office and formal occasions."
  },
  {
    id: "10",
    title: "Women's Running Shoes",
    brand: "Nike",
    price: 4299,
    originalPrice: 5499,
    discount: "22%",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&h=400&fit=crop"
    ],
    sizes: ["UK4", "UK5", "UK6", "UK7"],
    colors: ["pink", "grey", "black"],
    category: "Women",
    gender: "Women",
    tags: ["shoes", "running", "sports"],
    description: "Premium running shoes with enhanced cushioning and support."
  },
  {
    id: "11",
    title: "Men's Polo T-Shirt",
    brand: "US Polo Assn",
    price: 1299,
    originalPrice: 1799,
    discount: "28%",
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["navy", "red", "white", "black"],
    category: "Men",
    gender: "Men",
    tags: ["tshirt", "polo", "casual"],
    description: "Classic polo t-shirt with embroidered logo and premium cotton."
  },
  {
    id: "12",
    title: "Women's Palazzo Pants",
    brand: "Libas",
    price: 899,
    originalPrice: 1399,
    discount: "36%",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1582142306909-195724d0a735?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509551781383-8c19138fcb9a?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "navy", "maroon"],
    category: "Women",
    gender: "Women",
    tags: ["pants", "palazzo", "casual"],
    description: "Comfortable and stylish palazzo pants for a chic look."
  },
  {
    id: "13",
    title: "Kids' Winter Jacket",
    brand: "GAP",
    price: 1999,
    originalPrice: 2999,
    discount: "33%",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["red", "blue", "yellow"],
    category: "Kids",
    gender: "Kids",
    tags: ["winter", "jacket", "outdoor"],
    description: "Warm and comfortable winter jacket for kids with soft lining."
  },
  {
    id: "14",
    title: "Men's Hooded Sweatshirt",
    brand: "H&M",
    price: 1499,
    originalPrice: 1999,
    discount: "25%",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["grey", "black", "navy"],
    category: "Men",
    gender: "Men",
    tags: ["hoodie", "casual", "winter"],
    description: "Comfortable hoodie with kangaroo pocket and soft inner lining."
  },
  {
    id: "15",
    title: "Women's Crop Top",
    brand: "Forever 21",
    price: 699,
    originalPrice: 999,
    discount: "30%",
    rating: 4.1,
    images: [
      "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=400&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["white", "black", "pink"],
    category: "Women",
    gender: "Women",
    tags: ["top", "crop", "casual"],
    description: "Trendy crop top perfect for casual outings and parties."
  },
  {
    id: "16",
    title: "Kids' Casual Shorts",
    brand: "Max",
    price: 499,
    originalPrice: 699,
    discount: "29%",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519403709944-ae9d8f869df4?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["blue", "green", "red"],
    category: "Kids",
    gender: "Kids",
    tags: ["shorts", "casual", "summer"],
    description: "Comfortable cotton shorts for kids with elastic waistband."
  },
  {
    id: "17",
    title: "Men's Sports Shorts",
    brand: "Puma",
    price: 899,
    originalPrice: 1299,
    discount: "31%",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584555613483-3b207548399c?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "grey", "navy"],
    category: "Men",
    gender: "Men",
    tags: ["shorts", "sports", "gym"],
    description: "Quick-dry sports shorts perfect for gym and outdoor activities."
  },
  {
    id: "18",
    title: "Women's Denim Jacket",
    brand: "Levis",
    price: 2199,
    originalPrice: 2999,
    discount: "27%",
    rating: 4.6,
    images: [
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1751522917613-68281b131e45?w=400&h=400&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["blue", "black"],
    category: "Women",
    gender: "Women",
    tags: ["jacket", "denim", "casual"],
    description: "Classic denim jacket with button closure and multiple pockets."
  },
  {
    id: "19",
    title: "Kids' Party Dress",
    brand: "Allen Solly Junior",
    price: 1699,
    originalPrice: 2499,
    discount: "32%",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1522251253478-4cae05139523?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541580621-39f717ce77cd?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["pink", "purple", "white"],
    category: "Kids",
    gender: "Kids",
    tags: ["dress", "party", "formal"],
    description: "Beautiful party dress for kids with delicate embroidery."
  },
  {
    id: "20",
    title: "Men's Printed Boxers",
    brand: "Jockey",
    price: 499,
    originalPrice: 699,
    discount: "29%",
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1635241161466-541f065683ba?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue", "grey", "black"],
    category: "Men",
    gender: "Men",
    tags: ["innerwear", "boxers", "comfort"],
    description: "Comfortable cotton boxers with fun prints and elastic waistband."
  },
  {
    id: "21",
    title: "Women's Activewear Set",
    brand: "Nike",
    price: 2999,
    originalPrice: 3999,
    discount: "25%",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574279606130-09958dc756f7?w=400&h=400&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["black", "grey", "pink"],
    category: "Women",
    gender: "Women",
    tags: ["activewear", "gym", "sports"],
    description: "High-performance activewear set for intense workout sessions."
  },
  {
    id: "22",
    title: "Kids' School Backpack",
    brand: "American Tourister",
    price: 1299,
    originalPrice: 1699,
    discount: "23%",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1565622871630-8e818247b001?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=400&fit=crop"
    ],
    sizes: ["Regular"],
    colors: ["blue", "red", "black"],
    category: "Kids",
    gender: "Kids",
    tags: ["backpack", "school", "accessories"],
    description: "Durable and spacious school backpack with multiple compartments."
  },
  {
    id: "23",
    title: "Men's Leather Wallet",
    brand: "Hidesign",
    price: 1299,
    originalPrice: 1799,
    discount: "28%",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1517254797898-04edd251bcd1?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop"
    ],
    sizes: ["Regular"],
    colors: ["brown", "black", "tan"],
    category: "Men",
    gender: "Men",
    tags: ["accessories", "wallet", "leather"],
    description: "Premium leather wallet with multiple card slots and cash compartment."
  },
  {
    id: "24",
    title: "Women's Maxi Dress",
    brand: "ONLY",
    price: 1599,
    originalPrice: 2299,
    discount: "30%",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=400&h=400&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["blue", "black", "maroon"],
    category: "Women",
    gender: "Women",
    tags: ["dress", "maxi", "casual"],
    description: "Elegant maxi dress perfect for casual outings and semi-formal events."
  },
  {
    id: "25",
    title: "Kids' Rain Boots",
    brand: "Crocs",
    price: 1299,
    originalPrice: 1699,
    discount: "23%",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1551450725-66503cd422be?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1630358925370-9b709942fc0b?w=400&h=400&fit=crop"
    ],
    sizes: ["UK5", "UK6", "UK7", "UK8"],
    colors: ["yellow", "blue", "pink"],
    category: "Kids",
    gender: "Kids",
    tags: ["footwear", "boots", "rain"],
    description: "Waterproof rain boots for kids with fun designs and comfortable fit."
  },
  {
    id: "26",
    title: "Men's Formal Trousers",
    brand: "Arrow",
    price: 1599,
    originalPrice: 1999,
    discount: "20%",
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552902301-9663d2b41fd8?w=400&h=400&fit=crop"
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["black", "navy", "grey"],
    category: "Men",
    gender: "Men",
    tags: ["formal", "trousers", "office"],
    description: "Premium formal trousers perfect for office and formal occasions."
  },
  {
    id: "27",
    title: "Women's Printed Scarf",
    brand: "FabIndia",
    price: 699,
    originalPrice: 999,
    discount: "30%",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1601370552761-3c236bc9f5ee?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1609803384069-19f3e4a20c0d?w=400&h=400&fit=crop"
    ],
    sizes: ["Regular"],
    colors: ["blue", "red", "green"],
    category: "Women",
    gender: "Women",
    tags: ["accessories", "scarf", "ethnic"],
    description: "Beautiful printed scarf made with soft and breathable fabric."
  },
  {
    id: "28",
    title: "Kids' Casual Shoes",
    brand: "Puma",
    price: 1499,
    originalPrice: 1999,
    discount: "25%",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503146234394-631200675614?w=400&h=400&fit=crop"
    ],
    sizes: ["UK5", "UK6", "UK7", "UK8"],
    colors: ["white", "black", "blue"],
    category: "Kids",
    gender: "Kids",
    tags: ["shoes", "casual", "sneakers"],
    description: "Comfortable and durable casual shoes for kids with velcro closure."
  },
  {
    id: "29",
    title: "Men's Analog Watch",
    brand: "Fossil",
    price: 5999,
    originalPrice: 7999,
    discount: "25%",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop"
    ],
    sizes: ["Regular"],
    colors: ["silver", "gold", "black"],
    category: "Men",
    gender: "Men",
    tags: ["accessories", "watch", "formal"],
    description: "Premium analog watch with stainless steel strap and water resistance."
  },
  {
    id: "30",
    title: "Women's Workout Leggings",
    brand: "Under Armour",
    price: 1699,
    originalPrice: 2299,
    discount: "26%",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["black", "grey", "navy"],
    category: "Women",
    gender: "Women",
    tags: ["activewear", "leggings", "gym"],
    description: "High-performance workout leggings with four-way stretch fabric."
  },
  {
    id: "31",
    title: "Kids' Winter Cap",
    brand: "GAP",
    price: 599,
    originalPrice: 799,
    discount: "25%",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1602412549128-2a65092c0837?w=400&h=400&fit=crop"
    ],
    sizes: ["2-4Y", "4-6Y"],
    colors: ["red", "blue", "grey"],
    category: "Kids",
    gender: "Kids",
    tags: ["accessories", "cap", "winter"],
    description: "Warm winter cap for kids with soft inner lining and cute design."
  },
  {
    id: "32",
    title: "Men's Track Pants",
    brand: "Adidas",
    price: 1499,
    originalPrice: 1999,
    discount: "25%",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542340916-951bb72c8f74?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "navy", "grey"],
    category: "Men",
    gender: "Men",
    tags: ["trackpants", "sports", "casual"],
    description: "Comfortable track pants with side pockets and elastic waistband."
  },
  {
    id: "33",
    title: "Women's Sunglasses",
    brand: "Ray-Ban",
    price: 3999,
    originalPrice: 4999,
    discount: "20%",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop"
    ],
    sizes: ["Regular"],
    colors: ["black", "brown", "gold"],
    category: "Women",
    gender: "Women",
    tags: ["accessories", "sunglasses", "eyewear"],
    description: "Premium sunglasses with UV protection and stylish design."
  },
  {
    id: "34",
    title: "Kids' Pajama Set",
    brand: "H&M",
    price: 799,
    originalPrice: 1099,
    discount: "27%",
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1590480598135-3be153d24593?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["blue", "pink", "yellow"],
    category: "Kids",
    gender: "Kids",
    tags: ["nightwear", "pajama", "sleep"],
    description: "Soft and comfortable pajama set for kids with fun prints."
  },
  {
    id: "35",
    title: "Men's Casual Shoes",
    brand: "Nike",
    price: 2999,
    originalPrice: 3999,
    discount: "25%",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop"
    ],
    sizes: ["UK7", "UK8", "UK9", "UK10"],
    colors: ["white", "black", "grey"],
    category: "Men",
    gender: "Men",
    tags: ["shoes", "casual", "sneakers"],
    description: "Stylish and comfortable casual shoes perfect for everyday wear."
  },
  {
    id: "36",
    title: "Women's Designer Saree",
    brand: "Sabyasachi",
    price: 5999,
    originalPrice: 7999,
    discount: "25%",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1610030469668-3c0c673599c9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1602564909520-76cb4a1756e4?w=400&h=400&fit=crop"
    ],
    sizes: ["Free Size"],
    colors: ["red", "blue", "green"],
    category: "Women",
    gender: "Women",
    tags: ["ethnic", "saree", "formal"],
    description: "Beautiful designer saree with intricate embroidery and premium fabric."
  },
  {
    id: "37",
    title: "Kids' Swim Shorts",
    brand: "Speedo",
    price: 699,
    originalPrice: 999,
    discount: "30%",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1596662977585-541015e68176?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564641449906-bfe3f7805b21?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["blue", "red", "yellow"],
    category: "Kids",
    gender: "Kids",
    tags: ["swimwear", "shorts", "summer"],
    description: "Quick-dry swim shorts for kids with comfortable fit and fun prints."
  },
  {
    id: "38",
    title: "Men's Reversible Belt",
    brand: "Tommy Hilfiger",
    price: 1599,
    originalPrice: 1999,
    discount: "20%",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1624222247344-158258830be7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1553381006-e9b74016027d?w=400&h=400&fit=crop"
    ],
    sizes: ["32", "34", "36", "38"],
    colors: ["black/brown"],
    category: "Men",
    gender: "Men",
    tags: ["accessories", "belt", "formal"],
    description: "Premium reversible leather belt with classic buckle design."
  },
  {
    id: "39",
    title: "Women's Ankle Boots",
    brand: "Clarks",
    price: 3499,
    originalPrice: 4999,
    discount: "30%",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop"
    ],
    sizes: ["UK4", "UK5", "UK6", "UK7"],
    colors: ["black", "brown", "tan"],
    category: "Women",
    gender: "Women",
    tags: ["footwear", "boots", "formal"],
    description: "Stylish ankle boots with comfortable heel and premium leather."
  },
  {
    id: "40",
    title: "Kids' Denim Shorts",
    brand: "Gap",
    price: 799,
    originalPrice: 1099,
    discount: "27%",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1613104532153-2728af762a51?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["blue", "black"],
    category: "Kids",
    gender: "Kids",
    tags: ["shorts", "denim", "casual"],
    description: "Comfortable denim shorts for kids with adjustable waistband."
  },
  {
    id: "41",
    title: "Men's Leather Jacket",
    brand: "Jack & Jones",
    price: 3999,
    originalPrice: 5999,
    discount: "33%",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "brown"],
    category: "Men",
    gender: "Men",
    tags: ["jacket", "leather", "winter"],
    description: "Premium leather jacket with quilted lining and zippered pockets."
  },
  {
    id: "42",
    title: "Women's Striped Top",
    brand: "Vero Moda",
    price: 799,
    originalPrice: 1299,
    discount: "38%",
    rating: 4.1,
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?w=400&h=400&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["white/blue", "white/black", "white/red"],
    category: "Women",
    gender: "Women",
    tags: ["top", "striped", "casual"],
    description: "Classic striped top with comfortable fit and breathable fabric."
  },
  {
    id: "43",
    title: "Kids' Denim Jacket",
    brand: "Gini & Jony",
    price: 1299,
    originalPrice: 1799,
    discount: "28%",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544923503-68e1e3dbb0fd?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["blue", "black"],
    category: "Kids",
    gender: "Kids",
    tags: ["jacket", "denim", "casual"],
    description: "Stylish denim jacket for kids with button closure and chest pockets."
  },
  {
    id: "44",
    title: "Men's Knitted Sweater",
    brand: "GAP",
    price: 1799,
    originalPrice: 2499,
    discount: "28%",
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1609644124044-f9c3c2188bbe?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512723185835-0700e5069a9a?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["navy", "grey", "maroon"],
    category: "Men",
    gender: "Men",
    tags: ["sweater", "winter", "casual"],
    description: "Warm knitted sweater with ribbed hem and cuffs for a perfect fit."
  },
  {
    id: "45",
    title: "Women's Formal Pants",
    brand: "Van Heusen",
    price: 1699,
    originalPrice: 2199,
    discount: "23%",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop"
    ],
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["black", "navy", "beige"],
    category: "Women",
    gender: "Women",
    tags: ["formal", "pants", "office"],
    description: "Classic formal pants for women with comfortable stretch fabric."
  },
  {
    id: "46",
    title: "Kids' Sweater",
    brand: "H&M",
    price: 899,
    originalPrice: 1299,
    discount: "31%",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1617403127624-13cbb33a0205?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1614548539924-5c1f205b3747?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["red", "blue", "grey"],
    category: "Kids",
    gender: "Kids",
    tags: ["sweater", "winter", "casual"],
    description: "Warm and comfortable sweater for kids with fun knitted patterns."
  },
  {
    id: "47",
    title: "Men's Casual Blazer",
    brand: "Marks & Spencer",
    price: 4999,
    originalPrice: 6999,
    discount: "29%",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1611012711879-9a93e0722e8f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593032464846-2a5e5d0b45d2?w=400&h=400&fit=crop"
    ],
    sizes: ["38", "40", "42", "44"],
    colors: ["navy", "black", "grey"],
    category: "Men",
    gender: "Men",
    tags: ["blazer", "casual", "formal"],
    description: "Stylish casual blazer perfect for semi-formal occasions."
  },
  {
    id: "48",
    title: "Women's Sling Bag",
    brand: "Baggit",
    price: 1299,
    originalPrice: 1799,
    discount: "28%",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop"
    ],
    sizes: ["Regular"],
    colors: ["black", "brown", "red"],
    category: "Women",
    gender: "Women",
    tags: ["accessories", "bag", "casual"],
    description: "Compact sling bag with adjustable strap and multiple compartments."
  },
  {
    id: "49",
    title: "Kids' Track Suit",
    brand: "Adidas",
    price: 1999,
    originalPrice: 2699,
    discount: "26%",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1596647536757-3fafe5fb8a83?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop"
    ],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["blue", "black", "red"],
    category: "Kids",
    gender: "Kids",
    tags: ["tracksuit", "sports", "casual"],
    description: "Comfortable track suit for kids with jacket and pants set."
  },
  {
    id: "50",
    title: "Men's Winter Gloves",
    brand: "Nike",
    price: 699,
    originalPrice: 999,
    discount: "30%",
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1520903820249-3e3ff35309f5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1613427587025-42d10f2b6177?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: ["black", "grey", "navy"],
    category: "Men",
    gender: "Men",
    tags: ["accessories", "gloves", "winter"],
    description: "Warm winter gloves with touchscreen compatibility and secure grip."
  }
];

