import { Card } from "@/components/ui/card";
import { Brain, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "פרילנסרים",
    titleEn: "Freelancers",
    description: "מצא את הפרילנסר המושלם לפרויקט שלך",
    descriptionEn: "Find the perfect freelancer for your project",
    icon: User,
    route: "/freelancers",
    gradient: "from-[#9b87f5] to-[#D946EF]",
    chatPreview: [
      {
        name: "John Smith",
        role: "Full Stack Development",
        rating: "4.8",
        rate: "$150/hr",
        skills: ["System Architecture", "Technical Leadership", "Cloud Solutions"]
      },
      {
        name: "Michael Chen",
        role: "Career Planning",
        rating: "4.8",
        rate: "$100/hr",
        skills: ["Professional Development", "Skills Assessment", "Career Coaching"]
      }
    ]
  },
  {
    title: "סוכני AI",
    titleEn: "AI Agents",
    description: "גלה את הכוח של בינה מלאכותית בעסק שלך",
    descriptionEn: "Discover the power of AI in your business",
    icon: Brain,
    route: "/ai-agents",
    gradient: "from-[#0EA5E9] to-[#8B5CF6]",
    chatPreview: [
      {
        name: "Hari",
        role: "HR & Recruitment Intelligence",
        isPremium: true
      },
      {
        name: "Carmit",
        role: "Career Management AI",
        isPremium: true
      }
    ]
  }
];

const AdditionalServices = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 bg-secondary/30">      
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-none glass-card hover:shadow-2xl transition-all duration-500 animate-scale-in min-h-[300px] cursor-pointer dark:bg-black/40 bg-white/80"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(service.route)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="p-6 relative z-10 h-full flex">
                  <div className="flex-1">
                    <div className="mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 mb-4 shadow-lg floating`}>
                        <service.icon className="w-full h-full text-white" />
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D946EF]">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.titleEn}
                        </p>
                      </div>

                      <div className="mt-2 space-y-1">
                        <p className="text-base text-foreground">
                          {service.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {service.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 bg-card dark:bg-[#1A1F2C]/95 rounded-lg p-2 mr-4 backdrop-blur-sm self-stretch overflow-hidden border border-border dark:border-white/10">
                    <div className="space-y-1.5">
                      {service.chatPreview.slice(0, 2).map((preview, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-1.5 p-1 rounded-lg hover:bg-muted/50 dark:hover:bg-white/5 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-muted to-background dark:from-[#2A2F3C] dark:to-[#1A1F2C] flex items-center justify-center flex-shrink-0 border border-border dark:border-white/10">
                            {preview.isPremium ? (
                              <Brain className="w-3 h-3 text-primary dark:text-[#D6BCFA]" />
                            ) : (
                              <User className="w-3 h-3 text-primary dark:text-[#D6BCFA]" />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="font-semibold text-[11px] text-foreground dark:text-white/90 truncate">
                                {preview.name}
                              </span>
                              {preview.isPremium && (
                                <span className="px-1 py-0.5 text-[9px] rounded-full bg-primary/20 text-primary dark:bg-[#D6BCFA]/20 dark:text-[#D6BCFA] whitespace-nowrap">
                                  Premium
                                </span>
                              )}
                            </div>
                            <p className="text-[9px] text-muted-foreground dark:text-white/60 truncate">
                              {preview.role}
                            </p>
                            {!preview.isPremium && preview.skills && (
                              <div className="flex flex-wrap gap-1 mt-0.5">
                                {preview.skills.slice(0, 1).map((skill, skillIdx) => (
                                  <span 
                                    key={skillIdx}
                                    className="px-1 py-0.5 text-[9px] rounded-full bg-primary/20 text-primary dark:bg-[#D6BCFA]/20 dark:text-[#D6BCFA] truncate"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;