import MainLayout from "@/components/layout/MainLayout";

const RecruiterProfile = () => {
  return (
    <MainLayout>
      <main className="container py-6">
        <h1 className="text-3xl font-bold mb-6">פרופיל מגייס</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">פרטים אישיים</h2>
            <div className="p-4 border rounded-lg">
              <div className="space-y-2">
                <p><span className="font-medium">שם:</span> ישראל ישראלי</p>
                <p><span className="font-medium">חברה:</span> חברת גיוס בע"מ</p>
                <p><span className="font-medium">תפקיד:</span> מגייס בכיר</p>
                <p><span className="font-medium">מיקום:</span> תל אביב</p>
                <p><span className="font-medium">טלפון:</span> 050-1234567</p>
                <p><span className="font-medium">דוא"ל:</span> recruiter@company.com</p>
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">משרות פעילות</h2>
            <div className="p-4 border rounded-lg">
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>מפתח/ת Full Stack</span>
                  <span className="text-sm text-muted-foreground">5 מועמדים</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>מנהל/ת מוצר</span>
                  <span className="text-sm text-muted-foreground">3 מועמדים</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>מעצב/ת UX/UI</span>
                  <span className="text-sm text-muted-foreground">7 מועמדים</span>
                </li>
              </ul>
            </div>
          </section>
          
          <section className="space-y-4 md:col-span-2">
            <h2 className="text-xl font-semibold">סטטיסטיקות</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-muted-foreground">משרות פעילות</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <p className="text-2xl font-bold">127</p>
                <p className="text-sm text-muted-foreground">מועמדים שנבדקו</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">גיוסים מוצלחים</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
};

export default RecruiterProfile;
