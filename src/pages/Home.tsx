import MainLayout from '@/components/layout/MainLayout';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">{t('home.welcome')}</h1>
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {t('home.featuredJobs')}
            </h2>
            <p className="text-muted-foreground">
              {t('home.featuredJobsDesc')}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {t('home.latestContent')}
            </h2>
            <p className="text-muted-foreground">
              {t('home.latestContentDesc')}
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
