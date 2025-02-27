import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';

const ProductsListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  
  // Get products and loading state from Redux store
  const { productList, fetchState, total } = useSelector(state => state.product);
  
  useEffect(() => {
    // Fetch products when component mounts or categoryId changes
    dispatch(fetchProducts({ category: categoryId }));
  }, [dispatch, categoryId]);

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
    <div className="flex flex-col mx-auto pt-15 pl-10 pr-10">
      <div className="flex flex-col space-y-6">
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentItems.map((product) => (
            <Link key={product.id} to={`/shop/product/${product.id}`}>
              <div className="flex flex-col bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[3/4]">
                  <img
                    src={product.images[0].url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-gray-500 text-sm mb-1">English Department</div>
                  <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description?.substring(0, 30) || "Product"}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">${(product.price * 1.2).toFixed(2)}</span>
                      <span className="text-blue-600 font-medium">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-1">
                      {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded text-sm disabled:opacity-50"
          >
            Previous
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