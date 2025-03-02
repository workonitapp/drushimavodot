import { User as SupabaseUser } from '@supabase/supabase-js';

export type UserRole = 'candidate' | 'recruiter';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  company?: string;
  position?: string;
  phone?: string;
  avatar_url?: string;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: UserRole;
  permissions: {
    canCreateContent: boolean;
    canManageUsers: boolean;
    canManageJobs: boolean;
  };
  createdAt: string;
}

export type AuthUser = SupabaseUser & {
  profile?: UserProfile;
};

export interface AppUser {
  id: string;
  email: string;
  role: UserRole;
  image?: string; // Optional profile image URL
}
