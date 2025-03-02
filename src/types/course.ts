
export type Course = {
  id: string;
  title: string;
  description: string;
  type: "frontal" | "digital";
  price: number;
  instructor: {
    name: string;
    title: string;
    image: string;
  };
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  location?: {
    he: string;
    en: string;
  };
  startDate?: string;
  meetingsCount?: number;
  availableSeats?: number;
  rating: number;
  studentsCount: number;
  prerequisites?: string[];
  videosCount?: number;
  totalHours?: number;
  certificateIncluded?: boolean;
};
