// Providers.tsx
import { AuthProvider } from '@/providers/AuthProvider';

export function Providers({ children }) {
  return (
    <AuthProvider>{children}</AuthProvider>
  );
}
