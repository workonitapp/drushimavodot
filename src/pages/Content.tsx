
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tag, Search, Video, AudioWaveform, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Content = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [contentType, setContentType] = useState<string | null>(null);

  const allTags = ["ראיונות", "הייטק", "קריירה", "טרנדים", "קורות חיים", "טיפים", "חיפוש עבודה", "מתחילים"];

  const contentItems = [
    {
      title: "מדריך לראיון עבודה בהייטק",
      excerpt: "טיפים מעשיים להצלחה בראיון עבודה בתעשיית ההייטק",
      tags: ["ראיונות", "הייטק"],
      date: "22 פבר 2024",
      image: "photo-1486312338219-ce68d2c6f44d",
      type: "article"
    },
    {
      title: "טרנדים בשוק העבודה 2024",
      excerpt: "מגמות חדשות ומה צפוי בשוק העבודה השנה",
      tags: ["קריירה", "טרנדים"],
      date: "20 פבר 2024",
      image: "photo-1581091226825-a6a2a5aee158",
      type: "video"
    },
    {
      title: "איך לכתוב קורות חיים שמנצחים",
      excerpt: "המדריך המלא לכתיבת קורות חיים שיתפסו את העין של המגייסים",
      tags: ["קורות חיים", "טיפים"],
      date: "18 פבר 2024",
      image: "photo-1519389950473-47ba0277781c",
      type: "podcast"
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || item.tags.includes(selectedTag);
    const matchesType = !contentType || item.type === contentType;
    return matchesSearch && matchesTag && matchesType;
  });

  return (
    <MainLayout>
      <main className="bg-background">
        <div className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">תכנים מקצועיים</h1>
                <p className="text-muted-foreground">מאמרים, סרטונים ופודקאסטים בנושאי קריירה ופיתוח מקצועי</p>
              </div>
              <Button onClick={() => navigate("/content/create")}>
                <Plus className="h-4 w-4 ml-2" />
                צור תוכן חדש
              </Button>
            </div>

            <div className="flex flex-col gap-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="חיפוש תכנים..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                  />
                </div>

                <Select
                  value={contentType || "all"}
                  onValueChange={(value) => setContentType(value === "all" ? null : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="סוג תוכן" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">הכל</SelectItem>
                    <SelectItem value="article">מאמרים</SelectItem>
                    <SelectItem value="video">סרטונים</SelectItem>
                    <SelectItem value="podcast">פודקאסטים</SelectItem>
                  </SelectContent>
                </Select>

                <button
                  onClick={() => {
                    setSelectedTag(null);
                    setContentType(null);
                    setSearchQuery("");
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  נקה סינון
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary/90 transition-colors"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((content, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={`https://images.unsplash.com/${content.image}?w=600`}
                      alt={content.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                    {content.type !== 'article' && (
                      <div className="absolute top-3 right-3 glass p-1.5 rounded-full">
                        {content.type === 'video' ? (
                          <Video className="h-4 w-4 text-white" />
                        ) : (
                          <AudioWaveform className="h-4 w-4 text-white" />
                        )}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {content.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="text-xs cursor-pointer hover:bg-primary/90 transition-colors"
                          onClick={() => setSelectedTag(tag)}
                        >
                          <Tag className="h-2.5 w-2.5 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{content.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{content.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => navigate(`/content/${index + 1}`)}
                        className="text-primary hover:underline text-sm"
                      >
                        קרא/י עוד
                      </button>
                      <span className="text-xs text-muted-foreground">{content.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </MainLayout>
  );
};

export default Content;
