import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MessageCircle, Facebook, Send, Group } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const groups = [
  {
    name: "משרות הייטק ודיגיטל",
    members: "52K חברים",
    description: "קבוצת פייסבוק מובילה למשרות בתחום ההייטק והדיגיטל",
    image: "photo-1552664730-d307ca884978",
    url: "https://www.facebook.com/groups/jobs.digital.tech",
    platforms: ["facebook"],
    longDescription: "קבוצת פייסבוק מובילה למשרות בתחום ההייטק והדיגיטל. הקבוצה מיועדת לאנשי מקצוע המחפשים משרות בתחום, ומפרסמת מדי יום עשרות משרות חדשות מהחברות המובילות במשק.",
    benefits: [
      "גישה למשרות בלעדיות",
      "נטוורקינג עם אנשי מקצוע",
      "עדכונים שוטפים על הזדמנויות תעסוקה"
    ]
  },
  {
    name: "הקהילה הישראלית למשרות שיווק",
    members: "35K חברים",
    description: "קהילה מקצועית לאנשי שיווק - משרות, טיפים והזדמנויות",
    image: "photo-1461749280684-dccba630e2f6",
    url: "https://www.facebook.com/groups/marketing.jobs.israel",
    platforms: ["facebook", "telegram"],
    longDescription: "הקהילה הגדולה בישראל לאנשי שיווק. מקום מפגש לשיתוף ידע, משרות והזדמנויות בתחום השיווק הדיגיטלי.",
    benefits: [
      "שיתוף ידע מקצועי",
      "הזדמנויות קריירה",
      "נטוורקינג מקצועי"
    ]
  },
  {
    name: "UX/UI Israel Jobs",
    members: "28K חברים",
    description: "הקהילה הגדולה בישראל למשרות UX/UI ועיצוב מוצר",
    image: "photo-1586717791821-3f44a563fa4c",
    url: "https://www.facebook.com/groups/ux.ui.jobs",
    platforms: ["facebook", "linkedin"],
    longDescription: "קהילה מקצועית המתמקדת במשרות ואפשרויות קריירה בתחום ה-UX/UI. הקהילה מספקת הזדמנויות תעסוקה, שיתוף ידע וטיפים מקצועיים.",
    benefits: [
      "משרות בתחום העיצוב",
      "ביקורות פורטפוליו",
      "שיתוף פרויקטים"
    ]
  },
  {
    name: "משרות תוכן וקופירייטינג",
    members: "22K חברים",
    description: "קהילה לאנשי תוכן - משרות, שיתופי פעולה והזדמנויות",
    image: "photo-1499750310107-5fef28a66643",
    url: "https://www.facebook.com/groups/content.writing.jobs",
    platforms: ["facebook", "whatsapp"],
    longDescription: "קהילה מקצועית לכותבי תוכן וקופירייטרים. מקום מפגש לשיתוף הזדמנויות תעסוקה, טיפים מקצועיים ושיתופי פעולה.",
    benefits: [
      "הזדמנויות פרילנס",
      "פרויקטים מיוחדים",
      "שיתופי פעולה מקצועיים"
    ]
  }
];

const Groups = () => {
  const isAdmin = false;
  console.log("Rendering Groups page, isAdmin:", isAdmin);

  return (
    <MainLayout>
      <main className="container py-12 animate-fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                קהילות מקצועיות
              </h1>
              <p className="text-muted-foreground">
                הצטרפו לקהילות המובילות בתחום השיווק הדיגיטלי
              </p>
            </div>
            {isAdmin && (
              <Button 
                variant="outline" 
                className="hover:bg-primary/10 transition-all duration-300"
              >
                <Users className="ml-2 h-4 w-4" />
                צור קהילה חדשה
              </Button>
            )}
          </div>

          <div className="max-w-full mx-auto px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {groups.map((group, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-[240px] relative group">
                      <div
                        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(https://images.unsplash.com/${group.image}?w=400)`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 backdrop-blur-[2px]"></div>
                      </div>
                      <div className="p-6 relative z-10">
                        <div className="flex items-start gap-3 mb-3">
                          <Avatar className="h-14 w-14 ring-2 ring-white/20 transition-transform group-hover:scale-110">
                            {group.image ? (
                              <AvatarImage
                                src={`https://images.unsplash.com/${group.image}?w=100`}
                                alt={group.name}
                              />
                            ) : null}
                            <AvatarFallback>
                              <Group className="h-6 w-6" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-bold text-xl text-white group-hover:text-primary transition-colors">
                              {group.name}
                            </h3>
                            <span className="text-sm text-gray-300 flex items-center">
                              <Users className="inline-block ml-1 h-3 w-3" />
                              {group.members}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                          {group.description}
                        </p>
                        <div className="space-y-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="secondary"
                                size="sm"
                                className="w-full bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white transition-colors"
                              >
                                פרטים נוספים על הקהילה
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] animate-scale-in">
                              <DialogHeader>
                                <DialogTitle>{group.name}</DialogTitle>
                                <DialogDescription>
                                  <div className="space-y-4 mt-4">
                                    <p className="text-sm">{group.longDescription}</p>
                                    <div>
                                      <h4 className="font-semibold mb-2">יתרונות הקהילה:</h4>
                                      <ul className="list-disc list-inside space-y-1">
                                        {group.benefits.map((benefit, idx) => (
                                          <li key={idx} className="text-sm">{benefit}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                      {group.platforms.map((platform, idx) => (
                                        <Button
                                          key={idx}
                                          variant="outline"
                                          size="sm"
                                          className="flex items-center gap-2 hover:bg-primary/10 transition-colors"
                                          onClick={() => window.open(group.url, '_blank')}
                                        >
                                          {platform === "facebook" && (
                                            <>
                                              <Facebook className="h-4 w-4" />
                                              הצטרף/י לקבוצת פייסבוק
                                            </>
                                          )}
                                          {platform === "whatsapp" && (
                                            <>
                                              <MessageCircle className="h-4 w-4" />
                                              הצטרף/י לקבוצת וואטסאפ
                                            </>
                                          )}
                                          {platform === "telegram" && (
                                            <>
                                              <Send className="h-4 w-4" />
                                              הצטרף/י לערוץ טלגרם
                                            </>
                                          )}
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-xs text-gray-400">זמין ב:</span>
                            <div className="flex items-center gap-2 justify-center">
                              {group.platforms.map((platform, idx) => (
                                <Button
                                  key={idx}
                                  variant="ghost"
                                  size="sm"
                                  className="p-1 h-auto hover:bg-white/10 transition-colors"
                                  onClick={() => window.open(group.url, '_blank')}
                                >
                                  {platform === "facebook" && <Facebook className="h-4 w-4 text-white" />}
                                  {platform === "whatsapp" && <MessageCircle className="h-4 w-4 text-white" />}
                                  {platform === "telegram" && <Send className="h-4 w-4 text-white" />}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex left-2" />
              <CarouselNext className="hidden md:flex right-2" />
            </Carousel>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Groups;
