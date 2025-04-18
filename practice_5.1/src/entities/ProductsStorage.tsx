import { create } from 'zustand';
import { ProductsState } from '@/types';

const useProducts = create<ProductsState>((set) => ({
    products: [
      {
        id: 1,
        name: 'Истребитель X-Wing',
        price: 250000,
        image: '/x-wing.jpg',
        quantity: 0,
      },
      {
        id: 2,
        name: 'Тысячелетний сокол',
        price: 10000000,
        image: '/falcon.jpg',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Звездный разрушитель',
        price: 50000000,
        image: '/destroyer.jpg',
        quantity: 0,
      },
      {
        id: 4,
        name: 'Дроид-истребитель v2',
        price: 150000,
        image: '/droid-fighter.jpg',
        quantity: 0,
      },
    ],
    
    addToCartZustandCatalog: (productId: number) => 
      set((state) => ({
        products: state.products.map(product =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      })),
    
    removeFromCartZustandCatalog: (productId: number) => 
      set((state) => ({
        products: state.products.map(product =>
          product.id === productId && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      })),

    deleteFromCartZustandCatalog: (productId: number) => 
      set((state) => ({
        products: state.products.map(product =>
          product.id === productId && product.quantity > 0
            ? { ...product, quantity: 0 }
            : product
        ),
      })),
}));
  
export default useProducts;