import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Shield, UserPlus, Trash2 } from "lucide-react";
import type { AdminUser } from "@/types/user";

const UserPermissions = () => {
  const { toast } = useToast();
  const [users, setUsers] = useState<AdminUser[]>([
    {
      id: "1",
      email: "admin@example.com",
      role: "admin",
      permissions: {
        canCreateContent: true,
        canManageUsers: true,
        canManageJobs: true
      },
      createdAt: "2024-03-15"
    },
    {
      id: "2",
      email: "recruiter@example.com",
      role: "recruiter",
      permissions: {
        canCreateContent: true,
        canManageUsers: false,
        canManageJobs: true
      },
      createdAt: "2024-03-14"
    }
  ]);

  const handleToggleContentPermission = (userId: string) => {
    setUsers(prevUsers =>
      prevUsers.map(user => {
        if (user.id === userId && user.role !== 'admin') {
          return {
            ...user,
            permissions: {
              ...user.permissions,
              canCreateContent: !user.permissions.canCreateContent
            }
          };
        }
        return user;
      })
    );

    toast({
      title: "הרשאות עודכנו",
      description: "הרשאות המשתמש עודכנו בהצלחה",
    });
  };

  const handleAddContentCreator = (email: string) => {
    const newUser: AdminUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      role: 'content_creator',
      permissions: {
        canCreateContent: true,
        canManageUsers: false,
        canManageJobs: false
      },
      createdAt: new Date().toISOString()
    };

    setUsers(prev => [...prev, newUser]);
    toast({
      title: "משתמש נוסף",
      description: "כותב התוכן נוסף בהצלחה",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              ניהול הרשאות משתמשים
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>משתמש</TableHead>
                  <TableHead>תפקיד</TableHead>
                  <TableHead>הרשאת כתיבת תוכן</TableHead>
                  <TableHead>תאריך הוספה</TableHead>
                  <TableHead>פעולות</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.role === 'admin' ? 'מנהל' :
                       user.role === 'recruiter' ? 'מגייס' :
                       user.role === 'content_creator' ? 'כותב תוכן' :
                       'מועמד'}
                    </TableCell>
                    <TableCell>
                      {user.role === 'admin' ? (
                        <span className="text-muted-foreground">תמיד</span>
                      ) : (
                        <Button
                          variant={user.permissions.canCreateContent ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleToggleContentPermission(user.id)}
                        >
                          {user.permissions.canCreateContent ? 'מאופשר' : 'לא מאופשר'}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>{new Date(user.createdAt).toLocaleDateString('he-IL')}</TableCell>
                    <TableCell>
                      {user.role !== 'admin' && (
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => setUsers(users.filter(u => u.id !== user.id))}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default UserPermissions;