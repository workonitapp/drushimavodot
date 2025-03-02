import CreateJobForm from '@/components/jobs/CreateJobForm';
import JobSearch from '@/components/jobs/JobSearch';
import JobsLoading from '@/components/jobs/JobsLoading';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { api, API_URL } from '@/lib/api';
import { Job } from '@/types/job';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Mock data for demonstration
const mockJobs = [
  {
    id: 1,
    title: 'מפתח/ת Full Stack',
    company: 'חברת הייטק מובילה',
    companyLogo: '/placeholder.svg',
    location: 'תל אביב',
    type: 'משרה מלאה',
    salary: '25,000-35,000 ₪',
    description: `אנחנו מחפשים מפתח/ת Full Stack עם ניסיון בפיתוח מערכות מורכבות.

דרישות התפקיד:
- ניסיון של 3+ שנים בפיתוח Full Stack
- היכרות עמוקה עם React, Node.js
- ניסיון בעבודה עם מסדי נתונים
- יכולת עבודה בצוות ותקשורת מצוינת`,
    requirements: `- תואר ראשון במדעי המחשב או תחום רלוונטי
- ניסיון של 3+ שנים בפיתוח Full Stack
- שליטה ב-JavaScript, TypeScript, React, Node.js
- ניסיון בעבודה עם מסדי נתונים SQL ו-NoSQL
- יכולת עבודה בצוות ותקשורת בינאישית מצוינת
- יתרון - ניסיון בעבודה עם Docker, Kubernetes`,
    benefits: [
      'גמישות בשעות העבודה ואפשרות לעבודה היברידית',
      'קרן השתלמות והטבות סוציאליות מהיום הראשון',
      'תקציב הכשרות והשתלמויות שנתי',
      'חדר כושר במשרד וארוחות מסובסדות',
      'אווירה צעירה ודינמית',
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    experience: '3+ שנים',
    education: 'תואר ראשון',
    teamSize: 'צוות של 8 מפתחים',
    startDate: 'מיידי',
    remote: true,
  },
  {
    id: 2,
    title: 'מעצב/ת UX/UI',
    company: 'סטארטאפ צומח',
    companyLogo: '/placeholder.svg',
    location: 'הרצליה',
    type: 'משרה מלאה',
    salary: '18,000-25,000 ₪',
    description: `דרוש/ה מעצב/ת UX/UI עם תשוקה ליצירת חוויות משתמש מדהימות.

אנחנו מחפשים מעצב/ת שיצטרף/תצטרף לצוות המוצר שלנו ויעזור/תעזור לנו ליצור חוויות משתמש מעולות עבור המשתמשים שלנו.`,
    requirements: `- ניסיון של שנתיים לפחות בעיצוב ממשקים
- שליטה מלאה בכלי Figma
- הבנה עמוקה בעקרונות UX
- יכולת עבודה מול צוותי פיתוח
- פורטפוליו מרשים של עבודות קודמות`,
    benefits: [
      'סביבת עבודה צעירה ודינמית',
      'אפשרויות קידום מהירות',
      'גמישות בשעות העבודה',
      'תנאים סוציאליים מצוינים',
    ],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
    experience: 'שנתיים+',
    education: 'תואר/תעודה בעיצוב',
    teamSize: 'צוות של 4 מעצבים',
    startDate: 'גמיש',
    remote: true,
  },
];

// Simulated API call with artificial delay
const fetchJobs = async () => {
  console.log('Fetching jobs...');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockJobs;
};

type FileUploadState = {
  file: File | null;
  fileName: string;
  error: string;
};

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [jobCreated, setJobCreated] = useState<any>({});
  const { toast } = useToast();
  const [fileUpload, setFileUpload] = useState<FileUploadState>({
    file: null,
    fileName: '',
    error: '',
  });

  const {
    data: jobsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
    meta: {
      onSettled: () => {
        console.log('Query settled');
      },
    },
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.jobs.getJobs();
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Simulate loading progress
  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          const next = prev + 10;
          return next > 100 ? 100 : next;
        });
      }, 200);
      return () => clearInterval(interval);
    } else {
      setLoadingProgress(100);
    }
  }, [isLoading]);

  const handleJobClick = (jobId: number) => {
    console.log('Job clicked:', jobId);
    setSelectedJob(selectedJob === jobId ? null : selectedJob);
  };

  // Flexible filtering logic
  const filteredJobs = jobs?.filter((job) => {
    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();
    const fieldsToSearch = [
      job.title,
      job.company,
      job.location,
      job.type,
      job.description,
      ...(job.skills || []),
      job.experience,
      job.education,
    ];

    return fieldsToSearch.some((field) =>
      field?.toLowerCase().includes(searchLower)
    );
  });

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.jobApplications.applyForJob({
        ...jobCreated,
        jobId: selectedJob?._id,
      });
      toast({
        title:
          response?.data?.message ||
          response?.message ||
          'Application Submitted',
      });
      setIsApplyDialogOpen(false);
    } catch (error: any) {
      toast({
        title: 'Error',
        description:
          error?.message === 'Access Denied'
            ? 'Only candidates can apply for jobs'
            : error?.message,
        variant: 'destructive',
      });
    }
  };

  const onChangeHandle = (e: any) => {
    const { name, value } = e.target;
    setJobCreated((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFileUpload({
          file: null,
          fileName: '',
          error: 'File size should be less than 5MB',
        });
        return;
      }

      try {
        const formData = new FormData();
        formData.append('resume', file);

        const response = await fetch(`${API_URL}/upload`, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const data = await response.json();

        setFileUpload({
          file,
          fileName: file.name,
          error: '',
        });

        // Update job application form with file path
        setJobCreated((prev) => ({
          ...prev,
          resume: data.data.filePath,
        }));
      } catch (error) {
        setFileUpload({
          file: null,
          fileName: '',
          error: 'Failed to upload file',
        });
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <MainLayout>
      <div className="container mx-auto max-w-6xl py-8 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Jobs</h1>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <JobSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        {/* Jobs List */}
        {loading ? (
          <JobsLoading loadingProgress={0} />
        ) : (
          <div className="grid gap-6">
            {filteredJobs?.map((job) => (
              <div
                key={job.id}
                className="bg-card rounded-lg p-6 hover:shadow-md transition-shadow border border-border"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-2xl">💼</div>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{job.title}</h2>
                      <p className="text-muted-foreground">{job.company}</p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        📍 {job.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      ❤️
                    </Button>
                    <Button variant="ghost" size="icon">
                      🔗
                    </Button>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">💼 {job.type}</div>
                  <div className="flex items-center gap-1">
                    👥 {job.experience}
                  </div>
                  <div className="flex items-center gap-1">💰 {job.salary}</div>
                  <div className="flex items-center gap-1">
                    🚀 {job.startDate}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <Button
                    className="flex-1"
                    variant="default"
                    onClick={() => {
                      setSelectedJob(job);
                      setIsApplyDialogOpen(true);
                    }}
                  >
                    Apply Now
                  </Button>
                  <Button className="flex-1" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Create Job Dialog */}
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Job</DialogTitle>
            </DialogHeader>
            <CreateJobForm />
          </DialogContent>
        </Dialog>

        {/* Apply Dialog */}
        <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Apply for {selectedJob?.title || 'Job'}</DialogTitle>
              <DialogDescription>
                Fill in your details to apply for this position
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  name="fullName"
                  onChange={onChangeHandle}
                  value={jobCreated?.fullName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  name="email"
                  onChange={onChangeHandle}
                  value={jobCreated?.email}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  name="phone"
                  onChange={onChangeHandle}
                  value={jobCreated?.phone}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resume">Resume</Label>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt,.xls,.xlsx"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  {fileUpload.fileName && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {fileUpload.fileName}
                    </p>
                  )}
                  {fileUpload.error && (
                    <p className="text-sm text-destructive">
                      {fileUpload.error}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX, TXT, XLS, XLSX (Max 5MB)
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  onChange={onChangeHandle}
                  value={jobCreated?.notes}
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default Jobs;
