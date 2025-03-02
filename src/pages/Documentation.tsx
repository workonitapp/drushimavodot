import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Briefcase, Brain, FileText, Group, Users, BookOpen, Send, Copy, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Documentation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const shareableLink = window.location.href;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareableLink);
      setIsCopied(true);
      toast({
        title: "הקישור הועתק",
        description: "הקישור הועתק ללוח",
      });
      setTimeout(() => {
        setIsCopied(false);
        setIsDialogOpen(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      toast({
        title: "שגיאה",
        description: "לא הצלחנו להעתיק את הקישור",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-8 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="hover-gradient"
          >
            <ArrowLeft className="ml-2 h-4 w-4" />
            חזרה
          </Button>
          <div>
            <h1 className="text-3xl font-bold mb-2">תיעוד המערכת</h1>
            <p className="text-muted-foreground">מדריך מקיף לשימוש במערכת דרושים עבודות</p>
          </div>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Send className="ml-2 h-4 w-4" />
              שתף תיעוד
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>שתף את התיעוד</DialogTitle>
              <DialogDescription>
                העתק את הקישור ושתף אותו
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-2">
              <Input
                value={shareableLink}
                readOnly
                dir="ltr"
                className="flex-1"
              />
              <Button onClick={handleCopyLink} variant="secondary">
                {isCopied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="overview" dir="rtl" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">סקירה כללית</TabsTrigger>
          <TabsTrigger value="jobs">משרות</TabsTrigger>
          <TabsTrigger value="freelancers">פרילנסרים</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>
          <TabsTrigger value="groups">קהילות</TabsTrigger>
          <TabsTrigger value="blog">בלוג</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>מערכת דרושים עבודות</CardTitle>
              <CardDescription>
                פלטפורמה מקיפה למציאת עבודה, גיוס עובדים וניהול קריירה
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                המערכת מציעה מגוון כלים ושירותים לסיוע בתהליך חיפוש העבודה וגיוס עובדים:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>לוח משרות</CardTitle>
                      <CardDescription>חיפוש והגשת מועמדות למשרות</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>פרילנסרים</CardTitle>
                      <CardDescription>מאגר פרילנסרים מקצועיים</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Brain className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>סוכני AI</CardTitle>
                      <CardDescription>כלי AI חכמים לניהול קריירה</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Group className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>קהילות מקצועיות</CardTitle>
                      <CardDescription>קבוצות ורשתות מקצועיות</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>מערכת המשרות</CardTitle>
              <CardDescription>
                חיפוש והגשת מועמדות למשרות
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">תכונות עיקריות:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>חיפוש משרות מתקדם לפי תחום, מיקום ודרישות</li>
                  <li>הגשת מועמדות ישירה למשרות</li>
                  <li>שמירת משרות מועדפות</li>
                  <li>התראות על משרות חדשות</li>
                  <li>ניהול מועמדויות</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">למעסיקים:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>פרסום משרות</li>
                  <li>ניהול מועמדים</li>
                  <li>חיפוש במאגר קורות חיים</li>
                  <li>כלי סינון וניהול מתקדמים</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="freelancers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>מאגר פרילנסרים</CardTitle>
              <CardDescription>
                מציאת והעסקת פרילנסרים מקצועיים
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">תכונות עיקריות:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>חיפוש פרילנסרים לפי תחום ומומחיות</li>
                  <li>דירוג ומשוב מלקוחות קודמים</li>
                  <li>תיקי עבודות ופרויקטים קודמים</li>
                  <li>מערכת הודעות ישירה</li>
                  <li>ניהול הצעות מחיר</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">לפרילנסרים:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>יצירת פרופיל מקצועי</li>
                  <li>ניהול תיק עבודות</li>
                  <li>קבלת הצעות עבודה</li>
                  <li>ניהול פרויקטים ולקוחות</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>דרישות להטמעת סוכן AI</CardTitle>
              <CardDescription>
                מידע על אופן הטמעת סוכן AI במערכת
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">דרישות בסיסיות:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>מזהה ייחודי לסוכן</li>
                  <li>נקודת קצה (Endpoint) לתקשורת</li>
                  <li>מפתח API להזדהות</li>
                  <li>הגדרת תחומי התמחות</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">מידע נדרש:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>שם ותיאור הסוכן</li>
                  <li>תמונת פרופיל</li>
                  <li>יכולות ותחומי התמחות</li>
                  <li>שפות נתמכות</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="groups" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>דרישות להטמעת קהילה</CardTitle>
              <CardDescription>
                מידע על אופן הטמעת קהילה במערכת
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">דרישות בסיסיות:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>שם וזיהוי הקהילה</li>
                  <li>פלטפורמת הקהילה (פייסבוק, טלגרם וכו׳)</li>
                  <li>קישור לקהילה</li>
                  <li>מספר חברים</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">מידע נדרש:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>תיאור הקהילה</li>
                  <li>תמונת נציגה</li>
                  <li>תחומי עיסוק עיקריים</li>
                  <li>כללי הקהילה</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>דרישות להטמעת תוכן בלוג</CardTitle>
              <CardDescription>
                מידע על אופן הטמעת תכני בלוג במערכת
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">דרישות בסיסיות:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>כותרת הפוסט</li>
                  <li>תוכן הפוסט בפורמט HTML או Markdown</li>
                  <li>תמונה ראשית לפוסט</li>
                  <li>תגיות רלוונטיות</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">מידע נדרש:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>פרטי הכותב (שם, תמונה, תפקיד)</li>
                  <li>תאריך פרסום</li>
                  <li>זמן קריאה משוער</li>
                  <li>קטגוריה ראשית</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Documentation;