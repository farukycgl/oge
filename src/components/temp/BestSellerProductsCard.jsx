import React from 'react';
import { Star } from 'lucide-react';
import data from "../../data";



const BestSellerProductsCard = () => {


  return (
    <section className="px-4 py-6 pt-15 md:pl-10">
      <div className='flex flex-col items-center text-center'>
        <h2 className="text-xl text-center mb-2 text-[#737373]">Featured Products</h2>
        <h1 className="text-lg text-center mb-4">BESTSELLER PRODUCTS</h1>
        <p className="text-center mb-6 text-gray-500">Problems trying to resolve the conflict between</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {data.map((product) => (
          <div key={product.id} className="bg-white shadow-md overflow-hidden flex flex-col">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
            <div className="p-4 flex flex-col items-center">
              <h4 className="text-md font-semibold">{product.title}</h4>
              <p className="text-sm text-gray-500">{product.department}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="line-through text-gray-400">{product.oldPrice}</span>
                <span className="text-green-600 font-bold">{product.newPrice}</span>
              </div>
              <div className="flex gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-4 h-4 rounded-full"
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellerProductsCard;
