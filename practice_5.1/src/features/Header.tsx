import { CartIcon } from '@/entities/CartIcon';
import Link from 'next/link';
import { AuthStatus } from './AuthStatus';

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Космический магазин
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/catalog" className="hover:text-gray-300">
            Каталог
          </Link>
          <CartIcon />
          <AuthStatus />
        </nav>
      </div>
    </header>
  );
};