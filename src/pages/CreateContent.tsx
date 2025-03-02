import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tag, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import RichTextEditor from "@/components/RichTextEditor";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const CreateContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [mediaDialogOpen, setMediaDialogOpen] = useState(false);
  const [mediaType, setMediaType] = useState<"image" | "video" | "audio" | null>(null);
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaCaption, setMediaCaption] = useState("");
  const [mediaSize, setMediaSize] = useState<"small" | "medium" | "large">("medium");

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleAddMedia = (type: "image" | "video" | "audio") => {
    setMediaType(type);
    setMediaDialogOpen(true);
  };

  const handleInsertMedia = () => {
    if (!mediaType || !mediaUrl) return;

    let sizeClass = "";
    switch (mediaSize) {
      case "small":
        sizeClass = "w-1/3";
        break;
      case "medium":
        sizeClass = "w-2/3";
        break;
      case "large":
        sizeClass = "w-full";
        break;
    }

    let mediaHtml = "";
    switch (mediaType) {
      case "image":
        mediaHtml = `
          <div class="media-embed ${sizeClass} mx-auto my-4">
            <img src="${mediaUrl}" alt="${mediaCaption}" class="rounded-lg w-full h-auto" />
            <p class="text-sm text-center text-muted-foreground mt-2">${mediaCaption}</p>
          </div>
        `;
        break;
      case "video":
        mediaHtml = `
          <div class="media-embed ${sizeClass} mx-auto my-4">
            <div class="relative pb-[56.25%] h-0">
              <iframe 
                src="${mediaUrl}"
                title="${mediaCaption}"
                class="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <p class="text-sm text-center text-muted-foreground mt-2">${mediaCaption}</p>
          </div>
        `;
        break;
      case "audio":
        mediaHtml = `
          <div class="media-embed ${sizeClass} mx-auto my-4">
            <audio controls class="w-full">
              <source src="${mediaUrl}" type="audio/mpeg">
              הדפדפן שלך לא תומך בהשמעת אודיו
            </audio>
            <p class="text-sm text-center text-muted-foreground mt-2">${mediaCaption}</p>
          </div>
        `;
        break;
    }

    setContent(prevContent => prevContent + mediaHtml);
    setMediaDialogOpen(false);
    setMediaType(null);
    setMediaUrl("");
    setMediaCaption("");
    setMediaSize("medium");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content) {
      toast({
        title: "שגיאה",
        description: "נא למלא את כל השדות הנדרשים",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log({
      title,
      content,
      tags,
      date: new Date().toISOString(),
    });

    toast({
      title: "התוכן נוצר בהצלחה",
      description: "התוכן שלך פורסם בהצלחה",
    });

    navigate("/content");
  };

  return (
    <MainLayout>
      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">יצירת תוכן חדש</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">כותרת</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="הזן כותרת..."
                    />
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label>תגיות</Label>
                    <div className="flex gap-2">
                      <Input
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        placeholder="הוסף תגית..."
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                      />
                      <Button type="button" onClick={handleAddTag}>הוסף</Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="gap-1">
                          <Tag className="h-3 w-3" />
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-1 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Rich Text Editor */}
                  <div className="space-y-2">
                    <Label>תוכן</Label>
                    <RichTextEditor
                      content={content}
                      onChange={setContent}
                      onAddMedia={handleAddMedia}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => navigate("/content")}>
                ביטול
              </Button>
              <Button type="submit">פרסם תוכן</Button>
            </div>
          </form>
        </div>
      </main>

      {/* Media Dialog */}
      <Dialog open={mediaDialogOpen} onOpenChange={setMediaDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {mediaType === "image" ? "הוספת תמונה" :
               mediaType === "video" ? "הוספת סרטון" :
               "הוספת פודקאסט"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>
                {mediaType === "image" ? "קישור לתמונה" :
                 mediaType === "video" ? "קישור ליוטיוב" :
                 "קישור לקובץ אודיו"}
              </Label>
              <Input
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
                placeholder={
                  mediaType === "image" ? "הכנס URL של תמונה..." :
                  mediaType === "video" ? "הכנס URL של סרטון יוטיוב..." :
                  "הכנס URL של קובץ אודיו..."
                }
              />
            </div>
            <div className="space-y-2">
              <Label>כיתוב</Label>
              <Input
                value={mediaCaption}
                onChange={(e) => setMediaCaption(e.target.value)}
                placeholder="הוסף כיתוב למדיה..."
              />
            </div>
            <div className="space-y-2">
              <Label>גודל תצוגה</Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={mediaSize === "small" ? "default" : "outline"}
                  onClick={() => setMediaSize("small")}
                >
                  קטן
                </Button>
                <Button
                  type="button"
                  variant={mediaSize === "medium" ? "default" : "outline"}
                  onClick={() => setMediaSize("medium")}
                >
                  בינוני
                </Button>
                <Button
                  type="button"
                  variant={mediaSize === "large" ? "default" : "outline"}
                  onClick={() => setMediaSize("large")}
                >
                  גדול
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setMediaDialogOpen(false)}>
              ביטול
            </Button>
            <Button onClick={handleInsertMedia}>
              הוסף {
                mediaType === "image" ? "תמונה" :
                mediaType === "video" ? "וידאו" :
                "פודקאסט"
              }
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default CreateContent;
