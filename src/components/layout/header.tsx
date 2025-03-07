'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/features/cartslices';
import type { RootState } from '../../store';

const Header = () => {
    const dispatch = useDispatch();
    const { items, total } = useSelector((state: RootState) => state.cart);
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);

    return (
        <header className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Tech Store
                        </div>
                    </div>
                    <nav className="flex items-center gap-6">
                        <button
                            onClick={() => dispatch(toggleCart())}
                            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg transition-all duration-200 group relative"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <div>
                                <span className="font-medium">Cart ({itemCount})</span>
                                {itemCount > 0 && (
                                    <span className="ml-2 text-sm text-gray-300">
                                        ${total.toFixed(2)}
                                    </span>
                                )}
                            </div>
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
