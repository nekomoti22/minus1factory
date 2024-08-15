import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IosShareIcon from '@mui/icons-material/IosShare';
import { SnsIcon } from "./SnsIcon";


export default function ShareButton() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Button onClick={toggleDrawer('bottom', true)}>
        <IosShareIcon />
      </Button>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
        sx={{
          '& .MuiDrawer-paper': {
            height: '20%', // 高さを20%に設定
            width: '100%', // 幅を100%に設定（画面全体）
            maxHeight: '50%', // 最大高さを80%に制限
          }
        }}
      >
        <Box
          sx={{ width: 'auto' }}
          role="presentation"
          onClick={toggleDrawer('bottom', false)}
          onKeyDown={toggleDrawer('bottom', false)}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '16px' }}>
            <SnsIcon />
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
