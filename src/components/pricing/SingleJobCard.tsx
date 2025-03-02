
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

interface SingleJobCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
  };
  onPurchase: (planName: string) => void;
}

const SingleJobCard = ({ plan, onPurchase }: SingleJobCardProps) => {
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);

  const handlePurchaseClick = () => {
    setIsPurchaseDialogOpen(true);
  };

  const handlePurchaseComplete = () => {
    onPurchase(plan.name);
  };

  return (
    <>
      <Card className="max-w-xs mx-auto border-dashed bg-background/50">
        <CardHeader className="space-y-0 p-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{plan.name}</CardTitle>
            <span className="text-lg font-bold">{plan.price}</span>
          </div>
          <CardDescription className="text-xs">{plan.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <ul className="space-y-1 text-xs">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-1.5">
                <Check className="h-3 w-3 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full text-sm h-8"
            variant="outline"
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

export default SingleJobCard;
