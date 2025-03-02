import MainLayout from "@/components/layout/MainLayout";
import { useToast } from "@/components/ui/use-toast";
import SingleJobCard from "@/components/pricing/SingleJobCard";
import MonthlyJobCard from "@/components/pricing/MonthlyJobCard";
import ContentPlanCard from "@/components/pricing/ContentPlanCard";

const jobPlans = [
  {
    name: "משרה בודדת",
    price: "₪200",
    description: "Single Job Package",
    features: [
      "פרסום משרה אחת באינדקס",
      "פרסום בקבוצות (מודעה אחת)",
    ],
    oneTime: true,
  },
  {
    name: "חבילה בסיסית",
    price: "₪500",
    description: "Starter Package",
    features: [
      "פרסום עד 5 משרות באינדקס",
      "פרסום בקבוצות ללא הגבלה",
    ],
  },
  {
    name: "חבילה מתקדמת",
    price: "₪750",
    description: "Advanced Package",
    features: [
      "פרסום עד 15 משרות באינדקס",
      "פרסום בקבוצות ללא הגבלה",
    ],
    popular: true,
  },
  {
    name: "חבילה בלתי מוגבלת",
    price: "₪1,000",
    description: "Unlimited Package",
    features: [
      "פרסום משרות ללא הגבלה באינדקס",
      "פרסום בקבוצות ללא הגבלה",
      'מיתוג מעסיק בסיסי (כתבת "הכר את המגייס")',
    ],
  },
];

const contentPlans = [
  {
    name: 'כתבת יח"צ באתר',
    price: "₪1,500",
    description: "חבילה בסיסית למיתוג מעסיק",
    features: [
      "כתבת יח״צ מותאמת אישית",
      "פרסום באתר הפלטפורמה",
      "קידום בקבוצות פייסבוק רלוונטיות",
      "קישור לשיתוף ברשתות חברתיות",
    ],
    oneTime: true,
  },
];

const Pricing = () => {
  const { toast } = useToast();

  const handlePurchase = (planName: string) => {
    console.log("Selected plan:", planName);
    toast({
      title: "רכישת חבילה",
      description: "מערכת התשלומים תהיה זמינה בקרוב",
    });
  };

  const singleJobPlan = jobPlans[0];
  const monthlyPlans = jobPlans.slice(1);

  return (
    <MainLayout>
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">חבילות למעסיקים</h1>
          <p className="text-xl text-muted-foreground">
            בחר את החבילה המתאימה לצרכים שלך
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Single Job Package */}
          <div className="mb-8">
            <SingleJobCard plan={singleJobPlan} onPurchase={handlePurchase} />
          </div>

          {/* Monthly Job Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {monthlyPlans.map((plan) => (
              <MonthlyJobCard
                key={plan.name}
                plan={plan}
                onPurchase={handlePurchase}
              />
            ))}
          </div>

          {/* Content Plans Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">חבילות תוכן למיתוג מעסיק</h2>
              <p className="text-lg text-muted-foreground">
                פתרונות תוכן מותאמים אישית לחיזוק המותג שלך
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentPlans.map((plan) => (
                <ContentPlanCard
                  key={plan.name}
                  plan={plan}
                  onPurchase={handlePurchase}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;