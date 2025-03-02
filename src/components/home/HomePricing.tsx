import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, CreditCard, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PurchaseDialog } from "@/components/shared/PurchaseDialog";

const plans = [
  {
    name: { he: "פרופיל מקצועי", en: "Professional Profile" },
    price: "₪50",
    description: { 
      he: "הופעה בסקשן אנשים",
      en: "Appear in People section"
    },
    features: {
      he: [
        "הופעה בסקשן אנשים באינדקס",
        "תיוג מקצועי מותאם אישית",
        "קישור לפורטפוליו ורשתות חברתיות",
      ],
      en: [
        "Appear in People section",
        "Custom professional tagging",
        "Portfolio and social media links",
      ]
    },
  },
  {
    name: { he: "משרה בודדת", en: "Single Job Post" },
    price: "₪200",
    description: { 
      he: "פרסום משרה אחת באינדקס",
      en: "Post one job in the index"
    },
    features: {
      he: [
        "פרסום משרה אחת באינדקס",
        "פרסום בקבוצות (מודעה אחת)",
      ],
      en: [
        "Post one job in the index",
        "Post in groups (one ad)",
      ]
    },
    oneTime: true,
  },
  {
    name: { he: "חבילה בסיסית", en: "Basic Package" },
    price: "₪500",
    description: { 
      he: "פתרון מעולה לחברות קטנות",
      en: "Great solution for small companies"
    },
    features: {
      he: [
        "פרסום עד 5 משרות באינדקס",
        "פרסום בקבוצות ללא הגבלה",
      ],
      en: [
        "Post up to 5 jobs in the index",
        "Unlimited group postings",
      ]
    },
  },
  {
    name: { he: "חבילה מתקדמת", en: "Advanced Package" },
    price: "₪750",
    description: { 
      he: "הפתרון המושלם לחברות צומחות",
      en: "The perfect solution for growing companies"
    },
    features: {
      he: [
        "פרסום עד 15 משרות באינדקס",
        "פרסום בקבוצות ללא הגבלה",
        "תמיכה מלאה בתהליך הגיוס",
        "דשבורד מתקדם לניהול מועמדים",
        "כולל הופעה בסקשן אנשים",
      ],
      en: [
        "Post up to 15 jobs in the index",
        "Unlimited group postings",
        "Full recruitment process support",
        "Advanced candidate management dashboard",
        "Includes People section profile",
      ]
    }
  },
  {
    name: { he: "חבילה בלתי מוגבלת", en: "Unlimited Package" },
    price: "₪1,000",
    description: { 
      he: "לחברות שרוצות את כל היתרונות",
      en: "For companies that want all the benefits"
    },
    features: {
      he: [
        "פרסום משרות ללא הגבלה באינדקס",
        "פרסום בקבוצות ללא הגבלה",
        'מיתוג מעסיק בסיסי (כתבת "הכר את המגייס")',
        "כלים מתקדמים לניהול תהליך הגיוס",
        "כולל הופעה בסקשן אנשים",
      ],
      en: [
        "Unlimited job postings in the index",
        "Unlimited group postings",
        'Basic employer branding ("Meet the Recruiter" article)',
        "Advanced recruitment process management tools",
        "Includes People section profile",
      ]
    },
  },
  {
    name: { he: 'כתבת יח"צ באתר', en: "PR Article" },
    price: "₪1,500",
    description: { 
      he: "חבילה בסיסית למיתוג מעסיק",
      en: "Basic employer branding package"
    },
    features: {
      he: [
        "כתבת יח״צ מותאמת אישית",
        "פרסום באתר הפלטפורמה",
        "קידום בקבוצות פייסבוק רלוונטיות",
        "קישור לשיתוף ברשתות חברתיות",
      ],
      en: [
        "Custom PR article",
        "Publication on the platform",
        "Promotion in relevant Facebook groups",
        "Social media sharing link",
      ]
    },
    oneTime: true,
  }
];

const HomePricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const handlePurchaseClick = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setIsPurchaseDialogOpen(true);
  };
  
  const PlanCard = ({ plan }: { plan: typeof plans[0] }) => (
    <div className="relative flex flex-col w-[280px] min-h-[280px] p-6 rounded-xl transition-all border-2 border-gray-200 bg-white hover:border-primary hover:shadow-lg">
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-primary/10 p-2 rounded-lg">
          <CreditCard className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-base font-semibold text-gray-900">
          {isEnglish ? plan.name.en : plan.name.he}
        </h3>
      </div>
      <div className="text-lg font-bold px-1 mb-5 text-gray-900">
        {plan.price}
        {!plan.oneTime && (
          <span className="mr-1 text-sm font-normal text-gray-500">
            {isEnglish ? "/ month" : "/ לחודש"}
          </span>
        )}
        {plan.oneTime && (
          <span className="mr-1 text-sm font-normal text-gray-500">
            {isEnglish ? "(one time)" : "(חד פעמי)"}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-4">
        {isEnglish ? plan.description.en : plan.description.he}
      </p>
      <div className="flex flex-col gap-2 mt-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-9 w-full bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700 text-xs gap-1.5 font-medium"
            >
              <Info className="h-3.5 w-3.5" />
              {isEnglish ? "More Info" : "פרטים נוספים"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-4 bg-white">
            <div className="flex flex-col">
              <h4 className="font-semibold text-sm mb-2 text-gray-900">
                {isEnglish ? plan.name.en : plan.name.he}
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                {isEnglish ? plan.description.en : plan.description.he}
              </p>
              <div className="grid grid-cols-1 gap-2">
                {(isEnglish ? plan.features.en : plan.features.he).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Button
          variant="default"
          size="sm"
          className="h-9 w-full text-xs font-medium"
          onClick={() => handlePurchaseClick(plan)}
        >
          {isEnglish ? "Purchase Now" : "רכישה"}
        </Button>
      </div>
    </div>
  );
  
  return (
    <section className="py-12 bg-gray-50/80">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isEnglish ? "Employer Packages" : "חבילות למעסיקים"}
            </h2>
            <p className="text-base text-gray-600">
              {isEnglish 
                ? "Choose the package that fits your needs" 
                : "בחר את החבילה המתאימה לצרכים שלך"}
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 justify-center">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>

      {selectedPlan && (
        <PurchaseDialog
          isOpen={isPurchaseDialogOpen}
          onOpenChange={setIsPurchaseDialogOpen}
          title={isEnglish ? selectedPlan.name.en : selectedPlan.name.he}
          description={isEnglish ? selectedPlan.description.en : selectedPlan.description.he}
          price={selectedPlan.price.replace('₪', '')}
        />
      )}
    </section>
  );
};

export default HomePricing;
