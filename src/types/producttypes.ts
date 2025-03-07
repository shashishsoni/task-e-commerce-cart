export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    stock: number;
}

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}