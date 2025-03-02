import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/AuthContext';
import { Briefcase, LogOut, Search, Settings, UserCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutDialog from './AboutDialog';
import ContactDialog from './ContactDialog';
import { Input } from './ui/input';

const Header = () => {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    console.log('Logout button clicked');
    try {
      console.log('Calling signOut...');
      await signOut();
      console.log('SignOut completed, navigating to /auth');
      navigate('/auth');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      <nav className="nav-gradient text-white py-8 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex flex-col max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div
                className="w-[200px] cursor-pointer"
                onClick={() => navigate('/')}
              >
                <img
                  src="/logo.png"
                  alt="דרושים עבודות"
                  className="h-12 w-auto"
                />
              </div>

              {/* Navigation Links - Centered */}
              <div className="flex-1 flex items-center justify-center gap-12">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 text-lg px-6"
                  onClick={() => navigate('/groups')}
                >
                  קבוצות
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 text-lg px-6"
                  onClick={() => navigate('/content')}
                >
                  תכנים
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 text-lg px-6 bg-white/20 font-bold shadow-lg hover:bg-white/30 transition-all"
                  onClick={() => navigate('/jobs')}
                >
                  משרות
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 text-lg px-6"
                  onClick={() => setShowAbout(true)}
                >
                  אודות
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 text-lg px-6"
                  onClick={() => setShowContact(true)}
                >
                  צור קשר
                </Button>
                <div className="relative w-48">
                  <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="חפש..."
                    className="w-full pr-8 text-right bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30 h-8 text-sm"
                  />
                </div>
              </div>

              {/* Theme Toggle and Profile */}
              <div className="flex items-center gap-4 w-[200px] justify-end">
                {user && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Debug: {user.email}</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        console.log(
                          'Debug logout clicked for user:',
                          user.email
                        );
                        handleLogout();
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                )}
                <ThemeToggle />
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/10"
                      >
                        <UserCircle className="h-6 w-6" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>
                        Logged in as: {user.email}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => navigate('/candidate-profile')}
                      >
                        <UserCircle className="ml-2 h-4 w-4" />
                        <span>My Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => navigate('/recruiter-profile')}
                      >
                        <Briefcase className="ml-2 h-4 w-4" />
                        <span>Recruiter Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate('/settings')}>
                        <Settings className="ml-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="!bg-red-500 !text-white hover:!bg-red-600 cursor-pointer !p-3 flex items-center justify-between"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-5 w-5" />
                        <span className="text-base font-bold">LOGOUT</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/10"
                    onClick={() => navigate('/auth')}
                  >
                    Login / Register
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AboutDialog open={showAbout} onOpenChange={setShowAbout} />
      <ContactDialog open={showContact} onOpenChange={setShowContact} />
    </>
  );
};

export default Header;
