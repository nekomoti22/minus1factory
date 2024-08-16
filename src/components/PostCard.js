import React, { useState } from "react";
import "./PostCard.css";
import ShareButton from "./ShareButton";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io"; // IoIosHeart をインポート
import GitHubIcon from "@mui/icons-material/GitHub";

const PostCard = ({ userName, date, title, repository_URL, image_url1 }) => {
  const [liked, setLiked] = useState(false); // liked状態を管理

  const toggleLike = () => {
    setLiked(!liked); // クリックされたら状態を反転
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-icon"></div>
        <div className="user-info">
          <div className="user-name">{userName}</div>
          <div className="post-date">{date}</div>
        </div>
      </div>
      <div>{title}</div>
      <div>
        <img
          src={image_url1}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="post-content">投稿内容</div>
      <div
        className="actions"
        style={{ display: "flex", alignItems: "center" }}
      >
        <ShareButton size={32} round />
        <div onClick={toggleLike} style={{ cursor: "pointer" }}>
          {liked ? (
            <IoIosHeart size={32} style={{ color: "pink" }} /> // likedの場合はピンク色のハート
          ) : (
            <IoIosHeartEmpty size={32} style={{ color: "gray" }} /> // それ以外はグレーのハート
          )}
        </div>
        <h4>1</h4>
        <div
          className="input-field"
          style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
        >
          <GitHubIcon style={{ fontSize: 30 }} />
          {repository_URL}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
