import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  ChevronDown,
  Clock,
  GraduationCap,
  MapPin,
  Plus,
  Star,
  Users,
  Video,
  ShoppingCart,
  CreditCard,
  Check,
} from "lucide-react";
import { Course } from "@/types/course";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const dummyCourses: Course[] = [
  {
    id: "1",
    title: "Full Stack Development Bootcamp",
    description: "קורס מקיף המכסה את כל הטכנולוגיות הנדרשות לפיתוח מודרני",
    type: "frontal",
    price: 12000,
    instructor: {
      name: "דני כהן",
      title: "מפתח Full Stack בכיר",
      image: "/placeholder.svg",
    },
    duration: "3 חודשים",
    level: "intermediate",
    location: { he: "תל אביב", en: "Tel Aviv" },
    startDate: "2024-05-01",
    meetingsCount: 36,
    availableSeats: 5,
    rating: 4.8,
    studentsCount: 120,
    prerequisites: ["ידע בסיסי בתכנות", "אנגלית טכנית"],
  },
  {
    id: "2",
    title: "React & Node.js Master Course",
    description: "למד לבנות אפליקציות מודרניות עם React ו-Node.js",
    type: "digital",
    price: 990,
    instructor: {
      name: "רונית לוי",
      title: "מהנדסת תוכנה בכירה",
      image: "/placeholder.svg",
    },
    duration: "60 שעות",
    level: "advanced",
    videosCount: 180,
    totalHours: 60,
    certificateIncluded: true,
    rating: 4.9,
    studentsCount: 850,
  },
  {
    id: "3",
    title: "UI/UX Design Workshop",
    description: "סדנה מעשית לעיצוב ממשקי משתמש מודרניים",
    type: "frontal",
    price: 3500,
    instructor: {
      name: "מיכל ברק",
      title: "מעצבת UX ראשית",
      image: "/placeholder.svg",
    },
    duration: "5 מפגשים",
    level: "beginner",
    location: { he: "ירושלים", en: "Jerusalem" },
    startDate: "2024-04-15",
    meetingsCount: 5,
    availableSeats: 8,
    rating: 4.7,
    studentsCount: 45,
  },
  {
    id: "4",
    title: "AWS Cloud Architecture",
    description: "קורס דיגיטלי מקיף על ארכיטקטורת ענן ב-AWS",
    type: "digital",
    price: 1200,
    instructor: {
      name: "אלון דוד",
      title: "ארכיטקט פתרונות ענן",
      image: "/placeholder.svg",
    },
    duration: "40 שעות",
    level: "advanced",
    videosCount: 120,
    totalHours: 40,
    certificateIncluded: true,
    rating: 4.6,
    studentsCount: 320,
  },
];

