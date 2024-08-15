import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function PostHeader() {
  const handleCancel = () => {
    console.log("キャンセルボタンがクリックされました");
    // キャンセル時の処理をここに追加
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/home">
          <Button onClick={handleCancel} style={{ color: "white" }}>
            キャンセル
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default PostHeader;
