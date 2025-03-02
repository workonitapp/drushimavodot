/* eslint-disable @typescript-eslint/no-explicit-any */
export const API_URL =
  import.meta.env.VITE_NODE_ENV === 'production'
    ? 'https://drushimavodot.onrender.com/api' // Updated with your actual Render domain
    : 'http://localhost:10000/api';

// const API_URL = 'http://localhost:10000/api';
interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials extends LoginCredentials {
  role: 'candidate' | 'recruiter';
}

interface AuthResponse {
  message: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

interface AuthErrorResponse {
  message: string;
  user: null;
}

interface JobFormData {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string;
  benefits: string[];
  skills: string[];
  experience: string;
  education: string;
  startDate: string;
  remote: boolean;
}

interface Job extends JobFormData {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

const commonFetchOptions: RequestInit = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const api = {
  auth: {
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
      try {
        const response = await fetch(`${API_URL}/auth/login`, {
          ...commonFetchOptions,
          method: 'POST',
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Login failed');
        }

        return response.json();
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },

    async register(credentials: RegisterCredentials): Promise<AuthResponse> {
      try {
        const response = await fetch(`${API_URL}/auth/register`, {
          ...commonFetchOptions,
          method: 'POST',
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Registration failed');
        }

        return response.json();
      } catch (error) {
        console.error('Registration error:', error);
        throw error;
      }
    },

    async logout(): Promise<{ message: string }> {
      try {
        const response = await fetch(`${API_URL}/auth/logout`, {
          ...commonFetchOptions,
          method: 'POST',
        });

        const contentType = response.headers.get('content-type');
        let data;

        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          data = { message: 'Logged out successfully' };
        }

        if (!response.ok) {
          throw new Error(
            data.message || `Logout failed with status ${response.status}`
          );
        }

        return data;
      } catch (error) {
        console.error('Logout error:', error);
        throw error;
      }
    },

    async getCurrentUser(): Promise<AuthResponse | AuthErrorResponse> {
      try {
        const response = await fetch(`${API_URL}/auth/me`, {
          ...commonFetchOptions,
          method: 'GET',
        });

        if (!response.ok) {
          if (response.status === 401) {
            return {
              message: 'No authenticated user',
              user: null,
            };
          }
          const error = await response.json();
          throw new Error(error.message || 'Failed to get user');
        }

        return response.json();
      } catch (error) {
        console.error('Get current user error:', error);
        return {
          message: 'Failed to fetch user',
          user: null,
        };
      }
    },
  },

  jobs: {
    async createJob(jobData: JobFormData): Promise<Job> {
      try {
        const response = await fetch(`${API_URL}/jobs`, {
          ...commonFetchOptions,
          method: 'POST',
          body: JSON.stringify(jobData),
        });
        if (response.status === 401) {
          if (typeof window !== 'undefined') {
            if (location.pathname !== '/auth') {
              window.location.replace('/auth');
            }
          }
        }
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to create job');
        }

        return response.json();
      } catch (error) {
        console.error('Create job error:', error);
        throw error;
      }
    },

    async getJobs(): Promise<Job[]> {
      try {
        const response = await fetch(`${API_URL}/jobs`, {
          ...commonFetchOptions,
          method: 'GET',
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to fetch jobs');
        }

        return response.json();
      } catch (error) {
        console.error('Get jobs error:', error);
        throw error;
      }
    },
  },
  jobApplications: {
    async applyForJob(formData: any): Promise<any> {
      try {
        const response = await fetch(`${API_URL}/jobs/applications`, {
          ...commonFetchOptions,
          method: 'POST',
          body: JSON.stringify(formData), // FormData for multipart
        });

        if (response.status === 401) {
          if (typeof window !== 'undefined') {
            if (location.pathname !== '/auth') {
              window.location.replace('/auth');
            }
          }
        }
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to apply for job');
        }

        return response.json();
      } catch (error) {
        console.error('Apply for job error:', error);
        throw error;
      }
    },

    async getUserApplications(
      userId: string,
      page: number = 1,
      limit: number = 10
    ): Promise<any> {
      try {
        const response = await fetch(
          `${API_URL}/jobs/applications/user/${userId}?page=${page}&limit=${limit}`,
          {
            ...commonFetchOptions,
            method: 'GET',
          }
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to fetch applications');
        }

        return response.json();
      } catch (error) {
        console.error('Get user applications error:', error);
        throw error;
      }
    },

    async getAllApplications(
      page: number = 1,
      limit: number = 10,
      jobTitle: string = ''
    ): Promise<any> {
      try {
        const response = await fetch(
          `${API_URL}/jobs/applications?page=${page}&limit=${limit}&jobTitle=${jobTitle}`,
          {
            ...commonFetchOptions,
            method: 'GET',
          }
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to fetch all applications');
        }

        return response.json();
      } catch (error) {
        console.error('Get all applications error:', error);
        throw error;
      }
    },
  },
};
