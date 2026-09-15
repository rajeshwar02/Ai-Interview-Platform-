import React, { useEffect } from 'react';
import { AppProviders } from './providers';
import { AppRouter } from '../routes';
import { useAuthStore } from '../store/useAuthStore';

export const App: React.FC = () => {
  const checkSession = useAuthStore((state) => state.checkSession);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};

export default App;
