import React from 'react';

const ProductCollection = () => {
  const collections = [
    {
      id: 1,
      image: "/images/shop/collection.png",
      backgroundColor: "bg-gray-700",
      style: "formal"
    },
    {
      id: 2,
      image: "/images/shop/collection2.png",
      backgroundColor: "bg-cyan-500",
      style: "casual"
    },
    {
      id: 3,
      image: "/images/shop/collection3.png",
      backgroundColor: "bg-pink-300",
      style: "wardrobe"
    },
    {
      id: 4,
      image: "/images/shop/collection4.png",
      backgroundColor: "bg-pink-300",
      style: "friends"
    },
    {
      id: 5,
      image: "/images/shop/collection5.png",
      backgroundColor: "bg-pink-400",
      style: "colorful"
    }
  ];

  return (
    <div className="flex flex-col w-full px-4 py-6 pl-10 pr-10 bg-[#FAFAFA]">
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
            <h1 className='font-bold'>Shop</h1>
        </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-15 pb-10">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
          >
            <div className={`absolute inset-0 ${collection.backgroundColor} opacity-10`} />
            <img
              src={collection.image}
              alt={`Clothing collection ${collection.style}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold tracking-wider">CLOTHS</h2>
              <p className="mt-2 text-lg">5 Items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCollection;