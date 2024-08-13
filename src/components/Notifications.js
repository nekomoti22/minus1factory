import React from 'react';
import { Tabs, Tab} from '@mui/material';

function Notifications() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>通知</h1>
      </div>
      <div>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="すべて" />
          <Tab label="フォロー中" />
        </Tabs>
      </div>
    </div>
  );
}

export default Notifications;
