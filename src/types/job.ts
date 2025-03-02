export interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements?: string;
  benefits?: string[];
  skills?: string[];
  experience?: string;
  education?: string;
  startDate?: string;
  remote?: boolean;
}