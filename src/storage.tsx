// /*画像アップロードの機能  複数ファイル対応！*/
// import { supabase } from "../supabaseClient";
// import { v4 as uuidv4 } from "uuid";
// import { createContext, useContext, useState } from 'react';
// import React from "react";

// type UploadStorage = {
//     folder: FileList; // 複数ファイルを含むリスト
//     bucketName: string;
//   };
  
//   type UploadPathname = {
//     path: string;
//   };
        
//   export const uploadMultipleFiles = async ({
//     folder,
//     bucketName,
//   }: UploadStorage): Promise<UploadPathname[]> => {
//       const uploadedFiles: UploadPathname[] = [];
  
//       for (const file of folder) {  // FileListは配列のように扱える
//           const pathName = `characters/${uuidv4()}`;
//           const { data, error } = await supabase.storage
//             .from(bucketName)
//             .upload(pathName, file, {
//               cacheControl: "3600",
//               upsert: false,
//             });
//           if (error) throw error;
//           uploadedFiles.push({ path: data?.path ?? null });
//       }
  
//       return uploadedFiles; // アップロードされたすべてのファイルのパスを返す
//   };
// export { UploadStorage };

// // 1. コンテキストの作成
// const ImageContext = createContext<{
//   imageUrl: string | undefined;
//   setImageUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
// }>({
//   imageUrl: undefined,
//   setImageUrl: () => {}, // 初期値は空の関数に設定
// });

// // 2. プロバイダーの作成
// const ImageProvider = ({ children }) => {
// const [imageUrl, setImageUrl] = useState<string | undefined>();

// return (
//   <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
//     {children}
//   </ImageContext.Provider>
// );
// };
// // 3. カスタムフックで簡単に利用できるようにする
// const useImage = () => useContext(ImageContext);
// export default function Example(){
//   const [ path, setPathName ] = useState<string | undefined>();
//   const { setImageUrl } = useImage();  // コンテキストから関数を取得

//   const handleUploadStorage = async (folder: FileList | null) => {
//     if (!folder || !folder.length) return;
//     const { path } = await uploadStorage({
//       folder,
//       bucketName: "pictures",
//     });
//     const { data } = supabase.storage.from("pictures").getPublicUrl(path)
//     if (path) {
//       setPathName(data.publicUrl);
//       setImageUrl(data.publicUrl);  // グローバルな状態にも保存
//     }
//     console.log(path)
//   };

//   //おそらく記入例
//   // return (
//   //   <label htmlFor="file-upload">
//   //     <span>アップロードする</span>
//   //     <input
//   //       id="file-upload"
//   //       name="file-upload"
//   //       type="file"
//   //       className="sr-only"
//   //       accept="image/png, image/jpeg, video/mp4, video/avi, video/mov"
//   //       onChange={(e) => {
//   //         const fileList = e.target?.files;
//   //         console.log(fileList);
//   //         handleUploadStorage(fileList);
//   //       }}
//   //     />
//   //     <img src={path} alt="" width="800" height="500"/>
//   //   </label>
//   // );
// };