import React, { useState } from 'react';
import PostHeader from './PostHeader'; // PostHeaderをインポート
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import FileUploadUI from './FileUploadUI'; // FileUploadUIをインポート

function PostCreate() {
  // const [selectedCategory, setSelectedCategory] = useState('制作物');
  const [postContent, setPostContent] = useState('');
  const [title, setTitle] = useState('')
  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  console.log(postContent);

  return (
    <div>
      <PostHeader /> {/* 投稿画面専用のヘッダーを追加 */}
      <div className="post-content">
        <div className="content-box">
          <div className="user-info">
            <AccountCircleIcon style={{ fontSize: 60 }} />
            <textarea
            className="post-textarea"
            placeholder="タイトル"
            value={title}
            onChange={(e)=> {setTitle(e.target.value)}}
            style={{ width: '350px', height: '40px' }}
          />
            {/* <FormControl variant="outlined" className="user-menu">
              <InputLabel>選択肢</InputLabel>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                label="選択肢"
              >
                <MenuItem value="制作物">制作物</MenuItem>
                <MenuItem value="仲間募集">仲間募集</MenuItem>
                <MenuItem value="イベント">イベント</MenuItem>
              </Select>
            </FormControl> */}
          </div>
          <textarea
            className="post-textarea"
            placeholder="ここに投稿内容を入力してください"
            value={postContent}
            onChange={(e)=> {setPostContent(e.target.value)}}
          />

          <div className="post-field">
            <div className="media-icons">
            </div>
            {/* ファイルアップロードUIを追加 */}
            <FileUploadUI />
            <div className="input-field">
              <GitHubIcon style={{ fontSize: 30 }} />
              <input type="text" placeholder="https://github.com..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCreate;
