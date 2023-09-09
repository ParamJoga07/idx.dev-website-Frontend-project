import React from 'react';
import './Sidebar.css'; 
import logo from '../assets/image-removebg-preview.png'
import googlelogo from '../assets/google_plain_logo_icon_146494-removebg-preview.png'


function Sidebar() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <button className="navbar-button">Explore IDX</button>
        <button className="navbar-button2">Join Waitlist</button>
      </div>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="menu-items">
         
        </div>
        <div className="google-symbol">
          <img className="googlelogo" src={googlelogo} alt="Google Symbol" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
