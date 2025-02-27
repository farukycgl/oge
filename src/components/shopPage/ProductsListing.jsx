import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';

const ProductsListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 24; // Sayfa başına ürün sayısı
  const dispatch = useDispatch();
  
  // URL'den parametreleri al
  const { gender, categoryName, categoryId } = useParams();
  
  const { productList, fetchState, total } = useSelector(state => state.product);
  
  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    const params = {
      limit,
      offset,
      ...(categoryId && { category: categoryId })
    };
    
    dispatch(fetchProducts(params));
  }, [dispatch, categoryId, currentPage, limit]);

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Sayfa değiştiğinde en üste kaydır
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Yumuşak geçiş için
    });
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
      {/* Kategori başlığını göster */}
      {categoryName && (
        <h2 className="text-2xl font-bold mb-6 capitalize">
          {gender} - {categoryName}
        </h2>
      )}
      
      <div className="flex flex-col space-y-6">
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productList.map((product) => (
            <Link key={product.id} to={`/shop/product/${product.id}`}>
              <div className="flex flex-col bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[3/4]">
                  <img
                    src={product.images[0].url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  <div className="text-gray-500 text-base mb-3">{product.description}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gray-400 text-lg line-through">${(product.price * 1.2).toFixed(2)}</span>
                    <span className="text-green-500 text-lg font-semibold">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-3">
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
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded ${
              currentPage === 1 ? 'text-gray-400' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            First
          </button>
          
          <button
            onClick={() => handlePageChange(1)}
            className={`px-4 py-2 border rounded ${
              currentPage === 1 ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            1
          </button>
          
          <button
            onClick={() => handlePageChange(2)}
            className={`px-4 py-2 border rounded ${
              currentPage === 2 ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            2
          </button>
          
          <button
            onClick={() => handlePageChange(3)}
            className={`px-4 py-2 border rounded ${
              currentPage === 3 ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            3
          </button>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded ${
              currentPage === totalPages ? 'text-gray-400' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;