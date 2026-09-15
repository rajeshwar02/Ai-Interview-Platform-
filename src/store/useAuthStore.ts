import { create } from 'zustand';
import type { User } from '../types/user';
import { authService } from '../services/authService';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string) => Promise<void>;
  register: (name: string, email: string, companyName: string) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  checkSession: async () => {
    try {
      const user = await authService.getCurrentUser();
      set({ user, isAuthenticated: !!user, isLoading: false });
    } catch {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  login: async (email: string) => {
    set({ isLoading: true });
    const { user } = await authService.login(email);
    set({ user, isAuthenticated: true, isLoading: false });
  },

  register: async (name: string, email: string, companyName: string) => {
    set({ isLoading: true });
    const { user } = await authService.register(name, email, companyName);
    set({ user, isAuthenticated: true, isLoading: false });
  },

  logout: async () => {
    set({ isLoading: true });
    await authService.logout();
    set({ user: null, isAuthenticated: false, isLoading: false });
  },
}));
