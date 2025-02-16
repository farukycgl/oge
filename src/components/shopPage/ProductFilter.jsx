import React, { useState } from 'react';
import { Grid, List } from 'lucide-react';

const ProductFilter = () => {
    const [view, setView] = useState('grid');

    return (
        <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-between pt-15 pl-10 pr-10 gap-5">

            <div className="text-gray-600">Showing all 12 results</div>

            {/* cardların sıralanma görünümü için */}
            <div className="flex space-x-2 flex-row items-center gap-3">
                <p>Views:</p>
                <button
                    onClick={() => setView('grid')}
                    className={`p-2 rounded ${view === 'grid' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                    <Grid />
                </button>
                <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded ${view === 'list' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                    <List />
                </button>
            </div>

            <div className='flex flex-row justify-between gap-3'>

                {/* Sıralama için açılır menü */}
                <select className="border rounded px-4 py-2 bg-white text-gray-600">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>New Arrivals</option>
                </select>

                {/* Filter Button */}
                <button className="bg-blue-500 text-white rounded px-6 py-2">Filter</button>
            </div>
        </div>
    );
};

export default ProductFilter;
