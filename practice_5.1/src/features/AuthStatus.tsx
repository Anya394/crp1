'use client';

import { useAtom } from 'jotai';
import { isLoggedInAtom, userAtom } from '@/entities/authStorage';

export const AuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [user, setUser] = useAtom(userAtom);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ name: 'Космический Путешественник', email: 'user@example.com' });
  };

  const handleLogout = () => {
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
        <button 
          onClick={handleLogin}
          className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-300 font-bold"
        >
          Войти
        </button>
      )}
    </div>
  );
};