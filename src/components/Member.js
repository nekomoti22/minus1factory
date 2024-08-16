import React, { useEffect, useState } from "react";
import { Tabs, Tab, TextField, InputAdornment } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { SnsIcon } from "./SnsIcon.js";
import PostCard from "./PostCard.js";
import { posts } from "../test.ts";
import { fetchPosts } from "../ecosystem/postcontentTohome.ts";
import { getFullName } from "../ecosystem/storage.ts";
import { Link } from "react-router-dom";

function Member() {
  const [value, setValue] = React.useState("one");
  const [fechedPosts, setFechedPosts] = useState([]);
  console.log(fechedPosts);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  let postData = [];
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchPosts(); // fetchPosts() をawaitで呼び出し
      setFechedPosts(fetchedData);
      return fetchData;
    };

    fetchData(); // 非同期関数を呼び出し
    // fechedPosts.forEach(element => {
    //   let fullName = 'eeet'
    //   const fetchFullName = async () => {
    //     const fetchedFullName = await getFullName('9b23de72-8e00-4cb8-88f1-09a3d828e5c0')
    //     fullName = fetchedFullName
    //   }
    //   fetchFullName()
    //   console.log(fullName)
    //   console.log(element.user_id)
    //   console.log(postData)
    //   postData.push({full_name: fullName, date: element.date, title:element.title, repository_URL:element.repository_URL, image_url1:element.image_url1 })
    // });
  }, []);

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ backgroundColor: "#f0f0f0", width: "100%" }}
        >
          <Tab label="制作物" component={Link} to="/Home" />
          <Tab label="仲間募集" component={Link} to="/Member" />
          <Tab label="イベント" component={Link} to="/Event" />
        </Tabs>
      </div>
      <div>メンバー</div>
      {/* <div>
        <TextField
          fullWidth
          id="fullWidth"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="検索"
        />
      </div> */}
      {/* 複数並ぶ */}
      <div style={{ paddingBottom: 50 }}>
        {" "}
        {fechedPosts.map((post) => (
          <PostCard
            userName={post.user_id}
            date={post.date}
            title={post.title}
            repository_URL={post.repository_URL}
            image_url1={post.image_url1}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Member;
