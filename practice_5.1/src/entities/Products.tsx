import { create } from 'zustand';
import { ProductsState } from '@/types';

const useProducts = create<ProductsState>((set) => ({
    products: [
      {
        id: 1,
        name: 'Истребитель X-Wing',
        price: 250000,
        image: '/x-wing.jpg',
        quantityInCart: 0,
      },
      {
        id: 2,
        name: 'Тысячелетний сокол',
        price: 10000000,
        image: '/falcon.jpg',
        quantityInCart: 0,
      },
      {
        id: 3,
        name: 'Звездный разрушитель',
        price: 50000000,
        image: '/destroyer.jpg',
        quantityInCart: 0,
      },
      {
        id: 4,
        name: 'Дроид-истребитель v2',
        price: 150000,
        image: '/droid-fighter.jpg',
        quantityInCart: 0,
      },
    ],
    
    addToCart: (productId: number) => 
      set((state) => ({
        products: state.products.map(product =>
          product.id === productId
            ? { ...product, quantityInCart: product.quantityInCart + 1 }
            : product
        ),
      })),
    
    removeFromCart: (productId: number) => 
      set((state) => ({
        products: state.products.map(product =>
          product.id === productId && product.quantityInCart > 0
            ? { ...product, quantityInCart: product.quantityInCart - 1 }
            : product
        ),
      })),
}));
  
export default useProducts;