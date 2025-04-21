'use client';

import ProductCard from '@/entities/ProductCard';
import { CatalogToCartBridge } from '@/CatalogToCartBridge';
import useProducts from '@/entities/ProductsStorage';
import { useTheme } from '@/hooks/useTheme';
import { useCart } from '@/hooks/useCart';

export function Cart() {
  const { deleteFromCartZustandCatalog } = useProducts();
  const { removePositionFromCartReduxCart } = CatalogToCartBridge();
  const { theme } = useTheme();
  const { total, items } = useCart();

  const handleDeletePosition = (id: number) => {
    deleteFromCartZustandCatalog(id);
    removePositionFromCartReduxCart(id);
  }

  return ( 
    <div className="">
      <h2 className="text-xl font-bold mb-2 flex justify-center">Корзина</h2>
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
                <button className={`bg-red-200 hover:bg-red-300 active:bg-red-400 w-[100%] rounded-b-lg
                  ${theme === "dark" ? 'text-gray-800' : 'text-white'}`} onClick={() => handleDeletePosition(item.id)}>Удалить</button>
              </div>
              
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold flex justify-center">Итого: {total}₽</div>
    </div>
  );
}