import React, { useState } from 'react';
import { Grid, List } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';
import { useParams } from 'react-router-dom';

const ProductFilter = () => {
    const [view, setView] = useState('grid');
    const [sortValue, setSortValue] = useState('');
    const [filterText, setFilterText] = useState('');
    const dispatch = useDispatch();
    const { categoryId } = useParams();

    const handleFilterSubmit = () => {
        const filterParams = {
            ...(categoryId && { category: categoryId }),
            ...(sortValue && { sort: sortValue }),
            ...(filterText && { filter: filterText })
        };
        
        dispatch(fetchProducts(filterParams));
    };

    return (
        <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-between pt-15 pl-10 pr-10 gap-5">
            <div className="text-gray-600">Showing all results</div>

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
                <select 
                    className="border rounded px-4 py-2 bg-white text-gray-600"
                    value={sortValue}
                    onChange={(e) => setSortValue(e.target.value)}
                >
                    <option value="">Popularity</option>
                    <option value="price:asc">Price: Low to High</option>
                    <option value="price:desc">Price: High to Low</option>
                    <option value="rating:asc">Rating: Low to High</option>
                    <option value="rating:desc">Rating: High to Low</option>
                </select>

                {/* Arama input'u */}
                <input
                    type="text"
                    placeholder="Search products..."
                    className="border rounded px-4 py-2"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />

                {/* Filter Button */}
                <button 
                    className="bg-blue-500 text-white rounded px-6 py-2"
                    onClick={handleFilterSubmit}
                >
                    Filter
                </button>
            </div>
        </div>
    );
};

export default ProductFilter;
