import React, { useState, useEffect } from "react";
import "./PostCard.css";
import ShareButton from "./ShareButton";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io"; // IoIosHeart をインポート

import GitHubIcon from '@mui/icons-material/GitHub';
import { getFullImage, getFullName } from "../ecosystem/storage.ts";

const PostCard = ({ userName, date, title, repository_URL, image_url1, content }) => {

    const [fullName, setFullName] = useState(userName); // 初期値としてuserNameを設定
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchFullName = async () => {
            try {
                const fetchedFullName = await getFullName(userName);
                const fetchedImage = await getFullImage(userName);
                setFullName(fetchedFullName); // フェッチしたフルネームをセット
                setImageUrl(fetchedImage);
            } catch (error) {
                console.error('Failed to fetch full name:', error);
            }
        };

        fetchFullName(); // 非同期関数を呼び出し

    }, [userName]); // userNameが変わった場合に再度フルネームを取得

    const extension = image_url1?.split('.').pop();

    // const fullName = await getFullName(userName);
    // console.log("fullname",fullName);

    const [liked, setLiked] = useState(false); // liked状態を管理

    const toggleLike = () => {
        setLiked(!liked); // クリックされたら状態を反転
    };

    return (
        <div className="post-card">
            <div className="post-header">
                <img className="user-icon" src={`${imageUrl}`} />
                <div className="user-info">
                    <div className="user-name">{fullName}</div>
                    <div className="post-date">{date}</div>
                </div>
            </div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                {/* If extension is an image format, display the image, otherwise indicate it's a video */}
                {['jpeg', 'jpg', 'gif', 'png', 'webp'].includes(extension) ? (
                    <img src={image_url1} alt="" style={{ width: '100%', height: 'auto' }} />
                ) : (
                    <video src={image_url1} controls style={{ width: '100%', height: 'auto' }} />

                )}
            </div>
            <div className="post-content">
                {content}
            </div>
            <div className="actions" style={{ display: 'flex', alignItems: 'center' }}>
                <ShareButton size={32} round />
                <div onClick={toggleLike} style={{ cursor: 'pointer' }}>
                    {liked ? (
                        <IoIosHeart size={32} style={{ color: 'pink' }} /> // likedの場合はピンク色のハート
                    ) : (
                        <IoIosHeartEmpty size={32} style={{ color: 'gray' }} /> // それ以外はグレーのハート
                    )}
                </div>
                <div className="input-field" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', width: '280px', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                    <GitHubIcon style={{ fontSize: 30 }} />
                    <span style={{ flexGrow: 1, whiteSpace: 'normal', width: '90%' }}>
                        <a href={repository_URL} style={{ color: 'blue', textDecoration: 'none', fontWeight: 'bold' }}>
                            {repository_URL}
                        </a>
                    </span>
                </div>
            </div>
        </div>
  );
};

export default PostCard;
