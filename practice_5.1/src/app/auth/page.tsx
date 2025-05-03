'use client'

import { useAtom } from 'jotai';
import { isLoggedInAtom, userAtom } from '@/entities/authStorage';
import { useEffect } from 'react';
import YandexAuthButton from '@/entities/YandexAuthButton';
import { useAuth } from '@/hooks/useAuth';

export default function Authorization() {
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
    const [user, setUser] = useAtom(userAtom);
    const { login } = useAuth();

    useEffect(() => {
        // Получить юзера из cookie
        fetch('/api/user')
        .then(res => res.json())
        .then(res => setUser({ name: res?.real_name, email: res?.login, role: 'user'}))
    }, []);

    const handleAuth = () => {
        const params = new URLSearchParams({
          response_type: 'code',
          client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID as string,
          redirect_uri: `${window.location.origin}/api/auth/yandex`,
        });
        window.location.href = `https://oauth.yandex.ru/authorize?${params.toString()}`;

        handleLogin('user');
    };

    const handleLogin = (role: string) => {
        login(role as any);
        setIsLoggedIn(true);
        if (role == 'admin')
            setUser({ name: 'admin', email: 'admin@example.com', role: 'admin' });
        if (role == 'guest')
            setUser({ name: 'Космический Путешественник', email: 'user@example.com', role: 'guest' });
        /*if (role == 'user')
            fetch('/api/user')
            .then(res => res.json())
            .then(res => setUser({ name: res?.real_name, email: res?.login, role: 'user'}));*/
    };

    return (
        <div>
            { isLoggedIn ? (
                <>
                    <p className="text-xl font-bold m-5 flex justify-center">Вход выполнен</p>
                    <div>Имя: {user?.name}</div>
                    <div>Login: {user?.email}</div>
                </>
            ) : (
                <>
                    <p className="text-xl font-bold m-5 flex justify-center">Войдите</p>
                    <div className="flex flex-col items-center">
                        <YandexAuthButton onClick={handleAuth} />
                        <div className="p-4">
                            <button 
                                onClick={() => handleLogin('guest')}
                                className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-300 font-bold"
                            >
                                Войти как гость
                            </button>
                        </div>
                        <div>
                        <button
                            onClick={() => handleLogin('admin')}
                            className="w-full bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Войти как Админ
                        </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
