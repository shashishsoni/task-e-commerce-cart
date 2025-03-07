'use client';

import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import type { Product } from '../../types/product';
import { addToCart } from '../../store/features/cartslices';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToCart(product));
    };

    return (
        <div className="group bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {product.stock < 5 && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                            Low Stock
                        </span>
                    </div>
                )}
            </div>
            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {product.name}
                        </h3>
                        <span className="text-2xl font-bold text-white">${product.price}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {product.category}
                        </span>
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            {product.stock} in stock
                        </span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2 min-h-[40px]">
                    {product.description}
                </p>
                <div className="pt-4">
                    <button
                        onClick={handleAddToCart}
                        disabled={product.stock === 0}
                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2
                            ${product.stock === 0 
                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-lg hover:shadow-blue-500/25'
                            }`}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                            />
                        </svg>
                        <span>
                            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;