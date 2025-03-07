'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setProducts, setSearchQuery, setSelectedCategory } from '../../store/features/productSlice';
import ProductCard from './productcard';
import Cart from '../cart/cart';

const Products = () => {
    const dispatch = useDispatch();
    const { products, filteredProducts, selectedCategory, searchQuery, loading, error } = useSelector((state: RootState) => state.product);

    useEffect(() => {
        if (filteredProducts.length === 0) {
            dispatch(setProducts(products));
        }
    }, [dispatch, products, filteredProducts.length]);

    const categories = [...new Set(products.map(product => product.category))];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleCategoryChange = (category: string | null) => {
        dispatch(setSelectedCategory(category));
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Tech Store
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg px-4 mb-8">
                    Discover our curated collection of premium tech products designed to enhance your digital lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                        <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => handleCategoryChange(null)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                                ${!selectedCategory
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            All
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                                    ${selectedCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-[2000px] mx-auto px-6 pb-20">
                {(filteredProducts.length > 0 || searchQuery || selectedCategory) ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {(filteredProducts.length > 0 ? filteredProducts : products).map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">No products found.</p>
                    </div>
                )}
            </div>
            <Cart />
        </>
    );
}

export default Products; 