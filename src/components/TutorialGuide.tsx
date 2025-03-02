import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Briefcase, Users, FileText, CreditCard } from "lucide-react";

const steps = [
  {
    title: "ברוכים הבאים לדרושים עבודות!",
    description: "בואו נכיר את התכונות העיקריות של האתר",
    icon: null,
  },
  {
    title: "חיפוש משרות",
    description: "באזור המשרות תוכלו למצוא אלפי משרות מעודכנות. ניתן לסנן לפי תחום, מיקום ודרישות נוספות.",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
  {
    title: "קהילות מקצועיות",
    description: "הצטרפו לקהילות המקצועיות שלנו בפייסבוק, טלגרם וקבוצות ווטסאפ לעדכונים שוטפים על משרות חדשות.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    title: "תכנים מקצועיים",
    description: "מאמרים, סרטונים ופודקאסטים שיעזרו לכם להתקדם בקריירה ולמצוא את העבודה הבאה שלכם.",
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
  {
    title: "חבילות למעסיקים",
    description: "מגוון חבילות פרסום למעסיקים - החל ממשרה בודדת ועד חבילות ללא הגבלה.",
    icon: <CreditCard className="h-8 w-8 text-primary" />,
  },
];

const TutorialGuide = () => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // בדיקה האם המדריך כבר הוצג למשתמש
    const tutorialShown = localStorage.getItem("tutorialShown");
    if (!tutorialShown) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("tutorialShown", "true");
    setOpen(false);
    toast({
      title: "מדריך השימוש זמין תמיד",
      description: "תוכלו לצפות במדריך בכל עת דרך התפריט הראשי",
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleClose();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            {steps[currentStep].icon}
          </div>
          <DialogTitle className="text-center text-xl">
            {steps[currentStep].title}
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            {steps[currentStep].description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-2 mt-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentStep ? "bg-primary w-4" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <DialogFooter className="flex justify-between sm:justify-between gap-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              הקודם
            </Button>
            <Button
              onClick={nextStep}
            >
              {currentStep === steps.length - 1 ? "סיום" : "הבא"}
            </Button>
          </div>
          <Button
            variant="ghost"
            onClick={handleClose}
          >
            דלג
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TutorialGuide;