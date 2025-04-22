import { EventFrom, StateFrom } from "xstate";
import { orderMachine } from "./entities/OrdersStorage";

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
    clearCartZustandCatalog: () => void;
}

export interface ProductProps {
    product: Product;
}

export interface CartState {
    items: Product[];
}

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme | null;
  toggleTheme: () => void;
};

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
  
export interface Order {
    id: string;
    items: CartItem[];
    date: string;
    total: number;
}

export interface OrdersProps {
    order: Order;
}

export type OrderContextType = {
    state: StateFrom<typeof orderMachine>;
    send: (event: EventFrom<typeof orderMachine>) => void;
};