
import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";
import FeaturedCourses, { CourseCard } from "@/components/home/FeaturedCourses";
import { Course } from "@/types/course";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";

const dummyCourses: Course[] = [
  {
    id: "1",
    title: "בוטקאמפ פיתוח Full Stack",
    description: "תכנית הכשרה מקיפה המכסה את כל הטכנולוגיות הנדרשות לפיתוח מערכות מודרניות. במהלך הקורס תלמדו פיתוח צד לקוח, צד שרת, ועבודה עם בסיסי נתונים.",
    type: "frontal",
    price: 12000,
    instructor: {
      name: "דניאל כהן",
      title: "מפתח Full Stack בכיר | מרצה בכיר",
      image: "/placeholder.svg",
    },
    duration: "3 חודשים",
    level: "intermediate",
    location: {
      he: "תל אביב",
      en: "Tel Aviv"
    },
    startDate: "2024-05-01",
    meetingsCount: 36,
    availableSeats: 5,
    rating: 4.8,
    studentsCount: 120,
    prerequisites: ["ידע בסיסי בתכנות", "הבנה בסיסית באנגלית טכנית"],
  },
  {
    id: "2",
    title: "קורס מאסטר React ו-Node.js",
    description: "למדו לבנות אפליקציות מודרניות ומתקדמות באמצעות React ו-Node.js. הקורס כולל פרויקטים מעשיים ותרגול מעמיק של ארכיטקטורות מודרניות.",
    type: "digital",
    price: 990,
    instructor: {
      name: "רונית לוי",
      title: "מהנדסת תוכנה בכירה | ארכיטקטית מערכות",
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
    title: "סדנת UI/UX Design",
    description: "סדנה מעשית המתמקדת בעיצוב ממשקי משתמש מודרניים. תלמדו תהליכי עיצוב, עקרונות UX, וכלים מקצועיים כמו Figma.",
    type: "frontal",
    price: 3500,
    instructor: {
      name: "מיכל ברק",
      title: "מעצבת UX ראשית | יועצת חווית משתמש",
      image: "/placeholder.svg",
    },
    duration: "5 מפגשים",
    level: "beginner",
    location: {
      he: "ירושלים",
      en: "Jerusalem"
    },
    startDate: "2024-04-15",
    meetingsCount: 5,
    availableSeats: 8,
    rating: 4.7,
    studentsCount: 45,
  },
  {
    id: "4",
    title: "AWS ארכיטקטורת ענן",
    description: "קורס מקיף על תכנון וארכיטקטורת מערכות בענן AWS. נלמד על שירותי הענן השונים, תבניות ארכיטקטורה, ואבטחת מידע בענן.",
    type: "digital",
    price: 1200,
    instructor: {
      name: "אלון דוד",
      title: "ארכיטקט פתרונות ענן | מומחה AWS מוסמך",
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

const AllCourses = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [type, setType] = useState<"all" | "frontal" | "digital">("all");
  const [level, setLevel] = useState<"all" | Course["level"]>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = dummyCourses.filter((course) => {
    if (type !== "all" && course.type !== type) return false;
    if (level !== "all" && course.level !== level) return false;
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <MainLayout>
      <main className="container mx-auto py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">כל הקורסים</h1>
            <p className="text-muted-foreground">
              גלה את מגוון הקורסים הפרונטליים והדיגיטליים שלנו
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="חפש קורסים..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <div className="flex gap-4">
              <Select value={type} onValueChange={(value: typeof type) => setType(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="סוג קורס" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">הכל</SelectItem>
                  <SelectItem value="frontal">פרונטלי</SelectItem>
                  <SelectItem value="digital">דיגיטלי</SelectItem>
                </SelectContent>
              </Select>
              <Select value={level} onValueChange={(value: typeof level) => setLevel(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="רמת קושי" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">הכל</SelectItem>
                  <SelectItem value="beginner">מתחילים</SelectItem>
                  <SelectItem value="intermediate">בינוני</SelectItem>
                  <SelectItem value="advanced">מתקדם</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2 border rounded-md p-1">
                <Button
                  variant={view === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setView("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={view === "list" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setView("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className={
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-4"
          }>
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">לא נמצאו קורסים התואמים את החיפוש</p>
            </div>
          )}
        </div>
      </main>
    </MainLayout>
  );
};

export default AllCourses;
