import React from 'react';
import profilePic from './getProfileImage.jpeg';
import './SidebarAvatar.css';

const SidebarAvatar = () => {
  return (
    <div className='sidebar-avatar'>
      <div>
        <img src={profilePic} alt="profile pic" />
      </div>
      <div className="avatar-info">
        <div className="avatar-text">
          <h4>Shubham Garg</h4>
          <small>+91 9960134452</small>
        </div>
      </div>
    </div>
  )
}

export default SidebarAvatar
