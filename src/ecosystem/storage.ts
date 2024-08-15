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
  const extension = file.name.split('.').pop();
  console.log("extention",extension);
  
  

  const pathName = `characters/${uuidv4()}.${extension}`; // パス名の設定
  console.log("パスの作成ができた");
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(pathName, file, {
      cacheControl: "3600",
      upsert: false,
    });
  console.log("アップロードができた",data?.path);
  if (error) throw error;
  return {
    path: data?.path ?? null,
  };
};




export const addData = async ({ user_id, content, title, date, repository_URL, image_url1, image_url2, image_url3, image_url4, posttype, like_id }): Promise<void> => {

  // console.log(user_id, content, title, date, repository_URL, image_url1, image_url2, image_url3, image_url4, posttype, like_id);

  const { data, error } = await supabase
    .from('post')
    .insert([
      {
        user_id: user_id,
        content: content,
        title: title,
        date: date,
        repository_URL: repository_URL,
        image_url1: image_url1,
        image_url2: image_url2,
        image_url3: image_url3,
        image_url4: image_url4,
        posttype: posttype,
        like_id: like_id
      },
    ])
  if (error) {
    console.error('Error adding data:', error)
  } else {
    console.log('Data added:', data)
  }
}


