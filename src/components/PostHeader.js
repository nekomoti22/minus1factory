import React from 'react';
import { Button } from '@mui/material';

function PostHeader() {
  const handleCancel = () => {
    console.log('キャンセルボタンがクリックされました');
    // キャンセル時の処理をここに追加
  };

  const handleSubmit = () => {
    console.log('投稿ボタンがクリックされました');
    // 投稿時の処理をここに追加
  };

  return (
    <header className="header">
      <div className="header-content">
        <Button onClick={handleCancel} style={{ color: 'white' }}>キャンセル</Button>
        <Button onClick={handleSubmit} style={{ color: 'white' }}>投稿</Button>
      </div>
    </header>
  );
}

export default PostHeader;