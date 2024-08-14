import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
    </footer>
  );
}

export default Footer;
