'use client';

import { useAtom } from 'jotai';
import { isLoggedInAtom, userAtom } from '@/entities/authStorage';
import Link from 'next/link';
import { logout } from "@/app/actions/logout";

export const AuthHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [user, setUser] = useAtom(userAtom);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <>
          <span className="hidden sm:inline">Привет, {user?.name}</span>
          <button 
            onClick={handleLogout}
            className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Выйти
          </button>
        </>
      ) : (
        <Link href="/auth" className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-300 font-bold">
            Войти
        </Link>
      )}
    </div>
  );
};