'use client';

import { useAtom } from 'jotai';
import { isLoggedInAtom } from '@/entities/authStorage';
import { useCart } from '@/hooks/useCart';
import PaymentForm from '@/entities/PaymentForm';

export default function CartPage() {

  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const { items } = useCart();

  if (!isLoggedIn) {
    return <h1 className="text-3xl font-bold mb-8 flex justify-center m-20">Войдите, чтобы оформить заказ</h1>;
  }

  return (
    <div className='flex flex-col items-center'>
      {items.length !== 0 && ( <PaymentForm /> )}
    </div>
  );
}
