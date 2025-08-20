// AuthProvider.tsx
import { createContext, useContext, useState, useEffect } from 'react';

// Fake roles: 'patient', 'provider', 'admin'
const fakeUsers = [
  { id: 1, name: 'Alice Parker', email: 'alice@patient.com', role: 'patient' },
  { id: 2, name: 'Dr. Bob Lee', email: 'bob@provider.com', role: 'provider' },
  { id: 3, name: 'Admin Sam', email: 'sam@admin.com', role: 'admin' },
];

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user from localStorage/session
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simple fake auth
    const found = fakeUsers.find(u => u.email === email);
    if (found) {
      setUser(found);
      localStorage.setItem('user', JSON.stringify(found));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
