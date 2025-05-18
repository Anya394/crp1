import React from 'react';
import { Product, ProductProps } from '@/types';
import useProducts from './ProductsStorage';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '@/entities/authStorage';
import { useTheme } from '@/hooks/useTheme';
import { useCart } from '@/hooks/useCart';

const ProductCard: React.FC<ProductProps> = ({ product }) => {
    const { addToCartZustandCatalog, removeFromCartZustandCatalog } = useProducts();
    const { addToCart, removeFromCart } = useCart();
    const [isLoggedIn] = useAtom(isLoggedInAtom);
    const { theme } = useTheme();

    const handleAddToCart = (id: number, product: Product) => {
      addToCartZustandCatalog(id); // Для изменения добавленного количества в карточке товара в каталоге.
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product.image
      }); // Для изменения добавленного количества в корзине.
    }

    const handleRemoveFromCart = (id: number) => {
      removeFromCartZustandCatalog(id);
      removeFromCart(id);
    }

    return (
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.price.toLocaleString()} ₽</p>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleRemoveFromCart(product.id)} 
            disabled={product.quantity === 0 || !isLoggedIn}
            className={`px-3 py-1 rounded 
              ${product.quantity === 0 || !isLoggedIn? 'bg-gray-300' : 'bg-red-500 hover:bg-red-600'} 
              ${theme === "dark" ? 'text-gray-800' : 'text-white'}`}>
            -
          </button>
          
          <span className="mx-2">{isLoggedIn ? product.quantity : 0}</span>
          
          <button 
            onClick={() => handleAddToCart(product.id, product)}
            disabled={!isLoggedIn}
            className={`px-3 py-1 rounded 
              ${isLoggedIn ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300'} 
              ${theme === "dark" ? 'text-gray-800' : 'text-white'}`}>
            +
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;