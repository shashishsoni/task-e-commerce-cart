import { Product } from '@/types/producttypes';

export interface CartItem extends Product {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    total: number;
    isOpen: boolean;
}