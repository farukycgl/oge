import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';

// Pagination fonksiyonu
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 5) {
      // 5 veya daha az sayfa varsa hepsini göster
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Her zaman ilk sayfayı göster
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Aktif sayfanın etrafındaki sayfaları göster
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Her zaman son sayfayı göster
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-1 mt-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
      >
        First
      </button>
      
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : null}
          disabled={page === '...'}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : page === '...'
              ? 'text-gray-500'
              : 'text-gray-500 hover:bg-gray-50 border'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

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
            <Link 
              key={product.id} 
              to={`/shop/product/${product.id}`}
              className="transform hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
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

        {/* Pagination bileşenini kullan */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductsListing;