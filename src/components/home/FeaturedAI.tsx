import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Brain, MessageCircle, Plus, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const featuredAI = [
  {
    id: 1,
    name: "Carrie - AI Recruiter",
    hebrewName: "קארי - AI לגיוס",
    role: "Recruitment and Placement Expert",
    hebrewRole: "מומחה גיוס והשמה",
    avatar: "/placeholder.svg",
    type: "Premium",
    rate: "Free during launch period",
    hebrewRate: "חינם לתקופת השקה",
    description: "Advanced AI assistant specializing in recruitment and placement, including resume analysis and interviews",
    hebrewDescription: "עוזר AI מתקדם המתמחה בגיוס והשמה, כולל ניתוח קורות חיים וראיונות",
    capabilities: {
      en: ["Resume Analysis", "Interview Prep", "Candidate Search"],
      he: ["ניתוח קורות חיים", "הכנה לראיונות", "חיפוש מועמדים"]
    },
    rating: 4.9,
    conversations: 1250,
    availability: { en: "Available 24/7", he: "זמין 24/7" },
    languages: { en: ["English", "Hebrew"], he: ["עברית", "אנגלית"] },
  },
  {
    id: 2,
    name: "Carmen - Career AI",
    hebrewName: "כרמית - AI לניהול קריירה",
    role: "Personal Career Advisor",
    hebrewRole: "יועצת קריירה אישית",
    avatar: "/placeholder.svg",
    type: "Premium",
    rate: "Free during launch period",
    hebrewRate: "חינם לתקופת השקה",
    description: "AI mentor for career development and professional growth",
    hebrewDescription: "מנטורית AI לפיתוח קריירה וצמיחה מקצועית",
    capabilities: {
      en: ["Career Planning", "Professional Development", "Career Guidance"],
      he: ["תכנון קריירה", "פיתוח מקצועי", "הכוונה תעסוקתית"]
    },
    rating: 4.8,
    conversations: 980,
    availability: { en: "Available 24/7", he: "זמין 24/7" },
    languages: { en: ["English", "Hebrew"], he: ["עברית", "אנגלית"] },
  },
  {
    id: 3,
    name: "Dan - Content AI",
    hebrewName: "דן - AI לכתיבת תוכן",
    role: "Content and Marketing Expert",
    hebrewRole: "מומחה תוכן ושיווק",
    avatar: "/placeholder.svg",
    type: "Premium",
    rate: "Free during launch period",
    hebrewRate: "חינם לתקופת השקה",
    description: "AI assistant for creating marketing and professional content",
    hebrewDescription: "עוזר AI ליצירת תוכן שיווקי ומקצועי",
    capabilities: {
      en: ["Content Writing", "Editing", "Optimization"],
      he: ["כתיבת תוכן", "עריכה", "אופטימיזציה"]
    },
    rating: 4.7,
    conversations: 850,
    availability: { en: "Available 24/7", he: "זמין 24/7" },
    languages: { en: ["English", "Hebrew"], he: ["עברית", "אנגלית"] },
  },
  {
    id: 4,
    name: "Maya - Job Search AI",
    hebrewName: "מיה - AI למציאת משרות",
    role: "Job Search Expert",
    hebrewRole: "מומחית חיפוש עבודה",
    avatar: "/placeholder.svg",
    type: "Premium",
    rate: "Free during launch period",
    hebrewRate: "חינם לתקופת השקה",
    description: "AI assistant for finding personalized job opportunities",
    hebrewDescription: "עוזרת AI למציאת משרות מותאמות אישית",
    capabilities: {
      en: ["Job Search", "Personal Matching", "Application Tips"],
      he: ["חיפוש משרות", "התאמה אישית", "טיפים לקבלה"]
    },
    rating: 4.9,
    conversations: 720,
    availability: { en: "Available 24/7", he: "זמין 24/7" },
    languages: { en: ["English", "Hebrew"], he: ["עברית", "אנגלית"] },
  }
];

const FeaturedAI = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="py-8 bg-secondary/5">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">
                  {isEnglish ? "AI Agents" : "סוכני AI"}
                </h2>
                <Badge variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground text-[10px]">
                  {isEnglish ? "Coming Soon" : "בקרוב"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {isEnglish 
                  ? "Smart AI agents to assist with your career" 
                  : "סוכני AI חכמים לסיוע בקריירה שלך"}
              </p>
            </div>
            <Button 
              variant="outline" 
              disabled
              className="hover-gradient cursor-not-allowed opacity-50"
            >
              <Plus className="ml-2 h-4 w-4" />
              {isEnglish ? "All Agents" : "כל הסוכנים"}
            </Button>
          </div>

          <div className="relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-20">
              <div className="text-center space-y-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground text-lg py-1 px-3">
                  {isEnglish ? "Coming Soon" : "בקרוב"}
                </Badge>
                <p className="text-muted-foreground">
                  {isEnglish 
                    ? "AI agents will be available soon!" 
                    : "סוכני AI יהיו זמינים בקרוב!"}
                </p>
              </div>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full opacity-50"
            >
              <CarouselContent className="-ml-4">
                {featuredAI.map((agent) => (
                  <CarouselItem key={agent.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Card className="h-[280px] overflow-hidden hover:shadow-lg transition-shadow relative group cursor-not-allowed">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                      </div>
                      <CardContent className="p-4 relative z-10 h-full flex flex-col">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Avatar className="h-12 w-12 ring-2 ring-white/20">
                              <AvatarImage src={agent.avatar} />
                              <AvatarFallback>
                                <Brain className="h-6 w-6" />
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-bold text-lg text-white line-clamp-1">
                                {isEnglish ? agent.name : agent.hebrewName}
                              </h3>
                              <p className="text-sm text-gray-300 line-clamp-1">
                                {isEnglish ? agent.role : agent.hebrewRole}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Star className="h-4 w-4 text-yellow-400 shrink-0" />
                              <span>{agent.rating}</span>
                              <span className="text-sm">({agent.conversations} {isEnglish ? "conversations" : "שיחות"})</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              {(isEnglish ? agent.capabilities.en : agent.capabilities.he).slice(0, 2).map((capability, index) => (
                                <span 
                                  key={index}
                                  className="px-2 py-1 text-xs rounded-full bg-primary/90 text-white"
                                >
                                  {capability}
                                </span>
                              ))}
                            </div>

                            <p className="text-sm text-gray-300 line-clamp-2">
                              {isEnglish ? agent.description : agent.hebrewDescription}
                            </p>
                          </div>
                        </div>

                        <div className="mt-auto space-y-2">
                          <div className="flex items-center justify-between text-sm text-gray-300">
                            <span className="line-clamp-1">
                              {isEnglish ? agent.rate : agent.hebrewRate}
                            </span>
                            <span className="line-clamp-1">
                              {isEnglish ? agent.availability.en : agent.availability.he}
                            </span>
                          </div>
                          <Button 
                            variant="secondary" 
                            size="sm"
                            className="w-full cursor-not-allowed"
                            disabled
                          >
                            <MessageCircle className="ml-2 h-4 w-4" />
                            {isEnglish ? "Start Chat" : "התחל שיחה"}
                          </Button>
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
      </div>
    </section>
  );
};

export default FeaturedAI;
