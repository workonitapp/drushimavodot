import React from "react";
import { Progress } from "@/components/ui/progress";
import JobCardSkeleton from "./JobCardSkeleton";

interface JobsLoadingProps {
  loadingProgress: number;
}

const JobsLoading = ({ loadingProgress }: JobsLoadingProps) => {
  return (
    <>
      <Progress 
        value={loadingProgress} 
        className="mb-4"
        aria-label="טוען משרות..."
      />
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {[1, 2, 3].map((n) => (
          <JobCardSkeleton key={n} />
        ))}
      </div>
    </>
  );
};

export default JobsLoading;