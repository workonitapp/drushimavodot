import Footer from '@/components/Footer';
import { useState } from 'react';
import AboutDialog from '../AboutDialog';
import ContactDialog from '../ContactDialog';
import MainNav from './MainNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main>{children}</main>
      <Footer />
      <AboutDialog open={showAbout} onOpenChange={setShowAbout} />
      <ContactDialog open={showContact} onOpenChange={setShowContact} />
    </div>
  );
};

export default MainLayout;
