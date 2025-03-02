import React from "react";
import JobCard from "./JobCard";
import { Job } from "@/types/job";

interface JobsListProps {
  jobs: Job[];
  selectedJob: number | null;
  onJobClick: (jobId: number) => void;
}

const JobsList = ({ jobs, selectedJob, onJobClick }: JobsListProps) => {
  return (
    <div className="grid gap-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => onJobClick(job.id)}
          className="cursor-pointer transition-transform hover:scale-[1.01]"
          role="article"
          aria-expanded={selectedJob === job.id}
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onJobClick(job.id);
            }
          }}
        >
          <JobCard
            title={job.title}
            company={job.company}
            companyLogo={job.companyLogo}
            location={job.location}
            type={job.type}
            salary={job.salary}
            description={job.description}
            requirements={job.requirements}
            benefits={job.benefits}
            skills={job.skills}
            experience={job.experience}
            education={job.education}
            startDate={job.startDate}
            remote={job.remote}
            isExpanded={selectedJob === job.id}
            onSave={() => {
              console.log("Saving job:", job.id);
            }}
            onApply={() => {
              console.log("Applying to job:", job.id);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default JobsList;