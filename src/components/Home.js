import React from "react";
import { Tabs, Tab, TextField, InputAdornment } from "@mui/material";
// import Avatar from '@mui/material/Avatar';
import SearchIcon from "@mui/icons-material/Search";
// import { SnsIcon } from "./SnsIcon";
import PostCard from "./PostCard";
import { posts } from "../test.ts";

function Home() {
  const [value, setValue] = React.useState("one");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // useEffect() //フェッチ

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ backgroundColor: "#f0f0f0", width: "100%" }}
        >
          <Tab label="制作物" />
          {/* <Tab label="仲間募集" />
          <Tab label="イベント" /> */}
        </Tabs>
      </div>
      <div>
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
      </div>
      {/* 複数並ぶ */}
      <div style={{paddingBottom:50}}> {posts.map((post) => <PostCard userName={post.content} date={post.date} title={post.title} repository_URL={post.repository_URL} image_url1={post.image_url1} />)}</div>
    </div>
  );
}

export default Home;
