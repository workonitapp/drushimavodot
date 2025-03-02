/* eslint-disable @typescript-eslint/no-explicit-any */

type FileUploadState = {
  file: File | null;
  fileName: string;
  error: string;
};
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
import { isValidArray } from '@/utils/func';
import { MapPin } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const FeaturedJobs = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [jobCreated, setJobCreated] = useState<any>({});
  const [fileUpload, setFileUpload] = useState<FileUploadState>({
    file: null,
    fileName: '',
    error: '',
  });
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const [selectedJob, setSelectedJob] = React.useState<any>(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = React.useState(false);

  const [featuredJobs, setFeaturedJobs] = useState<any>({});

  //   const featuredJobs = React.useMemo(() => [
  //     {
  //       id: 1,
  //       title: "מפתח/ת Full Stack",
  //       company: "חברת הייטק מובילה",
  //       companyLogo: "/placeholder.svg",
  //       location: i18n.language === 'en' ? "Tel Aviv" : "תל אביב",
  //       type: i18n.language === 'en' ? "Full Time" : "משרה מלאה",
  //       salary: "25,000-35,000 ₪",
  //       description: `אנחנו מחפשים מפתח/ת Full Stack עם ניסיון בפיתוח מערכות מורכבות.

  // דרישות התפקיד:
  // - ניסיון של 3+ שנים בפיתוח Full Stack
  // - היכרות עמוקה עם React, Node.js
  // - ניסיון בעבודה עם מסדי נתונים
  // - יכולת עבודה בצוות ותקשורת מצוינת`,
  //       requirements: `- תואר ראשון במדעי המחשב או תחום רלוונטי
  // - ניסיון של 3+ שנים בפיתוח Full Stack
  // - שליטה ב-JavaScript, TypeScript, React, Node.js
  // - ניסיון בעבודה עם מסדי נתונים SQL ו-NoSQL
  // - יכולת עבודה בצוות ותקשורת בינאישית מצוינת
  // - יתרון - ניסיון בעבודה עם Docker, Kubernetes`,
  //       benefits: [
  //         "גמישות בשעות העבודה ואפשרות לעבודה היברידית",
  //         "קרן השתלמות והטבות סוציאליות מהיום הראשון",
  //         "תקציב הכשרות והשתלמויות שנתי",
  //         "חדר כושר במשרד וארוחות מסובסדות",
  //         "אווירה צעירה ודינמית",
  //       ],
  //       skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
  //       experience: i18n.language === 'en' ? "3+ Years" : "3+ שנים",
  //       education: i18n.language === 'en' ? "Bachelor's Degree" : "תואר ראשון",
  //       teamSize: i18n.language === 'en' ? "Team of 8 developers" : "צוות של 8 מפתחים",
  //       startDate: i18n.language === 'en' ? "Immediate" : "מיידי",
  //       remote: true,
  //     },
  //     {
  //       id: 2,
  //       title: "מעצב/ת UX/UI",
  //       company: "סטארטאפ צומח",
  //       companyLogo: "/placeholder.svg",
  //       location: i18n.language === 'en' ? "Herzliya" : "הרצליה",
  //       type: i18n.language === 'en' ? "Full Time" : "משרה מלאה",
  //       salary: "18,000-25,000 ₪",
  //       description: `דרוש/ה מעצב/ת UX/UI עם תשוקה ליצירת חוויות משתמש מדהימות.

  // אנחנו מחפשים מעצב/ת שיצטרף/תצטרף לצוות המוצר שלנו ויעזור/תעזור לנו ליצור חוויות משתמש מעולות עבור המשתמשים שלנו.`,
  //       requirements: `- ניסיון של שנתיים לפחות בעיצוב ממשקים
  // - שליטה מלאה בכלי Figma
  // - הבנה עמוקה בעקרונות UX
  // - יכולת עבודה מול צוותי פיתוח
  // - פורטפוליו מרשים של עבודות קודמות`,
  //       benefits: [
  //         "סביבת עבודה צעירה ודינמית",
  //         "אפשרויות קידום מהירות",
  //         "גמישות בשעות העבודה",
  //         "תנאים סוציאליים מצוינים",
  //       ],
  //       skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
  //       experience: i18n.language === 'en' ? "2+ Years" : "שנתיים+",
  //       education: i18n.language === 'en' ? "Relevant degree/certificate" : "תואר/תעודה רלוונטי/ת",
  //       teamSize: i18n.language === 'en' ? "Team of 4 designers" : "צוות של 4 מעצבים",
  //       startDate: i18n.language === 'en' ? "Flexible" : "גמיש",
  //       remote: true,
  //     },
  //     {
  //       id: 3,
  //       title: "מהנדס/ת DevOps",
  //       company: "חברת תקשורת גדולה",
  //       companyLogo: "/placeholder.svg",
  //       location: i18n.language === 'en' ? "Petah Tikva" : "פתח תקווה",
  //       type: i18n.language === 'en' ? "Full Time" : "משרה מלאה",
  //       salary: "28,000-38,000 ₪",
  //       description: `לחברת תקשורת מובילה דרוש/ה מהנדס/ת DevOps מנוסה להשתלבות בצוות תשתיות.

  // התפקיד כולל ניהול ותחזוקת סביבות פיתוח, בדיקות וייצור, אוטומציה של תהליכי CI/CD, ניטור ביצועי מערכות ואיתור תקלות.`,
  //       requirements: `- ניסיון של 4+ שנים בתפקיד DevOps
  // - שליטה בכלי ניהול תצורה (Ansible, Chef, Puppet)
  // - ניסיון בעבודה עם כלי CI/CD (Jenkins, GitLab CI)
  // - היכרות עם טכנולוגיות וירטואליזציה וקונטיינרים (Docker, Kubernetes)
  // - ניסיון בעבודה עם מערכות ניטור (Prometheus, Grafana)`,
  //       benefits: [
  //         "ארוחות צהריים מסובסדות",
  //         "ביטוח בריאות פרטי",
  //         "קרן השתלמות",
  //         "ימי חופשה נוספים",
  //       ],
  //       skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Terraform"],
  //       experience: i18n.language === 'en' ? "4+ Years" : "4+ שנים",
  //       education: i18n.language === 'en' ? "Bachelor's Degree" : "תואר ראשון",
  //       teamSize: i18n.language === 'en' ? "Team of 6 engineers" : "צוות של 6 מהנדסים",
  //       startDate: i18n.language === 'en' ? "Immediate" : "מיידי",
  //       remote: false,
  //     },
  //     {
  //       id: 4,
  //       title: "מנהל/ת מוצר",
  //       company: "חברת סטארטאפ בתחום הפינטק",
  //       companyLogo: "/placeholder.svg",
  //       location: i18n.language === 'en' ? "Tel Aviv" : "תל אביב",
  //       type: i18n.language === 'en' ? "Full Time" : "משרה מלאה",
  //       salary: "30,000-45,000 ₪",
  //       description: `אנחנו מחפשים מנהל/ת מוצר מוכשר/ת להובלת פיתוח מוצרים חדשניים בתחום הפינטק.

  // התפקיד כולל ניתוח שוק, הגדרת דרישות מוצר, תעדוף פיצ'רים, עבודה מול צוותי פיתוח ושיווק, ומעקב אחר ביצועי המוצר.`,
  //       requirements: `- ניסיון של 3+ שנים בניהול מוצר
  // - הבנה מעמיקה בתהליכי פיתוח מוצר Agile
  // - ניסיון בעבודה עם כלי ניתוח נתונים
  // - יכולת עבודה עצמאית ובצוות
  // - תקשורת בינאישית מצוינת`,
  //       benefits: [
  //         "אופציות בחברה",
  //         "תנאים סוציאליים מצוינים",
  //         "סביבת עבודה דינמית ומאתגרת",
  //         "אפשרויות קידום מהירות",
  //       ],
  //       skills: ["Product Management", "Agile", "User Research", "Data Analysis"],
  //       experience: i18n.language === 'en' ? "3+ Years" : "3+ שנים",
  //       education: i18n.language === 'en' ? "Bachelor's Degree" : "תואר ראשון",
  //       teamSize: i18n.language === 'en' ? "Team of 5 product managers" : "צוות של 5 מנהלי מוצר",
  //       startDate: i18n.language === 'en' ? "Flexible" : "גמיש",
  //       remote: false,
  //     }
  //   ], [i18n.language]);

  //   const selectedJob = React.useMemo(() => {
  //     return featuredJobs.find(job => job.id === selectedJob);
  //   }, [selectedJob, featuredJobs]);

  const fetchJobs = async () => {
    try {
      const response: any = await api.jobs.getJobs();
      // console.log(response?.data, "response")
      setFeaturedJobs(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const onChangeHandle = (e: any) => {
    const { name, value } = e.target;
    setJobCreated((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
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
  return (
    <section className="py-8 bg-secondary/5">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                {i18n.language === 'en' ? 'Jobs' : 'משרות'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {i18n.language === 'en'
                  ? 'Explore job opportunities'
                  : 'מצאו את ההזדמנות הבאה שלכם'}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/jobs')}
              className="hover-gradient"
            >
              {i18n.language === 'en' ? 'All Jobs' : 'כל המשרות'}
            </Button>
          </div>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {isValidArray(featuredJobs?.jobs) ? (
                featuredJobs.jobs.map((job: any, i: number) => (
                  <CarouselItem
                    key={i}
                    className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <Card className="h-[280px] overflow-hidden hover:shadow-lg transition-shadow relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                      </div>
                      <CardContent className="p-4 relative z-10 h-full flex flex-col">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            {/* <Avatar className="h-12 w-12 ring-2 ring-white/20">
                            <AvatarImage src={job.companyLogo} />
                            <AvatarFallback>
                              <Building2 className="h-6 w-6" />
                            </AvatarFallback>
                          </Avatar> */}
                            <div>
                              <h3 className="font-bold text-lg text-white line-clamp-1">
                                {job.title}
                              </h3>
                              <p className="text-sm text-gray-300 line-clamp-1">
                                {job.company}
                              </p>
                              <div className="flex items-center gap-1 text-sm text-gray-400 mt-0.5">
                                <MapPin className="h-3 w-3" />
                                <span>{job.location}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                              <span className="line-clamp-1">
                                💰 {job.salary}
                              </span>
                            </div>

                            <div className="flex flex-wrap gap-1">
                              {isValidArray(job.skills) ? (
                                job.skills
                                  .slice(0, 3)
                                  .map((skill: any, index: number) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 text-xs rounded-full bg-primary/90 text-white"
                                    >
                                      {skill}
                                    </span>
                                  ))
                              ) : (
                                <></>
                              )}
                            </div>

                            <p className="text-sm text-gray-300 line-clamp-2">
                              {job.description}
                            </p>
                          </div>
                        </div>

                        <div className="mt-auto space-y-2">
                          <div className="flex items-center justify-between text-sm text-gray-300">
                            <span className="line-clamp-1">{job.type}</span>
                            <span className="line-clamp-1">
                              {job.startDate}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="secondary"
                              size="sm"
                              className="flex-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedJob(job);
                                setIsDetailsDialogOpen(true);
                              }}
                            >
                              {i18n.language === 'en'
                                ? 'View Details'
                                : 'פרטים נוספים'}
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="flex-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedJob(job);
                                setIsApplyDialogOpen(true);
                              }}
                            >
                              {i18n.language === 'en'
                                ? 'Apply Now'
                                : 'הגש מועמדות'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))
              ) : (
                <></>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Details Dialog */}
      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedJob?.title}</DialogTitle>
            <DialogDescription>
              {selectedJob?.company} - {selectedJob?.location}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">תיאור התפקיד</h4>
              <p className="text-muted-foreground whitespace-pre-line">
                {selectedJob?.description}
              </p>
            </div>

            {selectedJob?.requirements && (
              <div>
                <h4 className="font-semibold mb-2">דרישות</h4>
                <p className="text-muted-foreground whitespace-pre-line">
                  {selectedJob.requirements}
                </p>
              </div>
            )}

            {isValidArray(selectedJob?.benefits) && (
              <div>
                <h4 className="font-semibold mb-2">הטבות</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {isValidArray(selectedJob?.benefits) ? (
                    selectedJob.benefits.map((benefit: any, index: number) => (
                      <li key={index}>{benefit}</li>
                    ))
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            )}

            <div className="flex justify-end">
              <Button
                onClick={() => {
                  setIsDetailsDialogOpen(false);
                  setIsApplyDialogOpen(true);
                }}
              >
                {i18n.language === 'en' ? 'Apply Now' : 'הגש מועמדות'}
              </Button>
            </div>
          </div>
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
                  <p className="text-sm text-destructive">{fileUpload.error}</p>
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
    </section>
  );
};

export default FeaturedJobs;
