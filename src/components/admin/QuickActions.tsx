import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();
  
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>פעולות מהירות</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={() => navigate("/admin/permissions")}
        >
          <Shield className="ml-2 h-4 w-4" />
          ניהול הרשאות
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={() => navigate("/admin/settings")}
        >
          <Settings className="ml-2 h-4 w-4" />
          הגדרות מערכת
        </Button>
      </CardContent>
    </Card>
  );
};