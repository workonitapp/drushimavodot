
import MainLayout from "@/components/layout/MainLayout";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tag, ArrowRight, Clock, Share2, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const ContentItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // מאגר תכנים - כל מאמר עם התוכן הייחודי שלו
  const contents = {
    "1": {
      title: "איך להתחיל עם מערכת האתר - מדריך למשתמש חדש",
      excerpt: "מדריך מקיף שיעזור לך להתחיל לעבוד עם מערכת האתר בצורה יעילה ומהירה",
      content: `
        <h2>התחלת העבודה עם המערכת</h2>
        <p>ברוכים הבאים למערכת! במדריך זה נלמד איך להתחיל להשתמש במערכת בצורה יעילה.</p>
        
        <h3>שלבים ראשונים:</h3>
        <ul>
          <li>יצירת פרופיל אישי</li>
          <li>העלאת קורות חיים</li>
          <li>חיפוש משרות</li>
          <li>הגשת מועמדות</li>
        </ul>

        <h3>הצטרפות לקהילות מקצועיות</h3>
        <p>הצטרפו לקהילות המקצועיות שלנו כדי:</p>
        <ul>
          <li>לקבל עדכונים על משרות חדשות</li>
          <li>להתחבר עם אנשי מקצוע</li>
          <li>לקבל טיפים והמלצות</li>
        </ul>
      `,
      tags: ["מדריך למשתמש", "התחלה", "קהילות"],
      image: "photo-1486312338219-ce68d2c6f44d",
      type: "article",
      readTime: "5 דקות קריאה"
    },
    "2": {
      title: "טרנדים בשוק העבודה 2024",
      excerpt: "סקירה מקיפה של המגמות החמות בשוק העבודה",
      content: `
        <h2>מגמות מרכזיות בשוק העבודה</h2>
        <p>שוק העבודה משתנה במהירות. הנה המגמות המרכזיות לשנת 2024:</p>
        
        <h3>מגמות בולטות:</h3>
        <ul>
          <li>עבודה היברידית</li>
          <li>גמישות בשעות העבודה</li>
          <li>דגש על איזון בית-עבודה</li>
          <li>התמחויות חדשות</li>
        </ul>

        <h3>קהילות ונטוורקינג</h3>
        <p>חשיבות הקהילות המקצועיות גדלה:</p>
        <ul>
          <li>שיתוף ידע מקצועי</li>
          <li>הזדמנויות קריירה</li>
          <li>למידה הדדית</li>
        </ul>
      `,
      tags: ["מגמות בשוק", "2024", "קהילות"],
      image: "photo-1498050108023-c5249f4df085",
      type: "article",
      readTime: "7 דקות קריאה"
    },
    "3": {
      title: "טיפים לראיון עבודה",
      excerpt: "מדריך מעשי להצלחה בראיונות עבודה",
      content: `
        <h2>איך להצליח בראיון עבודה</h2>
        <p>ראיון עבודה הוא הזדמנות להציג את עצמכם בצורה הטובה ביותר. הנה כמה טיפים:</p>
        
        <h3>טיפים חשובים:</h3>
        <ul>
          <li>הכנה מראש</li>
          <li>לבוש מתאים</li>
          <li>שפת גוף חיובית</li>
          <li>שאלות מוכנות</li>
        </ul>

        <h3>למידה מהקהילה</h3>
        <p>הצטרפו לקהילות שלנו כדי:</p>
        <ul>
          <li>לקבל טיפים מאנשים שעברו ראיונות</li>
          <li>לתרגל ראיונות עם חברי קהילה</li>
          <li>לקבל משוב והמלצות</li>
        </ul>
      `,
      tags: ["ראיונות", "טיפים", "קהילה"],
      image: "photo-1552664730-d307ca884978",
      type: "article",
      readTime: "6 דקות קריאה"
    },
    "4": {
      title: "איך לבנות קורות חיים אפקטיביים",
      excerpt: "המדריך המלא ליצירת קורות חיים שימשכו את תשומת לב המגייסים",
      content: `
        <h2>בניית קורות חיים מנצחים</h2>
        <p>קורות חיים טובים הם המפתח להצלחה בחיפוש עבודה. הנה המדריך המלא:</p>
        
        <h3>מרכיבים חשובים:</h3>
        <ul>
          <li>מבנה ברור</li>
          <li>ניסיון רלוונטי</li>
          <li>הישגים מדידים</li>
          <li>עיצוב מקצועי</li>
        </ul>

        <h3>שיפור קורות החיים בעזרת הקהילה</h3>
        <p>היתרונות של חברות בקהילה:</p>
        <ul>
          <li>ביקורת עמיתים על קורות החיים</li>
          <li>דוגמאות מוצלחות מחברי קהילה</li>
          <li>טיפים מאנשי HR</li>
        </ul>
      `,
      tags: ["קורות חיים", "טיפים מקצועיים", "קהילה"],
      image: "photo-1586717791821-3f44a563fa4c",
      type: "article",
      readTime: "8 דקות קריאה"
    },
    "5": {
      title: "מיתוג אישי בחיפוש עבודה",
      excerpt: "כל מה שצריך לדעת על בניית נוכחות מקצועית",
      content: `
        <h2>בניית מותג אישי חזק</h2>
        <p>מיתוג אישי הוא כלי חשוב בחיפוש עבודה. כך תבנו אותו נכון:</p>
        
        <h3>צעדים חשובים:</h3>
        <ul>
          <li>זיהוי החוזקות שלכם</li>
          <li>בניית נוכחות ברשת</li>
          <li>יצירת ערך ייחודי</li>
          <li>נטוורקינג מקצועי</li>
        </ul>

        <h3>בניית מוניטין בקהילה</h3>
        <p>איך להשתמש בקהילות לחיזוק המיתוג האישי:</p>
        <ul>
          <li>השתתפות פעילה בדיונים</li>
          <li>שיתוף ידע וניסיון</li>
          <li>יצירת קשרים מקצועיים</li>
        </ul>
      `,
      tags: ["מיתוג אישי", "קריירה", "קהילות"],
      image: "photo-1611162617474-5b21e879e113",
      type: "article",
      readTime: "7 דקות קריאה"
    },
    "6": {
      title: "המדריך למציאת עבודה",
      excerpt: "טיפים, כלים ואסטרטגיות למציאת העבודה הבאה שלך",
      content: `
        <h2>מציאת עבודה - המדריך המלא</h2>
        <p>תהליך מציאת עבודה דורש אסטרטגיה ותכנון. הנה המדריך המלא:</p>
        
        <h3>שלבים מרכזיים:</h3>
        <ul>
          <li>הגדרת מטרות</li>
          <li>חיפוש אקטיבי</li>
          <li>הגשת מועמדות</li>
          <li>מעקב ומשוב</li>
        </ul>

        <h3>תמיכת הקהילה בחיפוש</h3>
        <p>איך הקהילה יכולה לעזור:</p>
        <ul>
          <li>שיתוף משרות פנימיות</li>
          <li>המלצות אישיות</li>
          <li>תמיכה הדדית</li>
        </ul>
      `,
      tags: ["חיפוש עבודה", "מדריך", "קהילה"],
      image: "photo-1585859615922-4c3081c7c276",
      type: "article",
      readTime: "9 דקות קריאה"
    }
  };

  // בחירת התוכן הספציפי לפי ה-ID
  const content = contents[id as keyof typeof contents] || contents["1"];

  const author = {
    name: "מערכת האתר",
    role: "צוות התוכן",
    image: "photo-1472099645785-5658abf4ff4e"
  };

  return (
    <MainLayout>
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <Button
            variant="ghost"
            className="mb-6 hover:bg-accent/10"
            onClick={() => navigate('/content')}
          >
            <ArrowRight className="ml-2 h-4 w-4" />
            חזרה לכל התכנים
          </Button>

          {/* Hero Section */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <img
              src={`https://images.unsplash.com/${content.image}?w=1200&q=90`}
              alt={content.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="absolute bottom-0 p-8 w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                    >
                      <Tag className="ml-1 h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {content.title}
                </h1>
                <p className="text-lg text-white/80 max-w-2xl">
                  {content.excerpt}
                </p>
              </div>
            </div>
          </div>

          {/* Meta Information */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b">
            <div className="flex items-center gap-4">
              <img
                src={`https://images.unsplash.com/${author.image}`}
                alt={author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">{author.name}</h3>
                <p className="text-sm text-muted-foreground">{author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {content.readTime}
              </div>
              <Button variant="ghost" size="sm" className="hover:bg-accent/10">
                <Share2 className="h-4 w-4 ml-2" />
                שתף
              </Button>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: content.content }} 
              className="[&_.media-embed]:my-8 [&_.media-embed]:rounded-lg [&_.media-embed]:overflow-hidden [&_.media-embed_img]:w-full [&_.media-embed_img]:h-auto [&_.media-embed_iframe]:w-full [&_.media-embed_iframe]:h-[400px] [&_.media-embed_audio]:w-full [&_.caption]:text-sm [&_.caption]:text-center [&_.caption]:text-muted-foreground [&_.caption]:mt-2"
            />
          </article>
        </div>
      </main>
    </MainLayout>
  );
};

export default ContentItem;
