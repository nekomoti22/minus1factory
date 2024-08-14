import{ createClient,SupabaseClient } from "@supabase/supabase-js/src/index.ts"
import React, { useState } from 'react'

const supabaseUrl : string = "https://cdvdeesoyjnugbafkrul.supabase.co"
const supabasekey : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdmRlZXNveWpudWdiYWZrcnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NzU0MzEsImV4cCI6MjAzODE1MTQzMX0.jJGXFeqyQyEDSB4uRjqb0TN1UKbhbgnklXZ4ZkNzgXk"
const supabase : SupabaseClient = createClient(supabaseUrl,supabasekey)

type post = {
    id: number
    user_id: string,
    content: string,
    title: string,
    date: string,
    repository_URL : string,
    image_url1: string,
    image_url2: string,
    image_url3: string,
    image_url4: string,
    posttype: string,
    like_id: number,
}


// PostButtonコンポーネント
const PostButton= () => {
    const [userId, setUserId] = useState<string | null>(null)
        // ボタンがクリックされた時の処理
    const handleClick = async () => {
        // ユーザーIDを取得
        if (!userId) {
            const { data: userData, error: userError } = await supabase.auth.getUser()
            if (userError) {
                console.error('Error fetching user:', userError)
                return
            }
            if (userData && userData.user) {
                setUserId(userData.user.id)
            } else {
                console.error('User ID is not available.')
                return
            }
        }

/*ここに投稿データを入力(今は仮で文字を入れてます)*/
const addData = async (): Promise<void> => {
    const { data, error } = await supabase
        .from('posts')
        .insert([
            {
            user_id: "1", 
            content: "Content", 
            title: "Title", 
            date: "2021-06-01", 
            repository_URL: "Repository_URL",
            image_url1: "Image_url",
            image_url2: "Image_url",
            image_url3: "Image_url",
            image_url4: "Image_url", 
            posttype: "Type",
            like_id: "1",
        },
        ])
        if (error) {
            console.error('Error adding data:', error)
        } else {
            console.log('Data added:', data)
        }
    }   

    return (
        <button onClick={handleClick}>
            Add Data
        </button>
    )
}
}

export default PostButton;