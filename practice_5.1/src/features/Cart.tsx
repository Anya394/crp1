'use client';

import ProductCard from '@/entities/ProductCard';
import { CatalogToCartBridge } from '@/CatalogToCartBridge';
import useProducts from '@/entities/ProductsStorage';
import { useCart } from '@/hooks/useCart';

export function Cart() {
  const { deleteFromCartZustandCatalog } = useProducts();
  const { removePositionFromCartReduxCart } = CatalogToCartBridge();
  const { total, items } = useCart();

  const handleDeletePosition = (id: number) => {
    deleteFromCartZustandCatalog(id);
    removePositionFromCartReduxCart(id);
  }

  return ( 
    <div className="">
      <h2 className="text-xl font-bold m-5 flex justify-center">Корзина</h2>
      {items.length === 0 ? (
        <p className='flex justify-center'>Корзина пуста</p>
      ) : (
        <ul className="space-y-8">
          {items.map(item => (
            <li key={item.id} className="flex justify-between flex justify-center">
              <div className='border-b border-gray-300 pb-8 w-[30%]'>
                <ProductCard
                  product={item}
                />
                <button className={`bg-red-200 text-gray-800 hover:bg-red-300 active:bg-red-400 w-[100%] rounded-b-lg`} onClick={() => handleDeletePosition(item.id)}>Удалить</button>
              </div>
              
            </li>
          ))}
        </ul>
      )}
      <div className="m-6 font-bold flex justify-center">Итого: {total}₽</div>
    </div>
  );
}