import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Brain, Code, MapPin, Sparkles, Star, User, Mail, Phone, Calendar, GraduationCap, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FeaturedFreelancers = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [selectedFreelancer, setSelectedFreelancer] = useState<number | null>(null);

  const featuredFreelancers = [
    {
      id: 1,
      name: "יוסי כהן",
      role: "Full Stack Developer",
      avatar: "/placeholder.svg",
      location: i18n.language === 'en' ? "Tel Aviv" : "תל אביב",
      rate: i18n.language === 'en' ? "$150/hour" : "150$/שעה",
      description: "מפתח Full Stack עם 5 שנות ניסיון בבניית מערכות מורכבות",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      rating: 4.9,
      projectsCompleted: 45,
      availability: i18n.language === 'en' ? "Available immediately" : "זמין מיידית",
      languages: i18n.language === 'en' ? ["Hebrew", "English"] : ["עברית", "אנגלית"],
      experience: i18n.language === 'en' ? "5 Years" : "5 שנים",
    },
    {
      id: 2,
      name: "מיכל לוי",
      role: "UX/UI Designer",
      avatar: "/placeholder.svg",
      location: i18n.language === 'en' ? "Jerusalem" : "ירושלים",
      rate: i18n.language === 'en' ? "$100/hour" : "100$/שעה",
      description: "מעצבת UX/UI עם התמחות בחוויות משתמש ומיתוג",
      skills: ["Figma", "Adobe XD", "Design Systems"],
      rating: 4.8,
      projectsCompleted: 32,
      availability: i18n.language === 'en' ? "Available next week" : "זמין תוך שבוע",
      languages: i18n.language === 'en' ? ["Hebrew", "English", "Spanish"] : ["עברית", "אנגלית", "ספרדית"],
      experience: i18n.language === 'en' ? "4 Years" : "4 שנים",
    },
    {
      id: 3,
      name: "דוד שרון",
      role: "DevOps Engineer",
      avatar: "/placeholder.svg",
      location: i18n.language === 'en' ? "Haifa" : "חיפה",
      rate: i18n.language === 'en' ? "$130/hour" : "130$/שעה",
      description: "מהנדס DevOps עם ניסיון נרחב בתשתיות ענן",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      rating: 4.7,
      projectsCompleted: 28,
      availability: i18n.language === 'en' ? "Available immediately" : "זמין מיידית",
      languages: i18n.language === 'en' ? ["Hebrew", "English"] : ["עברית", "אנגלית"],
      experience: i18n.language === 'en' ? "6 Years" : "6 שנים",
    },
    {
      id: 4,
      name: "רונית דביר",
      role: "Product Manager",
      avatar: "/placeholder.svg",
      location: i18n.language === 'en' ? "Ramat Gan" : "רמת גן",
      rate: i18n.language === 'en' ? "$120/hour" : "120$/שעה",
      description: "מנהלת מוצר עם התמחות במוצרי B2B",
      skills: ["Product Strategy", "Agile", "User Research"],
      rating: 4.9,
      projectsCompleted: 23,
      availability: i18n.language === 'en' ? "Available in 2 weeks" : "זמין תוך שבועיים",
      languages: i18n.language === 'en' ? ["Hebrew", "English", "French"] : ["עברית", "אנגלית", "צרפתית"],
      experience: i18n.language === 'en' ? "8 Years" : "8 שנים",
    }
  ];

  const selectedFreelancerData = featuredFreelancers.find(f => f.id === selectedFreelancer);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMessageDialogOpen(false);
    toast({
      title: i18n.language === 'en' ? "Message Sent" : "ההודעה נשלחה",
      description: i18n.language === 'en' ? 
        "We'll notify them of your message" : 
        "נעדכן אותם על ההודעה שלך",
    });
  };

  return (
    <section className="py-8 bg-secondary/5">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                {i18n.language === 'en' ? 'People' : 'אנשים'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {i18n.language === 'en' 
                  ? 'Professional experts' 
                  : 'אנשי מקצוע'}
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate("/freelancers")}
              className="hover-gradient"
            >
              {i18n.language === 'en' ? 'All People' : 'כל האנשים'}
            </Button>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredFreelancers.map((freelancer) => (
                <CarouselItem key={freelancer.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="h-[280px] overflow-hidden hover:shadow-lg transition-shadow relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                    </div>
                    <CardContent className="p-4 relative z-10 h-full flex flex-col">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-12 w-12 ring-2 ring-white/20">
                            <AvatarImage src={freelancer.avatar} />
                            <AvatarFallback>
                              <User className="h-6 w-6" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-bold text-lg text-white line-clamp-1">{freelancer.name}</h3>
                            <p className="text-sm text-gray-300 line-clamp-1">{freelancer.role}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-400 mt-0.5">
                              <MapPin className="h-3 w-3" />
                              <span>{freelancer.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Star className="h-4 w-4 text-yellow-400 shrink-0" />
                            <span>{freelancer.rating}</span>
                            <span className="text-sm">
                              ({freelancer.projectsCompleted} {i18n.language === 'en' ? 'projects' : 'פרויקטים'})
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {freelancer.skills.slice(0, 2).map((skill, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 text-xs rounded-full bg-primary/90 text-white"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <p className="text-sm text-gray-300 line-clamp-2">
                            {freelancer.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto space-y-2">
                        <div className="flex items-center justify-between text-sm text-gray-300">
                          <span className="line-clamp-1">{freelancer.rate}</span>
                          <span className="line-clamp-1">{freelancer.availability}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="secondary" 
                            size="sm"
                            className="flex-1"
                            onClick={() => {
                              setSelectedFreelancer(freelancer.id);
                              setIsProfileDialogOpen(true);
                            }}
                          >
                            {i18n.language === 'en' ? 'View Profile' : 'פרטים נוספים'}
                          </Button>
                          <Button 
                            variant="secondary" 
                            size="sm"
                            className="flex-1"
                            onClick={() => {
                              setSelectedFreelancer(freelancer.id);
                              setIsMessageDialogOpen(true);
                            }}
                          >
                            {i18n.language === 'en' ? 'Send Message' : 'שלח הודעה'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Profile Dialog */}
      <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedFreelancerData?.name}
            </DialogTitle>
            <DialogDescription>
              {selectedFreelancerData?.role}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{selectedFreelancerData?.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>{selectedFreelancerData?.rating} ({selectedFreelancerData?.projectsCompleted} פרויקטים)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{selectedFreelancerData?.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Building2 className="h-4 w-4" />
                <span>{selectedFreelancerData?.availability}</span>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">תיאור</h3>
              <p className="text-muted-foreground">
                {selectedFreelancerData?.description}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-semibold mb-2">התמחויות</h3>
              <div className="flex flex-wrap gap-2">
                {selectedFreelancerData?.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-semibold mb-2">שפות</h3>
              <div className="flex flex-wrap gap-2">
                {selectedFreelancerData?.languages.map((language, index) => (
                  <Badge key={index} variant="outline">{language}</Badge>
                ))}
              </div>
            </div>

            {/* Rate */}
            <div>
              <h3 className="font-semibold mb-2">תעריף</h3>
              <p className="text-xl font-semibold text-primary">
                {selectedFreelancerData?.rate}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button 
                className="flex-1" 
                onClick={() => {
                  setIsProfileDialogOpen(false);
                  setIsMessageDialogOpen(true);
                }}
              >
                {i18n.language === 'en' ? 'Send Message' : 'שלח הודעה'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Message Dialog */}
      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {i18n.language === 'en' 
                ? `Send message to ${selectedFreelancerData?.name}`
                : `שליחת הודעה ל${selectedFreelancerData?.name}`}
            </DialogTitle>
            <DialogDescription>
              {i18n.language === 'en'
                ? 'Write your message below'
                : 'כתוב/י את ההודעה שלך כאן'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleMessageSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">
                {i18n.language === 'en' ? 'Message' : 'הודעה'}
              </Label>
              <Textarea 
                id="message" 
                required 
                placeholder={i18n.language === 'en' 
                  ? "Write your message here..." 
                  : "כתוב/י את ההודעה שלך כאן..."
                }
              />
            </div>
            <Button type="submit" className="w-full">
              {i18n.language === 'en' ? 'Send Message' : 'שלח הודעה'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedFreelancers;
