"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // If no images provided, return a placeholder
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-96 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No image available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      {/* Main Image */}
      <div className="relative w-full h-[500px] bg-gray-100">
        <Image
          src={images[currentImageIndex] || "/images/placeholder.jpg"}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          fill
          className="object-contain"
        />
        
        {/* Navigation Arrows - Only show if there are multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition-all"
              aria-label="Previous image"
            >
              <FaChevronLeft size={18} />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition-all"
              aria-label="Next image"
            >
              <FaChevronRight size={18} />
            </button>
          </>
        )}
      </div>
      
      {/* Thumbnails - Only show if there are multiple images */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative h-16 w-16 cursor-pointer border-2 rounded ${
                index === currentImageIndex ? "border-pink-500" : "border-transparent"
              }`}
            >
              <Image
                src={image || "/images/placeholder.jpg"}
                alt={`${title} - Thumbnail ${index + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
