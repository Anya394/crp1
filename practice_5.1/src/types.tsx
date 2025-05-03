import { EventFrom, StateFrom } from "xstate";
import { orderMachine } from "./entities/OrdersStorage";
import { z } from "zod";

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
    address?: string;
}

export interface OrdersProps {
    order: Order;
}

export type OrderContextType = {
    state: StateFrom<typeof orderMachine>;
    send: (event: EventFrom<typeof orderMachine>) => void;
};

export type OrderData = {
    formData: {
      address: string;
      phone: string;
      paymentMethod: 'card' | 'cash';
    };
};

// Схема валидации
export const formSchema = z.object({
    address: z.string().min(5, 'Адрес должен содержать минимум 5 символов'),
    phone: z.string()
      .min(11, 'Номер должен содержать 11 цифр')
      .max(11, 'Номер должен содержать 11 цифр')
      .regex(/^\d+$/, 'Только цифры'),
    paymentMethod: z.enum(['card', 'cash'])
});
  
export type FormData = z.infer<typeof formSchema>;

export interface YandexAuthButtonProps {
    onClick: () => void;
}