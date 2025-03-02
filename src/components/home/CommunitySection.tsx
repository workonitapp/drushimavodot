import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  MessageCircle, 
  Send, 
  Linkedin,
  MapPin,
  Building,
  Briefcase,
  Globe2,
  Medal,
  Clock,
  HeartPulse,
  Home,
  Laptop,
  ShoppingBag,
  Users,
  Star,
  Flag,
  Building2,
  ChefHat,
  GraduationCap,
  Glasses,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const communityGroups = [
  {
    name: "דרושים - עבודות",
    members: "170K+ Members",
    description: "The leading group for jobs and work opportunities in Israel",
    image: "photo-1552664730-d307ca884978",
    platforms: ["facebook", "linkedin", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/avodot/",
      linkedin: "https://www.linkedin.com/groups/8876401/",
      whatsapp: "https://chat.whatsapp.com/FPIFkH4RUecFIMjdNUhTHd",
      telegram: "https://t.me/drushimavodotcomm"
    }
  },
  {
    name: "מגייסים - מגייסות",
    members: "20K+ Members",
    description: "Community for recruiters in Israel",
    image: "photo-1558403194-611308249627",
    platforms: ["facebook", "whatsapp"],
    links: {
      facebook: "https://www.facebook.com/groups/452769241973322/",
      whatsapp: "https://chat.whatsapp.com/Bc9RaCe5qEqJFpxiYj4Vsr"
    }
  },
  {
    name: "דרושים - עבודות היי-טק",
    members: "95K+ Members",
    description: "Leading high-tech community for industry opportunities",
    image: "photo-1498050108023-c5249f4df085",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/1541377239216681/",
      whatsapp: "https://chat.whatsapp.com/DWsLxAvRzOR9IjBvxSkrJH",
      telegram: "t.me/dahitech"
    }
  },
  {
    name: "דרושים - עבודות פרסום, שיווק ומדיה",
    members: "82K+ Members",
    description: "Professional community for marketing, advertising and media professionals",
    image: "photo-1551434678-e076c223a692",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/141731599757253/",
      whatsapp: "https://chat.whatsapp.com/CqmG0cmfTYz2PXGNgZhRfk",
      telegram: "https://t.me/dashivuk"
    }
  },
  {
    name: "דרושים - עבודות בכירים",
    members: "25K+ Members",
    description: "Senior positions and management roles",
    image: "photo-1573496359142-b8d87734a5a2",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/899366490459595/",
      whatsapp: "https://chat.whatsapp.com/EfhXppkxGfPCZ0RjlX8MEP",
      telegram: "https://t.me/+StraNO-vvEthNDQ0"
    }
  },
  {
    name: "דרושים - עבודות זמניות",
    members: "85K+ חברים",
    description: "משרות זמניות ועבודות מזדמנות",
    image: "photo-1554774853-719586f82d77",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/1587590338212583/",
      whatsapp: "https://chat.whatsapp.com/EIvel8UhofLLyDaob9UVwU",
      telegram: "http://t.me/dazmaniot"
    }
  },
  {
    name: "דרושים - עבודות סיעוד, אחים ואחיות",
    members: "75K+ חברים",
    description: "קהילת אנשי רפואה וסיעוד",
    image: "photo-1576091160399-112ba8d25d1d",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/433347245272468/",
      whatsapp: "https://chat.whatsapp.com/CMcZylQJmROK7yiOlOlUv9",
      telegram: "https://t.me/+a_cJmYT80HQ3Mzc0"
    }
  },
  {
    name: "דרושים - עבודות מהבית",
    members: "78K+ חברים",
    description: "הקהילה הגדולה בישראל למשרות מהבית ועבודה מרחוק",
    image: "photo-1586717791821-3f44a563fa4c",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/1734932686780514/",
      whatsapp: "https://chat.whatsapp.com/CmFyrlzGZYJ8hgiiPbsfe6",
      telegram: "t.me/dabait"
    }
  },
  {
    name: "דרושים - עבודות פרילנסרים",
    members: "65K+ חברים",
    description: "קהילת פרילנסרים - פרויקטים והזדמנויות עבודה",
    image: "photo-1499750310107-5fef28a66643",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/458346604817578/",
      whatsapp: "https://chat.whatsapp.com/DQONEBWvx7yBLwhrSQIxdi",
      telegram: "https://t.me/dafreelancer"
    }
  },
  {
    name: "דרושים - עבודות מכירות",
    members: "35K+ חברים",
    description: "משרות ועבודות בתחום המכירות",
    image: "photo-1556745757-8d76bdb6984b",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/472835270147782/",
      whatsapp: "https://chat.whatsapp.com/Kk3PHW9iyw94o1niHCxxDD",
      telegram: "https://t.me/damehirot"
    }
  },
  {
    name: "דרושים - עבודות הורים",
    members: "30K+ חברים",
    description: "משרות ועבודות מותאמות להורים",
    image: "photo-1559811814-e2c57b5e69df",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/138468543420328/",
      whatsapp: "https://chat.whatsapp.com/KXuZnu3hxzVBjSYBRoVDd3",
      telegram: "https://t.me/+c4jzEx4_O9diNTJk"
    }
  },
  {
    name: "דרושים - עבודות 50+",
    members: "25K+ חברים",
    description: "משרות ועבודות לגיל השלישי",
    image: "photo-1501854140801-50d01698950b",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/227819841441945/",
      whatsapp: "https://chat.whatsapp.com/HdETqUoZC5e0aeDPyyibRB",
      telegram: "https://t.me/+ogofcgeRts04MDBk"
    }
  },
  {
    name: "דרושים - עבודות צעירים",
    members: "35K+ חברים",
    description: "משרות ועבודות לצעירים ומתחילים",
    image: "photo-1529156069898-49953e39b3ac",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/478823543360038/",
      whatsapp: "https://chat.whatsapp.com/JCncTsECkbS7pwbVTPda08",
      telegram: "https://t.me/dazeirim"
    }
  },
  {
    name: "דרושים - עבודות סטודנטים",
    members: "25K+ חברים",
    description: "משרות ועבודות לסטודנטים",
    image: "photo-1523240795612-9a054b0db644",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/1385120569018558/",
      whatsapp: "https://chat.whatsapp.com/example",
      telegram: "https://t.me/example"
    }
  },
  {
    name: "דרושים - עבודות נדל״ן",
    members: "30K+ חברים",
    description: "משרות ועבודות בתחום הנדל״ן",
    image: "photo-1560518883-ce09059eeffa",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/1460828707424844/",
      whatsapp: "https://chat.whatsapp.com/HmmHClN4GF1Jvkrh9buE5K",
      telegram: "t.me/danadlan"
    }
  },
  {
    name: "דרושים - עבודות מסעדות",
    members: "20K+ חברים",
    description: "משרות ועבודות בתחום המסעדנות",
    image: "photo-1552566626-52f8b828add9",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/1133847413786558/",
      whatsapp: "https://chat.whatsapp.com/K27d4KLNJsJHu8Xp16AFZV",
      telegram: "t.me/damisadot"
    }
  },
  {
    name: "דרושים - עבודות מרכז",
    members: "60K+ חברים",
    description: "משרות ועבודות באזור המרכז",
    image: "photo-1449824913935-59a10b8d2000",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/1942419502675158/",
      whatsapp: "https://chat.whatsapp.com/C9ncFLpiy1gGXgnG5ojmSh",
      telegram: "https://t.me/damercaz"
    }
  },
  {
    name: "דרושים - עבודות ירושלים",
    members: "55K+ חברים",
    description: "משרות ועבודות באזור ירושלים והסביבה",
    image: "photo-1426604966848-d7adac402bff",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/2022221658076771/",
      whatsapp: "https://chat.whatsapp.com/DqGMUqxOwpW61Qmy6W4SFJ",
      telegram: "t.me/dajerusalem"
    }
  },
  {
    name: "דרושים - עבודות דרום",
    members: "50K+ חברים",
    description: "משרות ועבודות באזור הדרום",
    image: "photo-1470770841072-f978cf4d019e",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/229792184578804/",
      whatsapp: "https://chat.whatsapp.com/KabXCavysSALO4MZVRHovG",
      telegram: "https://t.me/dadarom"
    }
  },
  {
    name: "דרושים - עבודות שרון",
    members: "45K+ חברים",
    description: "משרות ועבודות באזור השרון",
    image: "photo-1497366216548-37526070297c",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/360496854765284/",
      whatsapp: "https://chat.whatsapp.com/Dc1kkHnV4c9B9EmJ029Au2",
      telegram: "https://t.me/dahasharon"
    }
  },
  {
    name: "דרושים - עבודות שפלה",
    members: "40K+ חברים",
    description: "משרות ועבודות באזור השפלה",
    image: "photo-1504384308090-c894fdcc538d",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/290639378322152/",
      whatsapp: "https://chat.whatsapp.com/F2taMyjww15H2M8Abfs0AH",
      telegram: "https://t.me/dashfela"
    }
  },
  {
    name: "דרושים - עבודות צפון",
    members: "45K+ חברים",
    description: "משרות ועבודות באזור הצפון",
    image: "photo-1506059612708-99d6c258160e",
    platforms: ["facebook", "whatsapp", "telegram"],
    links: {
      facebook: "https://www.facebook.com/groups/1999219780127084/",
      whatsapp: "https://chat.whatsapp.com/Kb44oak7Jq08OvZlf6hJZz",
      telegram: "t.me/dazafon"
    }
  }
];

