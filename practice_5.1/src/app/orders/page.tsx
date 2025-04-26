'use client';

import Order from '@/entities/Order';
import { isLoggedInAtom } from '@/entities/authStorage';
import { useOrders } from '@/hooks/useOrders';
import { useAtom } from 'jotai';

export default function OrdersPage() {
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const { state } = useOrders();
  const orders = state.context.orders;

  if (!isLoggedIn) {
    return <h1 className="text-3xl font-bold mb-8 flex justify-center m-20">Войдите, чтобы просматривать заказы</h1>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">История заказов</h1>
      
      {orders.length === 0 ? (
        <p className="text-gray-500">У вас пока нет заказов</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}