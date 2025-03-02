import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database';

const supabaseUrl = 'https://raexlkupbnuypggloibq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhZXhsa3VwYm51eXBnZ2xvaWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NzI5NTcsImV4cCI6MjA1MzU0ODk1N30.i4AWW_CPaqpBwoR60CXFa78egfbNhgZibTWgSUdP550';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Helper functions for database operations
export const createJob = async (jobData: Database['public']['Tables']['jobs']['Insert']) => {
  console.log('Creating new job:', jobData);
  const { data, error } = await supabase
    .from('jobs')
    .insert([jobData])
    .select();
  
  if (error) throw error;
  return data;
};

export const fetchJobs = async () => {
  console.log('Fetching jobs from Supabase');
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const updateJob = async (id: number, updates: Database['public']['Tables']['jobs']['Update']) => {
  console.log('Updating job:', id, updates);
  const { data, error } = await supabase
    .from('jobs')
    .update(updates)
    .eq('id', id)
    .select();
  
  if (error) throw error;
  return data;
};

export const deleteJob = async (id: number) => {
  console.log('Deleting job:', id);
  const { error } = await supabase
    .from('jobs')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// User profile operations
export const updateUserProfile = async (userId: string, updates: Database['public']['Tables']['profiles']['Update']) => {
  console.log('Updating user profile:', userId, updates);
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select();
  
  if (error) throw error;
  return data;
};

export const fetchUserProfile = async (userId: string) => {
  console.log('Fetching user profile:', userId);
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

// Content operations
export const fetchContent = async () => {
  console.log('Fetching content from Supabase');
  const { data, error } = await supabase
    .from('content')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const createContent = async (contentData: Database['public']['Tables']['content']['Insert']) => {
  console.log('Creating new content:', contentData);
  const { data, error } = await supabase
    .from('content')
    .insert([contentData])
    .select();
  
  if (error) throw error;
  return data;
};

// File storage operations
export const uploadFile = async (bucket: string, path: string, file: File) => {
  console.log('Uploading file:', { bucket, path, file });
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file);
  
  if (error) throw error;
  return data;
};

export const getFileUrl = (bucket: string, path: string) => {
  return supabase.storage
    .from(bucket)
    .getPublicUrl(path)
    .data.publicUrl;
};