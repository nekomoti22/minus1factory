import { createClient } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase-client.ts";

// 投稿データの型定義
type Posts = {
  id: number;
  user_id: string;
  content: string;
  title: string;
  date: string;
  repository_URL: string;
  image_url1: string;
  image_url2: string;
  image_url3: string;
  image_url4: string;
  posttype: string;
  like_id: number;
};

// 投稿データを取得する関数
export const fetchPosts = async (): Promise<Posts[]> => {
  const { data, error } = await supabase
    .from('post')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return [];
  }

  return data || [];
};

// Reactの例。post.〇〇で取得したデータを表示している
//     return (
//         <div>
//         <h1>Posts</h1>
//         <ul>
//             {posts.map(post => (
//             <li key={post.id}>
//                 <h2>{post.title}</h2>
//                 <p>{post.content}</p>
//                 {/* <p><strong>Likes:</strong> {post.countLikes}</p>
//                 <p><strong>Comments:</strong> {post.countComments}</p> */}
//             </li>
//             ))}
//         </ul>
//         </div>
//     );