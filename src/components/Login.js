import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import logoImage from '../image/SNSicon.webp';

function Login() {
    console.log('Login');
    const router = useNavigate();

    /**
     * ボタンクリック時の処理
     */
    const handleClick = (pathParam) => {
        router(pathParam);
      };
    return (
    
      <div className="login" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="titlename">Product キャッチ</h1>
         {/* 画像を追加 */}
        <img src={logoImage} alt="ロゴ" style={{ width: '200px', height: 'auto', margin: '20px 0' }} />
        
        <Stack spacing={5} direction="column">
          <Button variant="contained" size="large" onClick={() => handleClick('Home')} style={{ fontSize: '1.2rem', padding: '15px 30px' }}>GitHubで認証</Button>
        </Stack>
        <h1 className="title">Product キャッチはgithubを使い制作物の共有に特化したエンジニア向けSNSです</h1>
      </div>
    );
  }

export default Login;
