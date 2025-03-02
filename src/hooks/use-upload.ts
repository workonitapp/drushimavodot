import { useState } from 'react';
import { uploadFile, getFileUrl } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

export const useUpload = (bucket: string) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const upload = async (file: File, path?: string) => {
    try {
      setIsUploading(true);
      console.log('Starting file upload:', { file, bucket, path });
      
      const filePath = path || `${Date.now()}-${file.name}`;
      const data = await uploadFile(bucket, filePath, file);
      
      console.log('File uploaded successfully:', data);
      const url = getFileUrl(bucket, filePath);
      
      return url;
    } catch (error) {
      console.error('File upload failed:', error);
      toast({
        title: "שגיאה בהעלאת הקובץ",
        description: "אנא נסה שנית",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  return { upload, isUploading };
};