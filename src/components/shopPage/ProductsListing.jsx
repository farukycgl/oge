import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Link } from 'lucide-react';

const ProductsListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const maxRows = 3; // En fazla 3 satır

  const products = [
    {
      id: 1,
      image: "https://picsum.photos/id/237/400/500",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
    },
    // 11 more identical products to make 12 total
    ...[...Array(11)].map((_, index) => ({
      id: index + 2,
      image: "https://picsum.photos/seed/picsum/400/500",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
    }))
  ];

  // Pagination hesaplamaları
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col mx-auto pt-15 pl-10 pr-10 ">
      <div className="flex flex-col space-y-6">
        {/* Product Cards */}
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {currentItems.map((product) => (
            <div key={product.id} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.department}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <span className="text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="text-blue-600 font-medium">{product.salePrice}</span>
                </div>
                <div className="flex space-x-2 mt-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded text-sm disabled:opacity-50"
          >
            First
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1 border rounded disabled:opacity-50"
          >
            <ChevronLeft size={16} />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded text-sm ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1 border rounded disabled:opacity-50"
          >
            <ChevronRight size={16} />
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
