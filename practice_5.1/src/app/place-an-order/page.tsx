'use client';

import { useAtom } from 'jotai';
import { isLoggedInAtom } from '@/entities/authStorage';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {

  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const { items } = useCart();

  if (!isLoggedIn) {
    return <h1 className="text-3xl font-bold mb-8 flex justify-center m-20">Войдите, чтобы оформить заказ</h1>;
  }

  return (
    <div className=''>
      <div className='flex flex-col items-center'>
        <h2 className="text-xl font-bold m-5">Оформление заказа</h2>
        {items.length !== 0 && (
          <div>
            <p className="m-2">Введите данные</p>
            <Link href="/confirm" className='w-[40%]'>
              <div className={`mb-6 mt-6 pb-5 pt-5 px-10 text-gray-800 bg-green-400 hover:bg-green-500 active:bg-green-600 h-10 rounded-lg flex items-center justify-center`}>
                Оформить
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
