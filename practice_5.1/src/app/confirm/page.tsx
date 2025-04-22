'use client';

import { useCart } from '@/hooks/useCart';
import { useOrders } from '@/hooks/useOrders';
import Link from 'next/link';
import useProducts from '@/entities/ProductsStorage';

export default function CheckoutPage() {
  const { state, send } = useOrders();
  const { items, total, clearCart } = useCart();
  const { clearCartZustandCatalog} = useProducts();

  const handlePlaceOrder = () => {
    
    send({
      type: 'PLACE_ORDER',
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    });
    
    clearCart();
    clearCartZustandCatalog();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 flex justify-center">Подтверждение заказа</h1>
      
      {state.matches('processing') && (
        <div className="mb-4 p-3 px-5 bg-blue-100 text-blue-800 rounded">
          Обрабатываем ваш заказ...
        </div>
      )}
      
      {!state.matches('processing') && items.length === 0 && (
        <div>
          <div className="mb-4 p-3 px-5 bg-green-100 text-green-800 rounded">
            Заказ успешно оформлен! Номер: {state.context.orders.slice(-1)[0]?.id}
          </div>
          <Link href="/orders">
            <div className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg disabled:bg-gray-400 flex justify-center">
              Мои заказы
            </div>
          </Link>
        </div>
      )}

      {state.matches('idle') && items.length != 0 && (
        <div>
          <div className="mb-4">
            <p className="flex justify-center font-bold">Заказ:</p>
            {items.map(item => (
              <div key={item.id} className="flex justify-between py-1">
                <span>{item.name} × {item.quantity}</span>
                <span>{item.price * item.quantity} ₽</span>
              </div>
            ))}
            <div className="mt-6 font-bold flex justify-end">{total} ₽</div>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg disabled:bg-gray-400"
          >
            Подтвердить заказ
          </button>
        </div>
      )}
    </div>
  );
}