import MainLayout from "@/components/layout/MainLayout";

const CandidateProfile = () => {
  return (
    <MainLayout>
      <main className="container py-6">
        <h1 className="text-3xl font-bold mb-6">פרופיל מועמד</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">פרטים אישיים</h2>
            <div className="p-4 border rounded-lg">
              <div className="space-y-2">
                <p><span className="font-medium">שם מלא:</span> ישראל ישראלי</p>
                <p><span className="font-medium">אימייל:</span> israel@example.com</p>
                <p><span className="font-medium">טלפון:</span> 050-1234567</p>
                <p><span className="font-medium">עיר:</span> תל אביב</p>
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">ניסיון תעסוקתי</h2>
            <div className="p-4 border rounded-lg">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">מפתח Full Stack</h3>
                  <p className="text-sm text-muted-foreground">חברת טכנולוגיה בע"מ</p>
                  <p className="text-sm text-muted-foreground">2020 - היום</p>
                </div>
                <div>
                  <h3 className="font-medium">מפתח Frontend</h3>
                  <p className="text-sm text-muted-foreground">סטארט-אפ חדשני</p>
                  <p className="text-sm text-muted-foreground">2018 - 2020</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">השכלה</h2>
            <div className="p-4 border rounded-lg">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">תואר ראשון במדעי המחשב</h3>
                  <p className="text-sm text-muted-foreground">אוניברסיטת תל אביב</p>
                  <p className="text-sm text-muted-foreground">2015 - 2018</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">כישורים</h2>
            <div className="p-4 border rounded-lg">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">SQL</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
};

export default CandidateProfile;
