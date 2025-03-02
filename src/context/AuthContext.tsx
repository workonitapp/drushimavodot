/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/lib/api';
import { UserRole } from '@/types/user';
import { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, role: UserRole) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithEmail: async () => { },
  signUp: async () => { },
  signOut: async () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    console.log('AuthContext: Initial mount, checking user...');
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      console.log('AuthContext: Checking current user...');
      const response = await api.auth.getCurrentUser();
      if (response.user) {
        console.log('AuthContext: Got user from API:', response.user);
        const userData: User = {
          ...response.user,
          role: response.user.role as UserRole,
        };
        console.log('AuthContext: Setting user with role:', userData.role);
        setUser(userData);
      } else {
        console.log('AuthContext: No authenticated user');
        setUser(null);
      }
    } catch (error) {
      console.log('AuthContext: Error checking user:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthError = (error: Error) => {
    console.error('Auth error:', error);
    toast({
      title: 'Error',
      description: error.message,
      variant: 'destructive',
    });
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const { data }: any = await api.auth.login({ email, password });
      const user = data?.user || {}
      const userData: User = {
        ...user,
        role: user.role as UserRole,
      };
      console.log(
        'AuthContext: Login successful, setting user with role:',
        userData.role
      );
      setUser(userData);
      toast({
        title: 'Login Successful',
        description: 'Welcome back!',
      });
    } catch (error) {
      handleAuthError(error as Error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, role: UserRole) => {
    try {
      console.log('AuthContext: Starting signup process with role:', role);
      const { data }: any = await api.auth.register({ email, password, role });
      // console.log(data?.user, "user")
      const user = data?.user || {}
      const userData: User = {
        ...user,
        role: role as UserRole,
      };
      console.log(
        'AuthContext: Signup successful, setting user with role:',
        userData.role
      );
      setUser(userData);
      toast({
        title: 'Registration Successful',
        description: 'Welcome!',
      });
    } catch (error) {
      handleAuthError(error as Error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      console.log('AuthContext: Starting logout process...');
      setUser(null);
      const response = await api.auth.logout();
      console.log('AuthContext: Logout API response:', response);
      toast({
        title: 'Logged out successfully',
        description: 'You have been logged out.',
      });
    } catch (error) {
      console.error('AuthContext: Logout error:', error);
      toast({
        title: 'Logout failed',
        description:
          error instanceof Error ? error.message : 'An error occurred',
        variant: 'destructive',
      });
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signInWithEmail, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
