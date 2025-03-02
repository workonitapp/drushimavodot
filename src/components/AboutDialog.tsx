
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutDialog = ({ open, onOpenChange }: AboutDialogProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('about.title')}</DialogTitle>
          <DialogDescription>
            {t('about.description')}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p>{t('about.content.first')}</p>
          <p>{t('about.content.second')}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
