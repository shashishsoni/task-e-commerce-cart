'use client';

import React, { FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { toggleCart, clearCart, type CartItem } from '../../store/features/cartslices';
import { setFormData, setFormError, setIsCheckingOut, resetCheckout } from '../../store/features/checkoutslice';
import { updateProductStock } from '../../store/features/productSlice';
import CartItemComponent from './cartitem';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state: RootState) => state.cart);
    const checkoutState = useSelector((state: RootState) => state.checkout);
    const { items, total, isOpen } = cartState;
    const { formData, formError, isCheckingOut } = checkoutState;

    const handleCheckout = () => {
        dispatch(setIsCheckingOut(true));
        dispatch(setFormError(''));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch(setFormData({ [name]: value }));
    };

    const handlePlaceOrder = (e: FormEvent) => {
        e.preventDefault();
        
        if (!formData.fullName || !formData.email || !formData.address) {
            dispatch(setFormError('Please fill in all fields'));
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            dispatch(setFormError('Please enter a valid email address'));
            return;
        }

        items.forEach((item: CartItem) => {
            dispatch(updateProductStock({ productId: item.id, quantity: item.quantity }));
        });

        alert('Order placed successfully!');
        dispatch(clearCart());
        dispatch(setIsCheckingOut(false));
        dispatch(toggleCart());
        dispatch(resetCheckout());
    };

    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                    isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                }`} 
                onClick={() => dispatch(toggleCart())}
            />

            {/* Cart Slider */}
            <div 
                className={`fixed top-0 right-0 h-full w-[480px] bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-800">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-white">
                                {isCheckingOut ? 'Checkout' : 'Your Cart'}
                            </h2>
                            <button
                                onClick={() => dispatch(toggleCart())}
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <p className="text-gray-400 text-lg">Your cart is empty</p>
                            </div>
                        ) : (
                            <>
                                {!isCheckingOut ? (
                                    <>
                                        <div className="space-y-6">
                                            {items.map((item: CartItem) => (
                                                <CartItemComponent key={item.id} item={item} />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="space-y-8">
                                        <div className="bg-gray-800 rounded-lg p-6">
                                            <h3 className="text-lg font-semibold mb-4 text-gray-300">Order Summary</h3>
                                            {items.map((item: CartItem) => (
                                                <div key={item.id} className="flex justify-between items-center py-2 text-gray-300">
                                                    <span>{item.name} (x{item.quantity})</span>
                                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            ))}
                                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                                                <span className="text-lg">Total</span>
                                                <span className="text-xl font-bold">${total.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <form onSubmit={handlePlaceOrder} className="space-y-6">
                                            {formError && (
                                                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
                                                    {formError}
                                                </div>
                                            )}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                                                <textarea
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                    rows={3}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <button
                                                    type="submit"
                                                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                                                >
                                                    Place Order
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => dispatch(setIsCheckingOut(false))}
                                                    className="w-full bg-gray-800 text-gray-300 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                                                >
                                                    Back to Cart
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && !isCheckingOut && (
                        <div className="p-6 border-t border-gray-800">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xl text-gray-300">Total:</span>
                                <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
                            </div>
                            <div className="space-y-3">
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                >
                                    Proceed to Checkout
                                </button>
                                <button
                                    onClick={() => dispatch(clearCart())}
                                    className="w-full bg-gray-800 text-gray-300 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;