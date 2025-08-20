import { ReactNode } from 'react';
import { useAuth } from '@/components/useAuth';
import { Navigate } from 'react-router-dom';

interface RoleGuardProps {
  allowedRoles: string[];
  children: ReactNode;
}

export function RoleGuard({ allowedRoles, children }: RoleGuardProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg text-primary font-bold animate-pulse">Checking permissions...</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-4xl text-destructive font-bold mb-4">403</span>
        <span className="text-lg text-muted-foreground">Sorry, you do not have access to this page.</span>
      </div>
    );
  }

  return <>{children}</>;
}
