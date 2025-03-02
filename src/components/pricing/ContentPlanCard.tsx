
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

interface ContentPlanCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    oneTime?: boolean;
  };
  onPurchase: (planName: string) => void;
}

const ContentPlanCard = ({ plan, onPurchase }: ContentPlanCardProps) => {
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);

  const handlePurchaseClick = () => {
    setIsPurchaseDialogOpen(true);
  };

  const handlePurchaseComplete = () => {
    onPurchase(plan.name);
  };

  return (
    <>
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">{plan.name}</CardTitle>
          <CardDescription>{plan.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">{plan.price}</span>
              {plan.oneTime && (
                <span className="text-sm text-muted-foreground">חד פעמי</span>
              )}
            </div>
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
            variant="outline"
            onClick={handlePurchaseClick}
          >
            רכישה
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

export default ContentPlanCard;
