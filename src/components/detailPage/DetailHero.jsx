import React from 'react';
import { useSelector } from 'react-redux';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useHistory } from 'react-router-dom';

const DetailHero = () => {
  const history = useHistory();
  const { selectedProduct } = useSelector(state => state.product);

  if (!selectedProduct) return null;

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center bg-white">
      <div className="container mx-auto px-4 md:px-15">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sol taraf - Ürün Görseli */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[400px] md:h-[500px] mb-4">
              <img
                src={selectedProduct.images[0].url}
                alt={selectedProduct.name}
                className="w-full h-full object-contain bg-gray-50 rounded-lg"
              />
            </div>
            {/* Küçük resimler */}
            <div className="flex gap-4 justify-start">
              {selectedProduct.images.map((image, index) => (
                <div key={index} className="w-[70px] h-[70px] border rounded-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt={`${selectedProduct.name} ${index + 1}`}
                    className="w-full h-full object-contain bg-gray-50"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sağ taraf - Ürün Detayları */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:justify-center">
            <h1 className="text-2xl font-normal text-gray-800">{selectedProduct.name}</h1>
            
            {/* Yıldızlar ve değerlendirme */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">10 Reviews</span>
            </div>

            {/* Fiyat */}
            <div className="text-2xl font-bold text-gray-800">
              ${selectedProduct.price.toFixed(2)}
            </div>

            {/* Stok durumu */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Availability :</span>
              <span className="text-blue-500">In Stock</span>
            </div>

            {/* Açıklama */}
            <div className="border-t border-b py-4 my-2">
              <p className="text-gray-600 text-sm leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* Renk seçenekleri */}
            <div className="flex gap-3">
              {['#23A6F0', '#2DC071', '#E77C40', '#252B42'].map((color, index) => (
                <div
                  key={index}
                  className="w-[30px] h-[30px] rounded-full cursor-pointer border-2 border-transparent hover:border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Butonlar */}
            <div className="flex items-center gap-3 mt-4">
              <button className="h-11 px-5 bg-[#23A6F0] text-white text-sm font-bold rounded-md hover:bg-blue-600 transition-colors">
                Select Options
              </button>
              <button className="h-11 w-11 flex items-center justify-center border rounded-md hover:bg-gray-50">
                <Heart className="w-5 h-5" />
              </button>
              <button className="h-11 w-11 flex items-center justify-center border rounded-md hover:bg-gray-50">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="h-11 w-11 flex items-center justify-center border rounded-md hover:bg-gray-50">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
