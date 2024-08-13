import{ createClient,SupabaseClient } from "@supabase/supabase-js/src/index.ts"
import React from 'react'

const supabaseUrl : string = "https://cdvdeesoyjnugbafkrul.supabase.co"
const supabasekey : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdmRlZXNveWpudWdiYWZrcnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NzU0MzEsImV4cCI6MjAzODE1MTQzMX0.jJGXFeqyQyEDSB4uRjqb0TN1UKbhbgnklXZ4ZkNzgXk"
const supabase : SupabaseClient = createClient(supabaseUrl,supabasekey)

type post = {
    id: number
    user_id: string,
    title: string,
    postType: string,
    created_at: string,
    content: string,
    countLikes: number,
    countComments: number,
    imageURL: string,
    GithubURL : string,
}


/*ここに入れるデータを入力*/
const addData = async (): Promise<void> => {
    const { data, error } = await supabase
        .from('posts')
        .insert([
            { user_id: "1", title: "Title", postType: "Type", created_at: "2021-06-01", content: "Content", countLikes: 0, countComments: 0, imageURL: "ImageURL", GithubURL: "GithubURL" },
        ])
        if (error) {
            console.error('Error adding data:', error)
        } else {
            console.log('Data added:', data)
        }
}

const YourComponent: React.FC = () => {
    return (
        <button onClick={addData}>
            Add Data
        </button>
    )
}

export default YourComponent;