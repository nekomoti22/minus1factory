import React, { useState, useRef } from 'react';
import { useAsyncCallback } from 'react-async-hook';
import Box from '@mui/material/Box';
import CircularIntegration from './circularintegration.js';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; // アップロードアイコンをインポート

const initialState = {
  files: [],
};

const FileUploadUI = () => {
  const inputRef = useRef(null);
  const [setFormState] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [previews, setPreviews] = useState([]);

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

  const asyncEvent = useAsyncCallback(onFileInputChange);

  return (
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
  );
};
export default FileUploadUI;
