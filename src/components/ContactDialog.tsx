
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Facebook, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('contact.title')}</DialogTitle>
          <DialogDescription>
            {t('contact.description')}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@example.com" className="hover:underline">
              info@example.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="hover:underline">
              {t('contact.whatsapp')}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Facebook className="h-4 w-4" />
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              {t('contact.facebook')}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
