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
import { UserRole } from '@/types/user';
import { Briefcase, LogOut, Settings, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  console.log('UserMenu: Current user data:', user);

  const handleLogout = async () => {
    try {
      console.log('UserMenu: Logging out...');
      await signOut();
      console.log('UserMenu: Logged out successfully');
      navigate('/auth');
    } catch (error) {
      console.error('UserMenu: Logout error:', error);
    }
  };

  if (!user) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="hover:bg-accent hover:text-accent-foreground dark:text-white"
        onClick={() => navigate('/auth')}
      >
        Login / Register
      </Button>
    );
  }

  // Debug log for role check
  console.log('UserMenu: Rendering menu for role:', user.role);

  const renderProfileMenuItem = (role: UserRole) => {
    switch (role) {
      case 'candidate':
        return (
          <DropdownMenuItem onClick={() => navigate('/candidate-profile')}>
            <UserCircle className="mr-2 h-4 w-4" />
            <span>Candidate Profile</span>
          </DropdownMenuItem>
        );
      case 'recruiter':
        return (
          <DropdownMenuItem onClick={() => navigate('/recruiter-profile')}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Recruiter Profile</span>
          </DropdownMenuItem>
        );
      default:
        console.warn('UserMenu: Unknown role:', role);
        return null;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent hover:text-accent-foreground dark:text-white p-0"
        >
          <UserAvatar user={user} className="h-8 w-8" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex items-center gap-2">
          <UserAvatar user={user} className="h-6 w-6" />
          <span>{user.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {renderProfileMenuItem(user.role as UserRole)}
        <DropdownMenuItem onClick={() => navigate('/settings')}>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
