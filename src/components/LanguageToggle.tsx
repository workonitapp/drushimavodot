
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const { toast } = useToast();

  const toggleLanguage = async (lang: string) => {
    try {
      // Save preference first
      localStorage.setItem('language', lang);
      
      // Change language
      await i18n.changeLanguage(lang);

      // Show success toast
      toast({
        title: lang === 'he' ? 'השפה שונתה' : 'Language Changed',
        description:
          lang === 'he' ? 'השפה שונתה לעברית' : 'Language changed to English',
      });
      
      // Reload the page after a short delay to allow the toast to show
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error('Error changing language:', error);
      toast({
        title: 'Error',
        description: 'Failed to change language. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent hover:text-accent-foreground dark:text-white"
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t('nav.language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t('nav.language')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => toggleLanguage('he')}
          className={i18n.language === 'he' ? 'bg-accent' : ''}
        >
          עברית
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleLanguage('en')}
          className={i18n.language === 'en' ? 'bg-accent' : ''}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
