import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'all';
    const [activeCategory, setActiveCategory] = useState(initialCategory);

    const categories = ['all', 'clothing', 'shoes', 'accessories'];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className= "min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto" >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12" >
            <div>
            <h1 className="text-4xl font-display font-bold mb-4 uppercase tracking-tighter" >
                Shop < span className = "text-primary italic" > Collections </span>
                    </h1>
                    < div className = "flex flex-wrap gap-4" >
                    {
                        categories.map((cat) => (
                            <button
                key= { cat }
                onClick = {() => setActiveCategory(cat)}
className = {`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat
        ? 'bg-primary text-white shadow-lg shadow-pink-200'
        : 'bg-white border border-pink-100 text-gray-500 hover:border-primary hover:text-primary'
    }`}
              >
    { cat }
    </button>
            ))}
</div>
    </div>

    < div className = "flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-pink-100 pb-2 cursor-pointer hover:text-primary transition-colors" >
        <SlidersHorizontal className="w-4 h-4" />
            Filter & Sort
            </div>
            </div>

            < div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" >
            {
                filteredProducts.map((product) => (
                    <ProductCard key= { product.id } product = { product } />
        ))
            }
                </div>

{
    filteredProducts.length === 0 && (
        <div className="text-center py-20" >
            <p className="text-gray-400 font-display" > No items found in this category: (</p>
                </div>
            )
}
</div>
  );
};

export default Shop;
