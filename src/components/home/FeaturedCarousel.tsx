import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useAuth } from '@/context/AuthContext';
import { Briefcase, FileText } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import CreateJobForm from '../jobs/CreateJobForm';

const FeaturedCarousel = () => {
  const navigate = useNavigate();
  const [showJobDialog, setShowJobDialog] = useState(false);
  const [showWarningDialog, setShowWarningDialog] = useState(false);
  const { t } = useTranslation();
  const { user } = useAuth();

  const handlePostJobClick = () => {
    if (!user) {
      setShowWarningDialog(true);
    } else if (user.role === 'candidate') {
      setShowWarningDialog(true);
    } else {
      setShowJobDialog(true);
    }
  };

  return (
    <section className="py-2 content-gradient">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <div className="space-y-2 mt-[2px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 py-4">
              <Button
                size="lg"
                className="fun-button"
                onClick={handlePostJobClick}
              >
                <Briefcase className="ml-2 h-5 w-5" />
                {t('home.hero.postJob')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/jobs')}
                className="hover-gradient"
              >
                <FileText className="ml-2 h-5 w-5" />
                {t('home.hero.findJob')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Creation Dialog */}
      <Dialog open={showJobDialog} onOpenChange={setShowJobDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <CreateJobForm />
        </DialogContent>
      </Dialog>

      {/* Warning Dialog for Candidates */}
      <Dialog open={showWarningDialog} onOpenChange={setShowWarningDialog}>
        <DialogContent className="max-w-md">
          <div className="text-center p-4">
            <h2 className="text-xl font-semibold mb-4">
              {t(
                'modals.recruiterRequired.title',
                'Recruiter Account Required'
              )}
            </h2>
            <p className="mb-6">
              {t(
                'modals.recruiterRequired.message',
                'You need to sign up as a recruiter to post jobs.'
              )}
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setShowWarningDialog(false)}
              >
                {t('common.close', 'Close')}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedCarousel;
