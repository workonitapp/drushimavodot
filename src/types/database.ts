export interface Profile {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  company?: string;
  position?: string;
  phone?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  company_logo?: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  requirements?: string;
  benefits?: string[];
  skills?: string[];
  experience?: string;
  education?: string;
  team_size?: string;
  start_date?: string;
  remote?: boolean;
  created_at: string;
  user_id: string;
}

export interface Content {
  id: number;
  title: string;
  excerpt?: string;
  content: string;
  image?: string;
  category: string;
  author_id: string;
  created_at: string;
  updated_at: string;
}

export interface Community {
  id: number;
  name: string;
  description: string;
  image?: string;
  members_count: number;
  platforms: string[];
  url: string;
  created_at: string;
}

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>;
      };
      jobs: {
        Row: Job;
        Insert: Omit<Job, 'id' | 'created_at'>;
        Update: Partial<Omit<Job, 'id' | 'created_at' | 'user_id'>>;
      };
      content: {
        Row: Content;
        Insert: Omit<Content, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Content, 'id' | 'created_at' | 'updated_at' | 'author_id'>>;
      };
      communities: {
        Row: Community;
        Insert: Omit<Community, 'id' | 'created_at'>;
        Update: Partial<Omit<Community, 'id' | 'created_at'>>;
      };
    };
  };
};