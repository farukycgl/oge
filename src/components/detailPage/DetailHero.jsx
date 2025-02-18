import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from 'lucide-react';

const DetailHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/details/single-product-1-cover-2.jpg',
    '/images/details/carouselCaptions.png',
    '/images/details/single-product-1-cover-2.jpg'
  ];

  const colors = ['bg-blue-400', 'bg-green-400', 'bg-orange-400', 'bg-navy-800'];

  return (
    <div className="max-w-4xl mx-auto bg-white p-4">
      <div className="md:flex md:gap-6">
        
        {/* Left Side: Main Image Carousel + Thumbnails */}
        <div className="md:w-1/2">
          <div className="relative mb-4">
            <img
              src={images[currentImageIndex]}
              alt="Product"
              className="w-full rounded-lg"
            />
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
              onClick={() => setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
              onClick={() => setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-2 mb-4 justify-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer ${currentImageIndex === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="md:w-1/2">
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-xl font-semibold">Floating Phone</h1>
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                <span className="text-yellow-400">☆</span>
                <span className="text-gray-600 ml-2 text-sm">10 Reviews</span>
              </div>
            </div>

            <div className="text-2xl font-bold text-gray-900">$1,139.33</div>

            <div className="flex items-center gap-2">
              <span className="text-gray-600">Availability :</span>
              <span className="text-blue-500">In Stock</span>
            </div>

            <p className="text-gray-600">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>

            <div className="flex gap-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full ${color}`}
                  aria-label={`Color option ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 pt-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg flex-grow">
                Select Options
              </button>
              <button className="p-2 border rounded-lg">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-2 border rounded-lg">
                <ShoppingCart className="w-6 h-6" />
              </button>
              <button className="p-2 border rounded-lg">
                <Eye className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
