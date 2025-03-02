
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Youtube,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const isEnglish = i18n.language === 'en';

  return (
    <footer className="bg-primary text-white py-12 mt-20 dark:bg-black/90 dark:border-t dark:border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  {isEnglish ? "DrushimAvodot" : "דרושים עבודות"}
                </h3>
                <p className="text-gray-300 text-base">{t('footer.description')}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Instagram className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Youtube className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold">{t('footer.contactUs')}</h4>
            <ul className="space-y-8 text-lg">
              <li className="flex items-center gap-4 hover:text-gray-300 transition-colors">
                <Mail className="h-6 w-6" />
                <a href="mailto:info@example.com" className="text-xl">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center gap-4 hover:text-gray-300 transition-colors">
                <MessageCircle className="h-6 w-6" />
                <a
                  href="https://wa.me/972501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  {t('footer.whatsapp')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
