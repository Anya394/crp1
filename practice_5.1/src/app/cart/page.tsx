'use client';

import { Cart } from '@/features/Cart';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '@/entities/authStorage';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import ProtectedUI from '@/entities/ProtectedUI';

export default function CartPage() {

  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const { items } = useCart();

  if (!isLoggedIn) {
    return <h1 className="text-3xl font-bold mb-8 flex justify-center m-20">Войдите, чтобы пользоваться корзиной</h1>;
  }

  return (
    <div className=''>
      <Cart/>
      {
        items.length != 0 && 
        <ProtectedUI requiredPermissions={['create', 'edit']}>
          <div className='flex justify-center'>
            <Link href="/place-an-order">
              <div className={`mb-6 pb-5 pt-5 px-10 text-gray-800 bg-green-400 hover:bg-green-500 active:bg-green-600 h-10 rounded-lg flex items-center justify-center`}>
                Оформить
              </div>
            </Link>
          </div>
        </ProtectedUI>
      }
    </div>
  );
}
