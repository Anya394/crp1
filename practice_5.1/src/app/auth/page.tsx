'use client'

import { useAtom } from 'jotai';
import { isLoggedInAtom, userAtom } from '@/entities/authStorage';
import { useEffect } from 'react';
import YandexAuthButton from '@/entities/YandexAuthButton';

export default function Authorization() {
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
    const [user, setUser] = useAtom(userAtom);

    useEffect(() => {
        // Получить юзера из cookie
        fetch('/api/user')
        .then(res => res.json())
        .then(res => setUser({ name: res?.real_name, email: res?.login }))
    }, []);

    const handleAuth = () => {
        const params = new URLSearchParams({
          response_type: 'code',
          client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID as string,
          redirect_uri: `${window.location.origin}/api/auth/yandex`,
        });
        window.location.href = `https://oauth.yandex.ru/authorize?${params.toString()}`;

        setIsLoggedIn(true);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUser({ name: 'Космический Путешественник', email: 'user@example.com' });
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
                                onClick={handleLogin}
                                className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-300 font-bold"
                            >
                                Войти как гость
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
