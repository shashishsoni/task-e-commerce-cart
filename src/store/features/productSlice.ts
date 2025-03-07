import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types/product';

interface ProductState {
    products: Product[];
    filteredProducts: Product[];
    selectedCategory: string | null;
    searchQuery: string;
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [
        {
            id: '1',
            name: 'Wireless Headphones',
            price: 99.99,
            description: 'High-quality wireless headphones with noise cancellation',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
            category: 'electronics',
            stock: 10
        },
        {
            id: '2',
            name: 'Smart Watch',
            price: 199.99,
            description: 'Feature-rich smartwatch with health tracking',
            image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
            category: 'electronics',
            stock: 15
        },
        {
            id: '3',
            name: 'Gaming Mouse',
            price: 49.99,
            description: 'Ergonomic gaming mouse with RGB lighting',
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
            category: 'electronics',
            stock: 20
        },
        {
            id: '4',
            name: 'Mechanical Keyboard',
            price: 129.99,
            description: 'Premium mechanical keyboard with customizable switches',
            image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=500',
            category: 'electronics',
            stock: 8
        },
        {
            id: '5',
            name: 'Wireless Earbuds',
            price: 79.99,
            description: 'Compact wireless earbuds with charging case',
            image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500',
            category: 'electronics',
            stock: 25
        },
        {
            id: '6',
            name: 'Gaming Console',
            price: 499.99,
            description: 'Next-gen gaming console with 4K support',
            image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500',
            category: 'electronics',
            stock: 5
        },
        {
            id: '7',
            name: 'Laptop Stand',
            price: 29.99,
            description: 'Adjustable aluminum laptop stand for better ergonomics',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
            category: 'accessories',
            stock: 30
        },
        {
            id: '8',
            name: 'Webcam HD',
            price: 69.99,
            description: '1080p HD webcam with built-in microphone',
            image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500',
            category: 'electronics',
            stock: 12
        },
        {
            id: '9',
            name: 'USB-C Hub',
            price: 39.99,
            description: 'Multi-port USB-C hub with power delivery',
            image: 'https://res.cloudinary.com/dtbppvpta/image/upload/v1741381689/iykobizrlmtykxqge0kv.jpg',
            category: 'accessories',
            stock: 18
        },
        {
            id: '10',
            name: 'Portable SSD',
            price: 159.99,
            description: '1TB portable SSD with USB 3.2 support',
            image: 'https://res.cloudinary.com/dtbppvpta/image/upload/v1741381688/z0qj2asmahyrgpdykhbo.jpg',
            category: 'storage',
            stock: 7
        }
    ],
    filteredProducts: [],
    selectedCategory: null,
    searchQuery: '',
    loading: false,
    error: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        setSelectedCategory: (state, action: PayloadAction<string | null>) => {
            state.selectedCategory = action.payload;
            state.filteredProducts = filterProducts(state);
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
            state.filteredProducts = filterProducts(state);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        updateProductStock: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
            const product = state.products.find(p => p.id === action.payload.productId);
            if (product) {
                product.stock -= action.payload.quantity;
            }
        }
    }
});

// Helper function to filter products based on category and search query
const filterProducts = (state: ProductState): Product[] => {
    return state.products.filter(product => {
        const matchesCategory = !state.selectedCategory || product.category === state.selectedCategory;
        const matchesSearch = !state.searchQuery || 
            product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
};

export const {
    setProducts,
    setSelectedCategory,
    setSearchQuery,
    setLoading,
    setError,
    updateProductStock
} = productSlice.actions;

export default productSlice.reducer; 