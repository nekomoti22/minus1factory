
type PostType = {
    id: number,
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

type userType ={
    id: number,
    github_icon:string,
    post_list_id:number,
}

type likeType ={
    user_id_1:number,
    user_id_2:number,
    user_id_3:number,
}

type userspostsType ={
    post_id:number,
}
export const posts: PostType[] = [
    {
        id: 1,
        user_id: "aa1",
        content: "aaaa",
        title: "title1",
        date: "2024/08/1",
        repository_URL: "https://github.com/toryumon-pj/hack-kansai-2024-teamC",
        image_url1: "https://cdn.pixabay.com/photo/2024/05/24/19/06/bird-8785666_1280.jpg",
        image_url2: "",
        image_url3: "",
        image_url4: "",
        posttype: "",
        like_id: 10,

    },
    {
        id: 2,
        user_id: "bb2",
        content: "bbbb",
        title: "title2",
        date: "2024/08/2",
        repository_URL: "https://github.com/toryumon-pj/hack-kansai-2024-git-tutorial-teamC",
        image_url1: "https://cdn.pixabay.com/photo/2023/12/15/03/11/basket-to-the-sea-8449952_1280.jpg",
        image_url2: "",
        image_url3: "",
        image_url4: "",
        posttype: "",
        like_id: 10,

    }
]

export const users: userType[]=[
    {
        id: 1,
        github_icon:"https://cdn.pixabay.com/photo/2024/07/05/22/30/penguin-8875750_1280.jpg",
        post_list_id:1,
    },
    {
        id: 2,
        github_icon:"https://cdn.pixabay.com/photo/2024/07/05/22/30/penguin-8875750_1280.jpg",
        post_list_id:2,
    }
]

export const likes: likeType[]=[
    {
        user_id_1:1,
        user_id_2:2,
        user_id_3:3,
    },
    {
        user_id_1:4,
        user_id_2:5,
        user_id_3:6,
    }
]

export const usersposts:userspostsType[]=[
    {
        post_id:1,
    }
]