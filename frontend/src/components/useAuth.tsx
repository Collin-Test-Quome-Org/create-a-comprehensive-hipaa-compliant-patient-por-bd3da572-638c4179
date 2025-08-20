import { useContext } from 'react';
import { AuthContext } from '@/Providers';

export function useAuth() {
  return useContext(AuthContext);
}
