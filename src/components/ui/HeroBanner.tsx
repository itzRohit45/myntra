"use client";

import { Banner } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface HeroBannerProps {
  banners: Banner[];
}

const HeroBanner = ({ banners }: HeroBannerProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent(current === banners.length - 1 ? 0 : current + 1);
  }, [current, banners.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? banners.length - 1 : current - 1);
  };

  // Auto-scroll the banner every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [current, nextSlide]);

  if (!banners || banners.length === 0) {
    return null;
  }

  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden">
      {/* Banner Images */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link href={banner.link}>
            <div className="relative h-full w-full">
              <Image
                src={banner.image || "/images/placeholder-banner.jpg"}
                alt={banner.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{banner.title}</h2>
              </div>
            </div>
          </Link>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10"
        onClick={prevSlide}
      >
        <FaChevronLeft size={16} />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10"
        onClick={nextSlide}
      >
        <FaChevronRight size={16} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