export const CourseCard = ({ course }: { course: Course }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { toast } = useToast();
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const isEnglish = i18n.language === 'en';

  const handlePurchase = () => {
    setIsPurchaseDialogOpen(true);
  };

  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPurchaseDialogOpen(false);
    toast({
      title: isEnglish ? "Purchase Successful" : "הרכישה בוצעה בהצלחה",
      description: isEnglish ? "You will receive a confirmation email shortly" : "תקבל/י אימייל אישור בקרוב",
    });
  };

  const getLevelColor = (level: Course["level"]) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
    }
  };

  const getLevelText = (level: Course["level"]) => {
    switch (level) {
      case "beginner":
        return isEnglish ? "Beginner" : "מתחילים";
      case "intermediate":
        return isEnglish ? "Intermediate" : "בינוני";
      case "advanced":
        return isEnglish ? "Advanced" : "מתקדם";
    }
  };

  return (
    <>
      <Card className="w-[300px] h-[420px] flex flex-col">
        <CardHeader className="p-4">
          <div className="flex justify-between items-start mb-2">
            <Badge
              variant="secondary"
              className={`${course.type === "frontal" ? "bg-orange-100 text-orange-800" : "bg-blue-100 text-blue-800"}`}
            >
              {course.type === "frontal" ? (isEnglish ? "In Person" : "פרונטלי") : (isEnglish ? "Digital" : "דיגיטלי")}
            </Badge>
            <Badge variant="secondary" className={getLevelColor(course.level)}>
              {getLevelText(course.level)}
            </Badge>
          </div>
          <CardTitle className="text-lg">{course.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {course.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-secondary/20" />
            <div>
              <div className="text-sm font-medium">{course.instructor.name}</div>
              <div className="text-xs text-muted-foreground">
                {course.instructor.title}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {course.type === "frontal" ? (
              <>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{course.location ? (isEnglish ? course.location.en : course.location.he) : ""}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {new Date(course.startDate!).toLocaleDateString(isEnglish ? "en-US" : "he-IL")}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{isEnglish ? `${course.availableSeats} seats available` : `${course.availableSeats} מקומות פנויים`}</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-sm">
                  <Video className="h-4 w-4 text-muted-foreground" />
                  <span>{isEnglish ? `${course.videosCount} recorded lessons` : `${course.videosCount} שיעורים מוקלטים`}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{isEnglish ? `${course.totalHours} hours of content` : `${course.totalHours} שעות תוכן`}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {course.certificateIncluded ? (isEnglish ? "Includes certificate" : "כולל תעודה") : (isEnglish ? "No certificate" : "ללא תעודה")}
                  </span>
                </div>
              </>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{course.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({course.studentsCount} {isEnglish ? "students" : "סטודנטים"})
                </span>
              </div>
              <div className="text-lg font-bold">₪{course.price}</div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline"
                className="flex-1"
                onClick={() => setIsDetailsDialogOpen(true)}
              >
                {isEnglish ? "More Details" : "פרטים נוספים"}
              </Button>
              <Button 
                className="flex-1"
                onClick={handlePurchase}
              >
                <ShoppingCart className="h-4 w-4 ml-1" />
                {isEnglish ? "Purchase" : "רכישה"}
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{course.title}</DialogTitle>
            <DialogDescription>{course.description}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">{isEnglish ? "Instructor" : "מרצה"}</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20" />
                <div>
                  <div className="font-medium">{course.instructor.name}</div>
                  <div className="text-sm text-muted-foreground">{course.instructor.title}</div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>{course.rating} ({course.studentsCount} {isEnglish ? "students" : "סטודנטים"})</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span>{getLevelText(course.level)}</span>
              </div>
              {course.type === "frontal" ? (
                <>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{course.location ? (isEnglish ? course.location.en : course.location.he) : ""}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{new Date(course.startDate!).toLocaleDateString(isEnglish ? "en-US" : "he-IL")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.availableSeats} {isEnglish ? "seats available" : "מקומות פנויים"}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-muted-foreground" />
                    <span>{course.videosCount} {isEnglish ? "videos" : "סרטונים"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.totalHours} {isEnglish ? "hours" : "שעות"}</span>
                  </div>
                </>
              )}
            </div>

            {course.prerequisites && (
              <>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">{isEnglish ? "Prerequisites" : "דרישות מקדימות"}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="text-sm">{prerequisite}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="flex items-center justify-between pt-4">
              <div className="text-2xl font-bold">₪{course.price}</div>
              <Button onClick={handlePurchase}>
                <ShoppingCart className="h-4 w-4 ml-1" />
                {isEnglish ? "Purchase Now" : "רכישה"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isPurchaseDialogOpen} onOpenChange={setIsPurchaseDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {isEnglish ? "Purchase Course" : "רכישת קורס"}
            </DialogTitle>
            <DialogDescription>
              {course.title}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handlePurchaseSubmit}>
            <div className="grid gap-4 py-4">
              <div className="space-y-4 rounded-lg bg-secondary/10 p-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {isEnglish ? "Invoice Details (Optional)" : "פרטים לחשבונית (לא חובה)"}
                </h3>
                
                <div className="grid gap-2">
                  <Label htmlFor="invoice-name">
                    {isEnglish ? "Full Name / Company Name" : "שם מלא / שם חברה"}
                  </Label>
                  <Input
                    id="invoice-name"
                    placeholder={isEnglish ? "Enter name" : "הכנס/י שם"}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="invoice-id">
                    {isEnglish ? "ID / Company Number" : "ת.ז / ח.פ"}
                  </Label>
                  <Input
                    id="invoice-id"
                    placeholder={isEnglish ? "Enter ID number" : "הכנס/י מספר"}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {isEnglish ? "Payment Details" : "פרטי תשלום"}
                </h3>

                <div className="grid gap-2">
                  <Label htmlFor="card-number">
                    {isEnglish ? "Card Number" : "מספר כרטיס"}
                  </Label>
                  <Input
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    required
                    className="font-mono"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">
                      {isEnglish ? "Expiry Date" : "תוקף"}
                    </Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      required
                      className="font-mono"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      required
                      className="font-mono"
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="name">
                    {isEnglish ? "Cardholder Name" : "שם בעל הכרטיס"}
                  </Label>
                  <Input
                    id="name"
                    required
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {isEnglish ? "Course Price" : "מחיר הקורס"}
                  </span>
                  <span>₪{course.price}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>{isEnglish ? "Total" : "סה״כ לתשלום"}</span>
                  <span>₪{course.price}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  {isEnglish 
                    ? "I agree to the terms and conditions" 
                    : "אני מסכים/ה לתנאי השימוש"}
                </Label>
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                {isEnglish 
                  ? `Pay ₪${course.price}` 
                  : `תשלום ₪${course.price}`}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

const FeaturedCourses = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { toast } = useToast();
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const isEnglish = i18n.language === 'en';

  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">
                {isEnglish ? "Courses" : "קורסים"}
              </h2>
              <p className="text-muted-foreground">
                {isEnglish 
                  ? "In-person and digital courses from leading industry instructors" 
                  : "קורסים פרונטליים ודיגיטליים מהמרצים המובילים בתעשייה"}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("/courses")}
              className="hover-gradient"
            >
              <Plus className="ml-2 h-4 w-4" />
              {isEnglish ? "All Courses" : "כל הקורסים"}
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
              {dummyCourses.slice(0, 4).map((course) => (
                <CarouselItem
                  key={course.id}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <CourseCard course={course} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
