import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User, UserRole, LoginCredentials, AuthState } from '@/types';
import { authApi } from '@/services/api';
import { toast } from '@/hooks/use-toast';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
  hasRole: (roles: UserRole | UserRole[]) => boolean;
  canManageTeam: (teamId: string) => boolean;
  canEditRequest: (request: { assignedToId?: string; teamId: string }) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Initialize auth state from localStorage
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (token && storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          
          // Try to verify token with backend, but fall back to stored user if it fails
          try {
            const user = await authApi.getMe();
            setState({
              user,
              token,
              isAuthenticated: true,
              isLoading: false,
            });
          } catch (verifyError: any) {
            console.warn('Token verification failed, using stored user', verifyError.message);
            // If verification fails, fall back to stored user
            setState({
              user: parsedUser,
              token,
              isAuthenticated: true,
              isLoading: false,
            });
          }
        } catch (error) {
          console.error('Auth initialization error:', error);
          // Clear storage on parse error
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setState({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } else {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    initAuth();
  }, []);

  const login = useCallback(async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      
      // Call real API for login
      const { user, token } = await authApi.login(credentials);

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setState({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });

      toast({
        title: 'Welcome back!',
        description: `Logged in as ${user.name}`,
      });

      return true;
    } catch (error: any) {
      setState((prev) => ({ ...prev, isLoading: false }));
      toast({
        title: 'Login failed',
        description: error.response?.data?.message || 'Invalid credentials',
        variant: 'destructive',
      });
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    authApi.logout();
    setState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
    toast({
      title: 'Logged out',
      description: 'You have been logged out successfully',
    });
  }, []);

  // Check if user has one of the specified roles
  const hasRole = useCallback(
    (roles: UserRole | UserRole[]): boolean => {
      if (!state.user) return false;
      const roleArray = Array.isArray(roles) ? roles : [roles];
      return roleArray.includes(state.user.role);
    },
    [state.user]
  );

  // Check if user can manage a specific team
  const canManageTeam = useCallback(
    (teamId: string): boolean => {
      if (!state.user) return false;
      if (hasRole('admin')) return true;
      if (hasRole('manager') && state.user.teamId === teamId) return true;
      return false;
    },
    [state.user, hasRole]
  );

  // Check if user can edit a specific request
  const canEditRequest = useCallback(
    (request: { assignedToId?: string; teamId: string }): boolean => {
      if (!state.user) return false;
      if (hasRole('admin')) return true;
      if (hasRole('manager') && state.user.teamId === request.teamId) return true;
      if (hasRole('technician') && state.user.id === request.assignedToId) return true;
      return false;
    },
    [state.user, hasRole]
  );

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        hasRole,
        canManageTeam,
        canEditRequest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
