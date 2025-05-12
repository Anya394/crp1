'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function ProtectedRoute({
  children,
  requiredPermissions = [],
}: {
  children: React.ReactNode;
  requiredPermissions?: string[];
}) {
  const router = useRouter();
  const { hasPermission, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      const hasAccess = requiredPermissions.every(perm => 
        hasPermission(perm as any)
      );
      
      if (!hasAccess) {
        router.push('/unauthorized');
      }
    }
  }, [isLoading, hasPermission, requiredPermissions, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}