import { createClient } from "@supabase/supabase-js/src"
import React from 'react'
import{ useState, useEffect } from 'react'

const supabase = createClient("https://cdvdeesoyjnugbafkrul.supabase.co" , "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdmRlZXNveWpudWdiYWZrcnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NzU0MzEsImV4cCI6MjAzODE1MTQzMX0.jJGXFeqyQyEDSB4uRjqb0TN1UKbhbgnklXZ4ZkNzgXk")


type post = {
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

  const App: React.FC = () => {
    const [posts, setPosts] = useState<post[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const { data, error } = await supabase
          .from('posts')
          .select('*');
  
        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setPosts(data || []);
        }
      };
      fetchData();
    }, []); 


    // Reactの例。全部コメントアウトしたらなんかエラーがでる
    return (
        <div>
        <h1>Posts</h1>
        <ul>
            {posts.map(post => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                {/* <p><strong>Likes:</strong> {post.countLikes}</p>
                <p><strong>Comments:</strong> {post.countComments}</p> */}
            </li>
            ))}
        </ul>
        </div>
    );

    }
export default App;
