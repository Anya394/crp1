'use client';

import { Cart } from '@/features/Cart';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '@/entities/authStorage';
/*import { useRouter } from 'next/navigation';
import { useEffect } from 'react';*/

export default function CartPage() {

  const [isLoggedIn] = useAtom(isLoggedInAtom);
  /*const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);*/

  if (!isLoggedIn) {
    return <h1 className="text-3xl font-bold mb-8 flex justify-center m-20">Войдите, чтобы пользоваться корзиной</h1>;
  }

  return (
    <div>
        <Cart/>
    </div>
  );
}
