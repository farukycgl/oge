import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';
// Update this path to match your project structure

const ProductsListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const dispatch = useDispatch();
  
  // Get products and loading state from Redux store
  const { productList, fetchState, total } = useSelector(state => state.product);
  
  useEffect(() => {
    // Fetch products when component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  // Pagination calculations
  const totalPages = Math.ceil((productList?.length || 0) / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Show loading state
  if (fetchState === 'loading') {
    return <div className="flex justify-center items-center h-64">Loading products...</div>;
  }

  // Show error state
  if (fetchState === 'error') {
    return <div className="flex justify-center items-center h-64">Error loading products. Please try again later.</div>;
  }

  return (
    <div className="flex flex-col mx-auto pt-15 pl-10 pr-10 ">
      <div className="flex flex-col space-y-6">
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {currentItems.map((product) => (
            <Link key={product.id} to={`/shop/product/${product.id}`}>
              <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative aspect-[3/4]">
                  <img
                    src={product.images && product.images.length > 0 ? product.images[0].url : "https://picsum.photos/seed/picsum/400/500"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col items-center text-center">
                  <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.description?.substring(0, 30) || "Product"}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
                    <span className="text-blue-600 font-medium">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    {/* Since API doesn't provide colors, we'll use default colors */}
                    {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
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
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;