import React from 'react';
import { ProductCardProps } from '@/types';

const ProductCard: React.FC<ProductCardProps> = ({ 
    product,
    onAddToCart,
    onRemoveFromCart
  }) => {
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
            onClick={onRemoveFromCart} 
            disabled={product.quantityInCart === 0}
            className={`px-3 py-1 rounded ${product.quantityInCart === 0 ? 'bg-gray-300' : 'bg-red-500 hover:bg-red-600'} text-white`}
          >
            -
          </button>
          
          <span className="mx-2">{product.quantityInCart}</span>
          
          <button 
            onClick={onAddToCart}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            +
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;