export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantityInCart: number;
}

export interface ProductsState {
    products: Product[];
    addToCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
}

export interface ProductCardProps {
    product: Product;
    onAddToCart: () => void;
    onRemoveFromCart: () => void;
  }
  