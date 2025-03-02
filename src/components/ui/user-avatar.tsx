
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AppUser } from '@/types/user';

interface UserAvatarProps {
  user: AppUser | null;
  className?: string;
}

export function UserAvatar({ user, className }: UserAvatarProps) {
  if (!user) return null;

  // Get the first letter of the email (or name if available)
  const firstLetter = user.email ? user.email[0].toUpperCase() : '?';

  // Generate a consistent background color based on the email
  const colors = [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
  ];
  const colorIndex =
    user.email.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;
  const bgColor = colors[colorIndex];

  return (
    <Avatar className={className}>
      {user.image ? (
        <AvatarImage src={user.image} alt={user.email} />
      ) : (
        <AvatarFallback className={`${bgColor} text-white font-medium`}>
          {firstLetter}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
