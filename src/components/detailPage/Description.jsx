import React, { useState } from 'react';

const Description = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews (0)' },
  ];

  return (
    <div className="py-10 max-w-[1200px] mx-auto px-4">
      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 text-lg font-medium transition-colors
              ${activeTab === tab.id 
                ? 'border-b-2 border-black text-black' 
                : 'text-gray-500 hover:text-black'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'description' && (
          <div>
            {/* Image and Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Container */}
              <div className="bg-[#F9F9F9] p-8 relative">
                <div className="relative h-[300px]">
                  <div className="absolute right-0 top-0 z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-2xl">💡</span>
                    </div>
                  </div>
                  <img 
                    src="/room-design.jpg" 
                    alt="Modern Room Design" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <p className="text-gray-600">
                  Met minim Mollie non desert Alamo est sit cliquer dolor do met sent. RELIT official
                  consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-gray-600">
                  Met minim Mollie non desert Alamo est sit cliquer dolor do met sent. RELIT official
                  consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-gray-600">
                  Met minim Mollie non desert Alamo est sit cliquer dolor do met sent. RELIT official
                  consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'additional' && (
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2">›</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2">›</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2">›</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2">›</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2">›</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2">›</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;