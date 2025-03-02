
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { PurchaseDialog } from "@/components/shared/PurchaseDialog";

interface MonthlyJobCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  };
  onPurchase: (planName: string) => void;
}

const MonthlyJobCard = ({ plan, onPurchase }: MonthlyJobCardProps) => {
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);

  const handlePurchaseClick = () => {
    setIsPurchaseDialogOpen(true);
  };

  const handlePurchaseComplete = () => {
    onPurchase(plan.name);
  };

  return (
    <>
      <Card
        className={`relative ${
          plan.popular ? "border-primary shadow-lg scale-105" : "border-border"
        }`}
      >
        {plan.popular && (
          <span className="absolute -top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
            פופולרי
          </span>
        )}
        <CardHeader>
          <CardTitle className="text-2xl">{plan.name}</CardTitle>
          <CardDescription>{plan.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="text-muted-foreground">/חודש</span>
          </div>
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant={plan.popular ? "default" : "outline"}
            onClick={handlePurchaseClick}
          >
            רכוש עכשיו
          </Button>
        </CardFooter>
      </Card>

      <PurchaseDialog
        isOpen={isPurchaseDialogOpen}
        onOpenChange={setIsPurchaseDialogOpen}
        title={plan.name}
        description={plan.description}
        price={plan.price.replace('₪', '')}
      />
    </>
  );
};

export default MonthlyJobCard;
