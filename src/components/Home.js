import React from 'react';
import { Tabs, Tab, TextField, InputAdornment } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <div>
      <Avatar src="/broken-image.jpg" />
      </div> */}
      
      <div style={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} centered sx={{ backgroundColor: '#f0f0f0', width: '100%' }}>
          <Tab label="制作物" />
          {/* <Tab label="仲間募集" />
          <Tab label="イベント" /> */}
        </Tabs>
      </div>
      <div>
      <TextField 
          fullWidth 
          id="fullWidth"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="検索"
      />
      </div>
    </div>
  );
}

export default Home;