export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface ProductsState {
    products: Product[];
    addToCartZustandCatalog: (productId: number) => void;
    removeFromCartZustandCatalog: (productId: number) => void;
    deleteFromCartZustandCatalog: (productId: number) => void;
}

export interface ProductProps {
    product: Product;
}

export interface CartState {
    items: Product[];
}