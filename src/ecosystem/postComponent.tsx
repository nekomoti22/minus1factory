import{ createClient,SupabaseClient } from "@supabase/supabase-js"
import React, { useState } from 'react'

const supabaseUrl: string = "https://cdvdeesoyjnugbafkrul.supabase.co"
const supabasekey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdmRlZXNveWpudWdiYWZrcnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NzU0MzEsImV4cCI6MjAzODE1MTQzMX0.jJGXFeqyQyEDSB4uRjqb0TN1UKbhbgnklXZ4ZkNzgXk"
const supabase: SupabaseClient = createClient(supabaseUrl, supabasekey)


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


// PostButtonコンポーネント
const PostButton = () => {

    const [image, setimage] = useState("")
    const [userId, setUserId] = useState<string | null>(null)

    // ボタンがクリックされた時の処理
    const handleClick = async () => {

        // const url = uploadStorage(image,"");


        console.log("userId",userId);
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
        const u_id = 10;

/*ここに投稿データを入力(今は仮で文字を入れてます)*/
const addData = async ({user_id,content,title,date,repository_URL,image_url1,image_url2,image_url3,image_url4,posttype,like_id}:post): Promise<void> => {
    const { data, error } = await supabase
        .from('posts')
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

        /*ここに投稿データを入力(今は仮で文字を入れてます)*/

        return (
            <button onClick={handleClick}>
                Add Data
            </button>
        )
    }
}

export default PostButton;