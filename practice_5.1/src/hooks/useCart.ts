'use client';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/ReduxStore';
import { addToCart, removeFromCart, removePositionFromCart, clearCart } from '@/entities/CartStorage';
import { Product } from '@/types';

export const useCart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return {
    items,
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    addToCart: (product: Product) => dispatch(addToCart(product)),
    removeFromCart: (productId: number) => dispatch(removeFromCart(productId)),
    removePositionFromCart: (productId: number) => dispatch(removePositionFromCart(productId)),
    clearCart: () => dispatch(clearCart()),
  };
};