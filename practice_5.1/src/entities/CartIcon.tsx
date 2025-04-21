'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '@/entities/authStorage';
import { useCart } from '@/hooks/useCart';

export const CartIcon = () => {
  const { items } = useCart();
  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isLoggedIn] = useAtom(isLoggedInAtom);

  return (
    <Link href="/cart" className="relative inline-flex items-center p-2">
      <ShoppingCart className="w-6 h-6" />
      {itemsCount > 0 && isLoggedIn && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemsCount}
        </span>
      )}
    </Link>
  );
};