
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Building2, 
  MapPin, 
  Clock, 
  Briefcase,
  Heart,
  Share2,
  Sparkles,
  GraduationCap,
  Rocket,
  Info
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface JobCardProps {
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements?: string;
  benefits?: string[];
  skills?: string[];
  experience?: string;
  education?: string;
  startDate?: string;
  remote?: boolean;
  isExpanded: boolean;
  onSave: (e: React.MouseEvent) => void;
  onApply: (e: React.MouseEvent) => void;
}

const JobCard = ({
  title,
  company,
  companyLogo,
  location,
  type,
  salary,
  description,
  requirements,
  benefits,
  skills,
  experience,
  education,
  startDate,
  remote,
  isExpanded,
  onSave,
  onApply,
}: JobCardProps) => {
  const [isApplyDialogOpen, setIsApplyDialogOpen] = React.useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = React.useState(false);
  const { toast } = useToast();

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave(e);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `משרה: ${title}`,
        text: `משרה חדשה ב-${company}: ${title}`,
        url: window.location.href,
      }).catch(console.error);
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting application...");
    setIsApplyDialogOpen(false);
    toast({
      title: "הגשת מועמדות",
      description: "קורות החיים נשלחו בהצלחה!",
    });
  };

  return (
    <>
      <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Header with Logo and Actions */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <Avatar className="h-12 w-12 border-2 border-muted">
                  <AvatarFallback className="bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary/80" />
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 shrink-0" />
                    {company}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{location}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSaveClick}
                  className="hover:bg-primary/10"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleShareClick}
                  className="hover:bg-primary/10"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Job Details Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>{type}</span>
                </div>
                {experience && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>{experience}</span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                {startDate && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Rocket className="h-4 w-4" />
                    <span>{startDate}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{salary}</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-secondary/10 hover:bg-secondary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}

            {/* Description */}
            {isExpanded && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    תיאור התפקיד
                  </h4>
                  <p className="text-muted-foreground whitespace-pre-line">{description}</p>
                </div>

                {requirements && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      דרישות
                    </h4>
                    <p className="text-muted-foreground whitespace-pre-line">{requirements}</p>
                  </div>
                )}

                {benefits && benefits.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      הטבות
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button 
                onClick={() => setIsApplyDialogOpen(true)}
                className="fun-button flex-1"
              >
                <Rocket className="w-4 h-4 ml-2" />
                הגש מועמדות
              </Button>
              {!isExpanded && (
                <Button 
                  variant="outline"
                  onClick={() => setIsDetailsDialogOpen(true)}
                  className="flex-1"
                >
                  <Info className="w-4 h-4 ml-2" />
                  פרטים נוספים
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Apply Dialog */}
      <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>הגשת מועמדות - {title}</DialogTitle>
            <DialogDescription>
              מלא/י את הפרטים הבאים להגשת מועמדות למשרה
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleApplySubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">שם מלא</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">אימייל</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">טלפון</Label>
              <Input id="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cv">קורות חיים</Label>
              <Input id="cv" type="file" accept=".pdf,.doc,.docx" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">הערות נוספות</Label>
              <Textarea id="notes" />
            </div>
            <Button type="submit" className="w-full">
              שלח מועמדות
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {company} - {location}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                תיאור התפקיד
              </h4>
              <p className="text-muted-foreground whitespace-pre-line">{description}</p>
            </div>
            
            {requirements && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  דרישות
                </h4>
                <p className="text-muted-foreground whitespace-pre-line">{requirements}</p>
              </div>
            )}
            
            {benefits && benefits.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  הטבות
                </h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end">
              <Button onClick={() => {
                setIsDetailsDialogOpen(false);
                setIsApplyDialogOpen(true);
              }}>
                <Rocket className="w-4 h-4 ml-2" />
                הגש מועמדות
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JobCard;
