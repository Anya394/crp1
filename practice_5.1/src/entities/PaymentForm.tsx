'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormData } from '@/types';

export default function PaymentForm() {
  const router = useRouter();
  const { items } = useCart();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: 'card'
    }
  });

  const onSubmit = (data: FormData) => {
    // Сохраняем данные формы в sessionStorage
    const orderData = {
      formData: data,
    };
    
    sessionStorage.setItem('currentOrder', JSON.stringify(orderData));
    router.push('/confirm');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Оформление заказа</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Адрес доставки</label>
          <input
            {...register('address')}
            className="w-full p-2 border rounded"
            placeholder="ул. Примерная, д. 1, кв. 1"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Номер телефона</label>
          <input
            {...register('phone')}
            className="w-full p-2 border rounded"
            placeholder="79991234567"
            type="tel"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">Способ оплаты</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                {...register('paymentMethod')}
                type="radio"
                value="card"
                className="h-4 w-4"
              />
              <span>Картой онлайн</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                {...register('paymentMethod')}
                type="radio"
                value="cash"
                className="h-4 w-4"
              />
              <span>Наличными при получении</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className={`mb-6 mt-6 pb-5 pt-5 px-10 w-full text-gray-800 bg-green-400 hover:bg-green-500 active:bg-green-600 h-10 rounded-lg flex items-center justify-center`}
          disabled={items.length === 0}
        >
          Оформить заказ
        </button>
      </form>
    </div>
  );
}