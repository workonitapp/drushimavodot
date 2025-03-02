
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, FileText, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const featuredContent = [
  {
    id: 1,
    title: {
      he: "איך להתחיל עם מערכת האתר - מדריך למשתמש חדש",
      en: "Getting Started with Our Platform - New User Guide"
    },
    excerpt: {
      he: "מדריך מקיף שיעזור לך להתחיל לעבוד עם מערכת האתר בצורה יעילה ומהירה",
      en: "A comprehensive guide to help you get started with our platform efficiently"
    },
    image: "photo-1486312338219-ce68d2c6f44d",
    category: { he: "מדריך למשתמש", en: "User Guide" }
  },
  {
    id: 2,
    title: "טרנדים בשוק העבודה 2024",
    excerpt: "סקירה מקיפה של המגמות החמות בשוק העבודה והטכנולוגיה",
    image: "photo-1498050108023-c5249f4df085",
    category: { he: "מגמות בשוק", en: "Market Trends" }
  },
  {
    id: 3,
    title: "טיפים לראיון עבודה בהייטק",
    excerpt: "מדריך מעשי להצלחה בראיונות עבודה בתעשיית ההייטק",
    image: "photo-1552664730-d307ca884978",
    category: { he: "קריירה", en: "Career" }
  },
  {
    id: 4,
    title: "איך לבנות קורות חיים אפקטיביים",
    excerpt: "המדריך המלא ליצירת קורות חיים שימשכו את תשומת לב המגייסים",
    image: "photo-1586717791821-3f44a563fa4c",
    category: { he: "טיפים מקצועיים", en: "Professional Tips" }
  },
  {
    id: 5,
    title: "מיתוג אישי בלינקדאין",
    excerpt: "כל מה שצריך לדעת על בניית נוכחות מקצועית ברשת החברתית",
    image: "photo-1611162617474-5b21e879e113",
    category: { he: "רשתות חברתיות", en: "Social Media" }
  },
  {
    id: 6,
    title: "המדריך למציאת עבודה בהייטק",
    excerpt: "טיפים, כלים ואסטרטגיות למציאת העבודה הבאה שלך בתעשייה",
    image: "photo-1585859615922-4c3081c7c276",
    category: { he: "חיפוש עבודה", en: "Job Search" }
  }
];

const FeaturedContent = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const firstRow = featuredContent.slice(0, 3);
  const secondRow = featuredContent.slice(3, 6);

  return (
    <section className="min-h-screen snap-start py-16">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text flex items-center gap-2">
                <FileText className="h-8 w-8 text-primary" />
                {isEnglish ? "Featured Content" : "תכנים"}
              </h2>
              <p className="text-xl text-muted-foreground">
                {isEnglish 
                  ? "Articles, guides and professional tips about the work world"
                  : "כתבות, מדריכים וטיפים מקצועיים על עולם העבודה"}
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate("/content")}
              className="hover-gradient"
            >
              <Plus className="ml-2 h-4 w-4" />
              {isEnglish ? "All Content" : "כל התכנים"}
            </Button>
          </div>

          <div className="space-y-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {firstRow.map((content) => (
                  <CarouselItem key={content.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className="fun-card cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => navigate(`/content/articles/${content.id}`)}
                    >
                      <div className="relative h-40">
                        <img
                          src={`https://images.unsplash.com/${content.image}?w=600`}
                          alt={typeof content.title === 'string' ? content.title : (isEnglish ? content.title.en : content.title.he)}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-t-lg" />
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <span className="text-xs font-medium bg-primary/90 text-white px-2 py-1 rounded-full">
                            {typeof content.category === 'string' ? content.category : (isEnglish ? content.category.en : content.category.he)}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 line-clamp-1">
                          {typeof content.title === 'string' ? content.title : (isEnglish ? content.title.en : content.title.he)}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                          {typeof content.excerpt === 'string' ? content.excerpt : (isEnglish ? content.excerpt.en : content.excerpt.he)}
                        </p>
                        <div className="flex justify-end">
                          <Button 
                            variant="link" 
                            className="px-0 text-primary hover:no-underline"
                          >
                            {isEnglish ? "Read More" : "קרא עוד"}
                            {isEnglish ? <ArrowRight className="ml-1 h-4 w-4" /> : <ArrowLeft className="mr-1 h-4 w-4" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {secondRow.map((content) => (
                  <CarouselItem key={content.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className="fun-card cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => navigate(`/content/articles/${content.id}`)}
                    >
                      <div className="relative h-40">
                        <img
                          src={`https://images.unsplash.com/${content.image}?w=600`}
                          alt={typeof content.title === 'string' ? content.title : (isEnglish ? content.title.en : content.title.he)}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-t-lg" />
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <span className="text-xs font-medium bg-primary/90 text-white px-2 py-1 rounded-full">
                            {typeof content.category === 'string' ? content.category : (isEnglish ? content.category.en : content.category.he)}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 line-clamp-1">
                          {typeof content.title === 'string' ? content.title : (isEnglish ? content.title.en : content.title.he)}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                          {typeof content.excerpt === 'string' ? content.excerpt : (isEnglish ? content.excerpt.en : content.excerpt.he)}
                        </p>
                        <div className="flex justify-end">
                          <Button 
                            variant="link" 
                            className="px-0 text-primary hover:no-underline"
                          >
                            {isEnglish ? "Read More" : "קרא עוד"}
                            {isEnglish ? <ArrowRight className="ml-1 h-4 w-4" /> : <ArrowLeft className="mr-1 h-4 w-4" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
