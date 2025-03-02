import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const StatsOverview = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>סטטיסטיקות</CardTitle>
        <CardDescription>
          נתונים סטטיסטיים על המערכת
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex-1">משתמשים חדשים החודש</div>
            <div className="font-bold">+24</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1">משרות חדשות החודש</div>
            <div className="font-bold">+8</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1">קבוצות חדשות החודש</div>
            <div className="font-bold">+3</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};