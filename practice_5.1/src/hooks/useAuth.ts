'use client';

import { Role, Permission, rolePermissions } from '@/types';
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import { isLoggedInAtom, userAtom } from '@/entities/authStorage';

export function useAuth() {
  const [role, setRole] = useState<Role>('guest');
  const [isLoading, setIsLoading] = useState(true);
  //const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    // В реальном приложении здесь будет запрос к API/проверка токена
    const storedRole = localStorage.getItem('userRole') as Role || 'guest';
    /*if(!user)
        return ;
    setRole(user?.role);*/
    setRole(storedRole);
    setIsLoading(false);
  }, []);

  const hasPermission = (permission: Permission): boolean => {
    return rolePermissions[role].includes(permission);
  };

  const login = (newRole: Role) => {
    setRole(newRole);
    localStorage.setItem('userRole', newRole);
  };

  const logout = () => {
    setRole('guest');
    localStorage.removeItem('userRole');
  };

  return { role, isLoading, hasPermission, login, logout };
}