import React from 'react';
import './PostCard.css';
import ShareButton from './ShareButton';
import { IoIosHeartEmpty } from "react-icons/io";
import GitHubIcon from '@mui/icons-material/GitHub';


const PostCard = ({ userName, date, title, repository_URL, image_url1 }) => {
    return (
        <div className="post-card">
            <div className="post-header">
                <div className="user-icon"></div>
                <div className="user-info">
                    <div className="user-name">{userName}</div>
                    <div className="post-date">{date}</div>
                </div>
            </div>
            <div>
                {title}
            </div>
            <div>
                {<img src={image_url1} alt="Description of the image" style={{ width: '100%', height: 'auto' }}></img>}
            </div>

            <div className="post-content">
                投稿内容
            </div>

            <div className="actions" style={{ display: 'flex', alignItems: 'center' }}>
                <ShareButton size={32} round />
                <IoIosHeartEmpty size={32} round />
                <h4>1</h4>
                <div className="input-field" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                    <GitHubIcon style={{ fontSize: 30 }} />
                    {repository_URL}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
