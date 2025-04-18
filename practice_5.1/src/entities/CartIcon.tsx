'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '@/ReduxStore';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export const CartIcon = () => {
  const itemsCount = useSelector((state: RootState) => 
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <Link href="/cart" className="relative inline-flex items-center p-2">
      <ShoppingCart className="w-6 h-6" />
      {itemsCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemsCount}
        </span>
      )}
    </Link>
  );
};