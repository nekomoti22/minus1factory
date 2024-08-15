import React, { useState, useRef } from 'react';
import PostHeader from './PostHeader'; // PostHeaderをインポート
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAsyncCallback } from 'react-async-hook';
import Box from '@mui/material/Box';
import CircularIntegration from './circularintegration.js';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import FileUploadUI from './FileUploadUI'; // FileUploadUIをインポート
import { uploadStorage } from '../ecosystem/storage.ts';

const initialState = {
  files: [],
};

function PostCreate() {
  // const [selectedCategory, setSelectedCategory] = useState('制作物');
  const [postContent, setPostContent] = useState('');
  const [title, setTitle] = useState('')
  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  console.log(postContent);

  const inputRef = useRef(null);
  const [setFormState] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [previews, setPreviews] = useState([]);
  const [uploadedFilelist, setUploadedFilelist] = useState(null);

  const uploadFile = async (files) => {
    if (!files || files.length === 0) return;

    /* アップロード処理に見立てた時間のかかる処理 */
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(5000);

    /* アップロード処理が成功したらフォームの状態を
       初期化してsuccessステートをtrueにする */
    setFormState(initialState);
    setSuccess(true);
  };

  const onFileInputChange = async (event) => {
    const files = Array.from(event.target.files).slice(0, 4); // 最大4つまで選択可能
    const newPreviews = [];
    setUploadedFilelist(files)

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // ファイルタイプの確認
        const fileType = file.type;
        newPreviews.push({ url: reader.result, type: fileType });
        // すべてのファイルを読み込み終わったらステートを更新
        if (newPreviews.length === files.length) {
          setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews].slice(0, 4)); // 最大4つまで表示
        }
      };
      reader.readAsDataURL(file);
    });

    await uploadFile(files);
  };

  const clickFileUploadButton = () => {
    setSuccess(false);
    inputRef.current.click();
  };

  const upload = () => {
    console.log(uploadedFilelist);
    uploadStorage({ filelist: uploadedFilelist, bucketName:"pictures" });
  }

  const asyncEvent = useAsyncCallback(onFileInputChange);

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
            onChange={(e) => { setPostContent(e.target.value) }}
          />

          <div className="post-field">
            <div className="media-icons">
            </div>
            {/* ファイルアップロードUIを追加 */}
            <Box sx={{ textAlign: 'center', margin: '0 auto' }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr', // 常に2列のグリッド
                  gap: 2,
                  maxWidth: '500px', // グリッド全体の最大幅を設定
                  margin: '0 auto',
                }}
              >
                {previews.map((preview, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '240px', // 各メディアの最大幅を設定
                      gridColumn: index % 2 === 0 ? '1' : '2',
                      gridRow: Math.floor(index / 2) + 1,
                    }}
                  >
                    {preview.type.startsWith('image/') ? (
                      <Box component="img" src={preview.url} sx={{ width: '100%', height: 'auto' }} />
                    ) : preview.type.startsWith('video/') ? (
                      <Box component="video" src={preview.url} controls sx={{ width: '100%', height: 'auto' }} />
                    ) : null}
                  </Box>
                ))}
              </Box>
              <CircularIntegration
                onClick={clickFileUploadButton}
                asyncEvent={asyncEvent}
                success={success}
                component="label"
                text={asyncEvent.loading ? '...' : <CloudUploadIcon style={{ color: 'white' }} />} // アイコンの色を白に設定
              />
              <input
                hidden
                ref={inputRef}
                type="file"
                multiple
                accept="image/*,video/*" // 画像と動画の両方を受け付ける
                onChange={asyncEvent.execute}
              />
            </Box>
            <div className="input-field">
              <GitHubIcon style={{ fontSize: 30 }} />
              <input type="text" placeholder="https://github.com..." />
            </div>
          </div>
        </div>
      </div>
      <button
      
      onClick={upload}>hoge</button>
    </div>
  );
}

export default PostCreate;