const CommunitySection = () => {
  const [showAll, setShowAll] = useState(false);
  const { t, i18n } = useTranslation();
  
  const getCommunityIcon = (name: string) => {
    if (name.includes("מרכז") || 
        name.includes("ירושלים") || 
        name.includes("דרום") || 
        name.includes("שרון") || 
        name.includes("שפלה") || 
        name.includes("צפון")) {
      return <MapPin className="h-4 w-4 text-primary" />;
    }
    
    switch (name) {
      case "דרושים - עבודות":
        return <Building className="h-4 w-4 text-primary" />;
      case "מגייסים - מגייסות":
        return <Users className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות היי-טק":
        return <Laptop className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות פרסום, שיווק ומדיה":
        return <Globe2 className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות בכירים":
        return <Briefcase className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות זמניות":
        return <Clock className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות סיעוד, אחים ואחיות":
        return <HeartPulse className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות מהבית":
        return <Home className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות פרילנסרים":
        return <Flag className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות מכירות":
        return <ShoppingBag className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות הורים":
        return <Medal className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות 50+":
        return <Glasses className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות צעירים":
        return <Star className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות סטודנטים":
        return <GraduationCap className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות נדל״ן":
        return <Building2 className="h-4 w-4 text-primary" />;
      case "דרושים - עבודות מסעדות":
        return <ChefHat className="h-4 w-4 text-primary" />;
      default:
        return <Building className="h-4 w-4 text-primary" />;
    }
  };

  const CommunityItem = ({ group }: { group: typeof communityGroups[0] }) => (
    <div className="flex flex-col w-[180px] h-[100px] p-2 rounded-md transition-colors border border-primary/10 bg-white/50 backdrop-blur-sm hover:bg-primary/5">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="bg-primary/5 p-1.5 rounded-full">
          {getCommunityIcon(group.name)}
        </div>
        <h3 className="text-sm font-medium leading-tight">{group.name}</h3>
      </div>
      <div className="flex gap-1 justify-center mt-auto">
        {group.platforms.map((platform) => (
          <Button
            key={platform}
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 hover:bg-secondary"
            onClick={() => window.open(group.links[platform], '_blank')}
          >
            {platform === "facebook" && <Facebook className="h-3.5 w-3.5" />}
            {platform === "linkedin" && <Linkedin className="h-3.5 w-3.5" />}
            {platform === "whatsapp" && <MessageCircle className="h-3.5 w-3.5" />}
            {platform === "telegram" && <Send className="h-3.5 w-3.5" />}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="space-y-1 mb-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                {i18n.language === 'en' ? 'Communities' : 'קהילות'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {i18n.language === 'en' 
                  ? 'Join our professional communities' 
                  : 'הצטרפו לקהילות המקצועיות בתחום'}
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={() => setShowAll(!showAll)}
              className="text-primary hover:text-primary/80"
            >
              {showAll ? (
                <>
                  {i18n.language === 'en' ? 'Show Less' : 'הצג פחות'}
                  <ChevronUp className="mr-2 h-4 w-4" />
                </>
              ) : (
                <>
                  {i18n.language === 'en' ? 'All Communities' : 'כל הקהילות'}
                  <ChevronDown className="mr-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          {showAll ? (
            <div className="flex flex-wrap gap-3 justify-center">
              {communityGroups.map((group, index) => (
                <CommunityItem key={group.name} group={group} />
              ))}
            </div>
          ) : (
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {[...communityGroups, ...communityGroups].map((group, index) => (
                    <CarouselItem 
                      key={`${group.name}-${index}`} 
                      className="pl-4 basis-[12.5%]"
                    >
                      <CommunityItem group={group} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute -left-12 top-0 bottom-0 flex items-center">
                  <CarouselPrevious className="relative left-0" />
                </div>
                <div className="absolute -right-12 top-0 bottom-0 flex items-center">
                  <CarouselNext className="relative right-0" />
                </div>
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
