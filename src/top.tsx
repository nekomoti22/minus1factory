import{ useState , useEffect, createContext, useContext } from "react";
import { supabase } from "../supabaseClient";


/*タイトル、内容の各値を状態管理するための記述*/
export default function Top() {
    /*一覧機能*/
    const [posts, setPosts] = useState([]);

    useEffect(() => {
     (async () => await indexPost())();
    }, []);
/*ログインしていると投稿できるがしていないとalertでエラーを表示する*/
const indexPost = async () => {
    try {
        const { data, error } = await supabase.from("posts").select("*");
        if (error) throw error;
        type Post = {
  title: string;
  content: string;
};
const [posts, setPosts] = useState<Post[]>([]);
        setPosts(data);
        
        
    } catch (error) {
        // alert(error.message);
        setPosts([]);
    }
    };

/*投稿機能*/
const [newTitle, setNewTitle] = useState("");
const [newContent, setNewContent] = useState("");

const addPost = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try{
        const {error} = await supabase.from("posts").insert([
            {
                title: newTitle, 
                content: newContent
            }
        ]);
        if(error) throw error;
        await indexPost();
        setNewTitle("");
        setNewContent("");
        } catch (error) {
            alert("データの新規登録ができません")
            }
   
}

   /*  フロントエンドでの例
　 ・一覧機能
return(
    <>
      <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h1>トップページ</h1>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>投稿日</th>
                    <th>タイトル</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.created_at.substr(0, 10)}</td>
                      <td>{post.title}</td>
                      <td>{post.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
    </>
  )
}

   ・投稿機能
   タイトルと内容のフォームにonChangeイベントを設定し、入力した各値を保持します。
   return(
        <>
          <div className={styles.container}>
            <main className={styles.main}>
            <div>
              <form onSubmit={addPost}>
                 <div>
                    <label>タイトル</label><br/>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)} />
                  </div>
                  <div>
                    <label>内容</label><br/>
                    <textarea value={newContent} rows={10} cols={40}  onChange={(e) => setNewContent(e.target.value)}/>
                  </div>
                  <div>
                    <button type="submit">投稿</button>
                  </div>
              </form>
            </div>
          </main>
          <footer className={styles.footer}>
          </footer>
        </div>
        </>
      )
      */
}Ï
