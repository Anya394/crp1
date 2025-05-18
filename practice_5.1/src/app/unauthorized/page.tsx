'use client';

import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Доступ запрещен</h1>
      <p className="mb-6">У вас недостаточно прав для просмотра этой страницы</p>
      <Link 
        href="/auth" 
      >
        Войти в систему
      </Link>
    </div>
  );
}