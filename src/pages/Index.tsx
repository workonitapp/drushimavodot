
import MainLayout from "@/components/layout/MainLayout";
import FeaturedCarousel from "@/components/home/FeaturedCarousel";
import CommunitySection from "@/components/home/CommunitySection";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import FeaturedFreelancers from "@/components/home/FeaturedFreelancers";
import FeaturedAI from "@/components/home/FeaturedAI";
import FeaturedContent from "@/components/home/FeaturedContent";
import HomePricing from "@/components/home/HomePricing";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import TutorialGuide from "@/components/TutorialGuide";

const Index = () => {
  return (
    <MainLayout>
      <main className="overflow-y-auto scroll-smooth">
        <TutorialGuide />
        
        <section>
          <FeaturedCarousel />
        </section>

        <section id="groups-section">
          <CommunitySection />
        </section>

        <section id="jobs-section">
          <FeaturedJobs />
        </section>

        <section id="freelancers-section">
          <FeaturedFreelancers />
        </section>

        <section id="ai-section">
          <FeaturedAI />
        </section>

        <section id="courses-section">
          <FeaturedCourses />
        </section>

        <section id="content-section" className="bg-secondary/5">
          <FeaturedContent />
        </section>

        <section id="pricing-section">
          <HomePricing />
        </section>
      </main>
    </MainLayout>
  );
};

export default Index;
