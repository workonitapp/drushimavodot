export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  activeJobs: number;
  activeGroups: number;
}

export interface AdminSettings {
  siteName: string;
  siteDescription: string;
  maintenanceMode: boolean;
  allowRegistration: boolean;
}

export interface AdminPermission {
  id: string;
  name: string;
  description: string;
  isEnabled: boolean;
}