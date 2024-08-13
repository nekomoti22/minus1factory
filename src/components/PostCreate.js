import React, { useState } from 'react';
import PostHeader from './PostHeader'; // PostHeaderをインポート
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function PostCreate() {
  const [selectedCategory, setSelectedCategory] = useState('制作物');
  const [postContent, setPostContent] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  return (
    <div>
      <PostHeader /> {/* 投稿画面専用のヘッダーを追加 */}
      <div className="post-content">
        <div className="content-box">
          <div className="user-info">
            <AccountCircleIcon style={{ fontSize: 60 }} />
            <FormControl variant="outlined" className="user-menu">
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
            </FormControl>
          </div>
          <textarea
            className="post-textarea"
            placeholder="ここに投稿内容を入力してください"
            value={postContent}
            onChange={handlePostContentChange}
          />
          <div className="post-field">
            <div className="media-icons">
              <InsertPhotoIcon style={{ fontSize: 30 }} />
              <VideocamIcon style={{ fontSize: 30 }} />  
            </div>
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