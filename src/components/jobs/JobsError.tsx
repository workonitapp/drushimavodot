import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const JobsError = () => {
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        אירעה שגיאה בטעינת המשרות. אנא נסה שוב מאוחר יותר.
      </AlertDescription>
    </Alert>
  );
};

export default JobsError;