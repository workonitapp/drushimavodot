import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserAvatar } from '@/components/ui/user-avatar';
import { useAuth } from '@/context/AuthContext';
import {
  Briefcase,
  ChevronDown,
  LogOut,
  Settings,
  UserCog,
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import AboutDialog from '../AboutDialog';
import ContactDialog from '../ContactDialog';
import LanguageToggle from '../LanguageToggle';

const MainNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const { user, signOut } = useAuth();
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const scrollToElement = (element: HTMLElement) => {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = element.offsetTop;
      const middle =
        absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;
      window.scrollTo({
        top: middle,
        behavior: 'smooth',
      });
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          scrollToElement(element);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        scrollToElement(element);
      }
    }
  };

  const handleLogout = async () => {
    try {
      console.log('MainNav: Logging out...');
      await signOut();
      console.log('MainNav: Logged out successfully');
      navigate('/auth');
    } catch (error) {
      console.error('MainNav: Logout error:', error);
    }
  };

  return (
    <>
      <nav className="nav-gradient py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Logo */}
            <div
              className="cursor-pointer flex items-center gap-2"
              onClick={() => navigate('/')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate('/');
                }
              }}
              aria-label="Navigate to home page"
            >
              <img
                src="/logo.png"
                alt="דרושים עבודות"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                className="hover:bg-accent hover:text-accent-foreground dark:text-white"
                onClick={() => scrollToSection('groups-section')}
              >
                {t('nav.groups')}
              </Button>
              <Button
                variant="ghost"
                className="hover:bg-accent hover:text-accent-foreground dark:text-white"
                onClick={() => scrollToSection('jobs-section')}
              >
                {t('nav.jobs')}
              </Button>
              <Button
                variant="ghost"
                className="hover:bg-accent hover:text-accent-foreground dark:text-white"
                onClick={() => scrollToSection('freelancers-section')}
              >
                {t('nav.people')}
              </Button>
              <div className="relative">
                <Button
                  variant="ghost"
                  className="hover:bg-accent hover:text-accent-foreground dark:text-white"
                  onClick={() => scrollToSection('ai-section')}
                >
                  {t('nav.ai')}
                  <Badge
                    variant="secondary"
                    className="mr-2 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground text-[10px]"
                  >
                    {t('nav.comingSoon')}
                  </Badge>
                </Button>
              </div>
              <Button
                variant="ghost"
                className="hover:bg-accent hover:text-accent-foreground dark:text-white"
                onClick={() => scrollToSection('courses-section')}
              >
                {t('nav.courses')}
              </Button>
              <Button
                variant="ghost"
                className="hover:bg-accent hover:text-accent-foreground dark:text-white"
                onClick={() => scrollToSection('content-section')}
              >
                {t('nav.content')}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-accent hover:text-accent-foreground dark:text-white"
                  >
                    {t('nav.more')}
                    <ChevronDown className="mr-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate('/documentation')}>
                    {t('nav.documentation')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/pricing')}>
                    {t('nav.pricing')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setShowAbout(true)}>
                    {t('nav.about')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setShowContact(true)}>
                    {t('nav.contact')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Profile Menu */}
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {user ? (
                      <UserAvatar user={user} className="h-8 w-8" />
                    ) : (
                      <UserCog className="h-5 w-5" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {user ? (
                    <>
                      <DropdownMenuLabel>
                        {t('profile.myProfile')}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {user.role === 'candidate' ? (
                        <DropdownMenuItem
                          onClick={() => navigate('/candidate-profile')}
                        >
                          <UserAvatar user={user} className="mr-2 h-4 w-4" />
                          <span>{t('profile.candidateProfile')}</span>
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem
                          onClick={() => navigate('/recruiter-profile')}
                        >
                          <Briefcase className="mr-2 h-4 w-4" />
                          <span>{t('profile.recruiterProfile')}</span>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem onClick={() => navigate('/settings')}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>{t('profile.settings')}</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuLabel>{t('nav.settings')}</DropdownMenuLabel>
                      <div className="p-2">
                        <div className="mb-2">
                          <ThemeToggle />
                        </div>
                        <div>
                          <LanguageToggle />
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={handleLogout}
                      >
                        <LogOut className="ml-2 h-4 w-4" />
                        <span>{t('profile.logout')}</span>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem onClick={() => navigate('/auth')}>
                        {t('auth.login')} / {t('auth.register')}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuLabel>{t('nav.settings')}</DropdownMenuLabel>
                      <div className="p-2">
                        <div className="mb-2">
                          <ThemeToggle />
                        </div>
                        <div>
                          <LanguageToggle />
                        </div>
                      </div>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <AboutDialog open={showAbout} onOpenChange={setShowAbout} />
      <ContactDialog open={showContact} onOpenChange={setShowContact} />
    </>
  );
};

export default MainNav;
