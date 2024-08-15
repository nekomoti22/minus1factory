import { v4 as uuidv4 } from "uuid";
import { supabase } from "../lib/supabase-client.ts";

type UploadStorage = {
    filelist: FileList;
    bucketName: string;
  };
  
  type UploadPathname = {
    path: string;
  };

  export const uploadStorage = async ({
    filelist,
    bucketName,
  }: UploadStorage): Promise<UploadPathname> => {
    console.log("関数が入った");
    console.log(filelist);
    console.log(bucketName);
    
      const file = filelist[0]; // 1ファイルアップロード
      console.log("ファイルが選択された");
      
      const pathName = `characters/${uuidv4()}`; // パス名の設定
      console.log("パスの作成ができた");
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(pathName, file, {
          cacheControl: "3600",
          upsert: false,
        });
      console.log("アップロードができた");
      if (error) throw error;
      return {
        path: data?.path ?? null,
      };
  };
  

  