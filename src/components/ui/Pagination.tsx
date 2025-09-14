"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const PaginationContent = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    if (currentPage > 2) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
        >
          1
        </button>
      );
      
      // Add ellipsis if needed
      if (currentPage > 3) {
        pages.push(
          <span key="ellipsis1" className="px-2">
            ...
          </span>
        );
      }
    }
    
    // Show previous page if not first page
    if (currentPage > 1) {
      pages.push(
        <button
          key={currentPage - 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
        >
          {currentPage - 1}
        </button>
      );
    }
    
    // Current page
    pages.push(
      <button
        key={currentPage}
        className="px-3 py-1 rounded border border-pink-500 bg-pink-500 text-white"
        disabled
      >
        {currentPage}
      </button>
    );
    
    // Show next page if not last page
    if (currentPage < totalPages) {
      pages.push(
        <button
          key={currentPage + 1}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
        >
          {currentPage + 1}
        </button>
      );
    }
    
    // Add ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="ellipsis2" className="px-2">
          ...
        </span>
      );
    }
    
    // Always show last page if not already shown
    if (currentPage < totalPages - 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
        >
          {totalPages}
        </button>
      );
    }
    
    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {/* Previous Page Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded border ${
          currentPage === 1
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 hover:bg-gray-100"
        }`}
      >
        Prev
      </button>
      
      {/* Page Numbers */}
      {renderPageNumbers()}
      
      {/* Next Page Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded border ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 hover:bg-gray-100"
        }`}
      >
        Next
      </button>
    </div>
  );
};

// Wrapper component with Suspense
const Pagination = (props: PaginationProps) => {
  return (
    <Suspense fallback={<div>Loading pagination...</div>}>
      <PaginationContent {...props} />
    </Suspense>
  );
};

export default Pagination;
