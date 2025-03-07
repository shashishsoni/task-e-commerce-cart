import Header from '../components/layout/header';
import Products from '../components/products/Products';

export default function Home() {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="container mx-auto px-4 pt-24">
                <Products />
            </main>
        </div>
    );
}