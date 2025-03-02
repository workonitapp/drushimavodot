
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";

interface PurchaseDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  price: string | number;
}

export const PurchaseDialog = ({
  isOpen,
  onOpenChange,
  title,
  description,
  price,
}: PurchaseDialogProps) => {
  const { i18n } = useTranslation();
  const { toast } = useToast();
  const isEnglish = i18n.language === 'en';

  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
    toast({
      title: isEnglish ? "Purchase Successful" : "הרכישה בוצעה בהצלחה",
      description: isEnglish ? "You will receive a confirmation email shortly" : "תקבל/י אימייל אישור בקרוב",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEnglish ? "Purchase" : "רכישה"}
          </DialogTitle>
          <DialogDescription>
            {title}
            <br />
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handlePurchaseSubmit}>
          <div className="grid gap-4 py-4">
            {/* Invoice Details (Optional) */}
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

            {/* Payment Details */}
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
                  {isEnglish ? "Price" : "מחיר"}
                </span>
                <span>₪{price}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>{isEnglish ? "Total" : "סה״כ לתשלום"}</span>
                <span>₪{price}</span>
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
                ? `Pay ₪${price}` 
                : `תשלום ₪${price}`}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
