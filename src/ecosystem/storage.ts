import { supabase } from "../lib/supabase-client.ts";
import { v4 as uuidv4 } from "uuid";

type UploadStorage = {
  filelist: FileList;
  bucketName: string;
};

type UploadPathname = {
  path: string;
};

type post = {
  id: number
  user_id: string,
  content: string,
  title: string,
  date: string,

  repository_URL: string,

  image_url1: string,
  image_url2: string,
  image_url3: string,
  image_url4: string,
  posttype: string,
  like_id: number,
}

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




export const addData = async ({ user_id, content, title, date, repository_URL, image_url1, image_url2, image_url3, image_url4, posttype, like_id }:post): Promise<void> => {

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

//userIdを取得
export async function getuserId(): Promise<string | null> {
  try {
    //supabase.auth.getUser()でユーザー情報を取得
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Error fetching user:', error);
      return null;
    }

    return data?.user?.id || null;
  } catch (err) {
    console.error('Unexpected error:', err);
    return null;
  }
}

//[post]のuser_idから[user]のfull_nameを取得
//呼び出すときはgetFullName(getuserId)でいけるはず

export async function getFullName(userId: string): Promise<string | null> {
  try {
    // 非同期処理を実行
    const { data, error } = await supabase
      .from('users')
      .select('full_name') //usersのfull_nameを取得
      .eq('id', userId) //idの中からuserIdを比較して一致する時
      .single(); // 単一のレコードを取得する

    // エラーチェック
    if (error) {
      console.error('Error fetching user:', error);
      return null;
    }

    // データが存在する場合に full_name を返す
    return data?.full_name || null;
  } catch (err) {
    // 予期しないエラー処理
    console.error('Unexpected error:', err);
    return null;
  }
}
