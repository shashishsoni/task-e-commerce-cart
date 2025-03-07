'use client';

import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, type CartItem } from '../../store/features/cartslices';

interface CartItemProps {
    item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newQuantity = parseInt(e.target.value);
        dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    };

    return (
        <div className="flex gap-4 bg-gray-800 rounded-lg p-4">
            <div className="relative h-20 w-20 flex-shrink-0">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                    sizes="80px"
                />
            </div>
            <div className="flex-grow">
                <h3 className="text-white font-medium">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-2">${item.price}</p>
                <div className="flex justify-between items-center">
                    <select
                        value={item.quantity}
                        onChange={handleQuantityChange}
                        className="bg-gray-700 text-white rounded-lg px-2 py-1 text-sm"
                    >
                        {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-400 hover:text-red-300 transition-colors"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItemComponent;