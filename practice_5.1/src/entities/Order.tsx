import React from 'react';
import { OrdersProps } from '@/types';
const OrderCard: React.FC<OrdersProps> = ({ order }) => {

    return (
      <div key={order.id} className="border rounded-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">Заказ #{order.id}</h3>
          <span className="text-sm text-gray-500">
            {new Date(order.date).toLocaleString()}
          </span>
        </div>
        
        <div className="mb-3">
          {order.items.map(item => (
            <div key={item.id} className="flex justify-between py-1">
              <span>{item.name} × {item.quantity}</span>
              <span>{item.price * item.quantity} ₽</span>
            </div>
          ))}
        </div>
        
        <div className="pt-2 font-bold flex justify-end">
          Итого: {order.total} ₽
        </div>
        <div className="border-t pt-2 font-bold">
          Адрес: {order.address}
        </div>
      </div>
    );
  };
  
  export default OrderCard;