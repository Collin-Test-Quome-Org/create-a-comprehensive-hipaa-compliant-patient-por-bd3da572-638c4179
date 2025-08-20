// ProtectedRoute.tsx
import { useAuth } from '@/providers/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { AccessDeniedModal } from '@/components/AccessDeniedModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
}

export function ProtectedRoute({ children, requiredRoles }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  if (loading) {
    // TODO: Replace with a nice spinner
    return <div className="flex items-center justify-center min-h-screen text-lg font-semibold">Loading…</div>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (requiredRoles && !requiredRoles.includes(user.role)) {
    // Show modal and redirect back after close
    return (
      <>
        <AccessDeniedModal open={true} onClose={() => setModalOpen(false)} />
        <Navigate to="/dashboard" replace />
      </>
    );
  }
  return <>{children}</>;
}
