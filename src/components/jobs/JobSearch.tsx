import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface JobSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const JobSearch = ({ searchTerm, onSearchChange }: JobSearchProps) => {
  return (
    <div className="glass p-4 rounded-2xl mb-6 glow scale-hover">
      <div className="relative">
        <Input
          placeholder="חיפוש חופשי... (משרה, חברה, מיקום, כישורים ועוד)"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pr-10 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/30 h-12 text-lg"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      </div>
    </div>
  );
};

export default JobSearch;