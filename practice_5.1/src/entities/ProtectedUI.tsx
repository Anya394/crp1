'use client';

import { useAuth } from '@/hooks/useAuth';

export default function ProtectedRoute({
  children,
  requiredPermissions = [],
}: {
  children: React.ReactNode;
  requiredPermissions?: string[];
}) {
  const { hasPermission, isLoading } = useAuth();

  const hasAccess = requiredPermissions.every(perm => 
    hasPermission(perm as any)
  );
  
  if (!hasAccess) {
    return null;
  }
  
  return <>{children}</>;
}