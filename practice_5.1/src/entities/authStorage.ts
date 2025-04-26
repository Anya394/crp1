import { atomWithStorage } from 'jotai/utils';

// Атом для хранения состояния авторизации
export const isLoggedInAtom = atomWithStorage('isLoggedIn', false);

// Атом для хранения информации о пользователе
export const userAtom = atomWithStorage<{ name: string; email: string } | null>('user', null);