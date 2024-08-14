import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/home" className="footer-link">
        <HomeIcon fontSize="small" />
        <span className="icon-text">Home</span>
      </Link>
      <Link to="/create" className="footer-link">
        <AddCircleIcon fontSize="small" />
        <span className="icon-text">Post</span>
      </Link>

      {/* <Link to="/notifications" className="footer-link">
        <NotificationsIcon fontSize="small" />
        <span className="icon-text">Notice</span>
      </Link> */}
      {/* <Link to="/account" className="footer-link">
        <AccountCircleIcon fontSize="small" />
        <span className="icon-text">Account</span>
      </Link> */}
    </footer>
  );
}

export default Footer;
