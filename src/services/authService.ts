import type { User } from '../types/user';
import { simulateNetworkDelay } from './apiClient';

const MOCK_RECRUITER_USER: User = {
  id: 'usr_recruiter_1',
  name: 'Sarah Jenkins',
  email: 'sarah.jenkins@acmehr.com',
  role: 'recruiter',
  companyName: 'Acme Enterprise Solutions',
  companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
};

export const authService = {
  async getCurrentUser(): Promise<User | null> {
    const savedToken = localStorage.getItem('ai_interview_auth_token');
    if (!savedToken) return MOCK_RECRUITER_USER; // Default logged in for interactive demo
    return simulateNetworkDelay(MOCK_RECRUITER_USER, 200);
  },

  async login(email: string): Promise<{ user: User; token: string }> {
    const token = 'mock_jwt_token_' + Date.now();
    localStorage.setItem('ai_interview_auth_token', token);
    const user = { ...MOCK_RECRUITER_USER, email };
    return simulateNetworkDelay({ user, token }, 500);
  },

  async register(name: string, email: string, companyName: string): Promise<{ user: User; token: string }> {
    const token = 'mock_jwt_token_' + Date.now();
    localStorage.setItem('ai_interview_auth_token', token);
    const user: User = {
      id: 'usr_' + Date.now(),
      name,
      email,
      role: 'recruiter',
      companyName,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    };
    return simulateNetworkDelay({ user, token }, 600);
  },

  async logout(): Promise<void> {
    localStorage.removeItem('ai_interview_auth_token');
    return simulateNetworkDelay(undefined, 200);
  },
};
