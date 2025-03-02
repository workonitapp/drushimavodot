import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/layout/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { StatsCards } from "@/components/admin/StatsCards";
import { QuickActions } from "@/components/admin/QuickActions";
import { StatsOverview } from "@/components/admin/StatsOverview";

const AdminDashboard = () => {
  console.log("Rendering AdminDashboard component");

  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => ({
      totalUsers: 142,
      activeUsers: 89,
      activeJobs: 24,
      activeGroups: 12
    })
  });

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">לוח בקרה</h1>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">סקירה כללית</TabsTrigger>
            <TabsTrigger value="users">משתמשים</TabsTrigger>
            <TabsTrigger value="permissions">הרשאות</TabsTrigger>
            <TabsTrigger value="settings">הגדרות</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <StatsCards stats={stats} />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <QuickActions />
              <StatsOverview />
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>ניהול משתמשים</CardTitle>
                <CardDescription>
                  צפייה ועריכה של פרטי משתמשים במערכת
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  טבלת משתמשים תוצג כאן
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>ניהול הרשאות</CardTitle>
                <CardDescription>
                  הגדרת הרשאות גישה למשתמשים ותפקידים
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  טבלת הרשאות תוצג כאן
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>הגדרות מערכת</CardTitle>
                <CardDescription>
                  הגדרות כלליות של המערכת
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  טופס הגדרות יוצג כאן
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;