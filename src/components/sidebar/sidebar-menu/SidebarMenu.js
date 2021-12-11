import React from "react";
import { LineStyle, Storefront, Settings, Person } from "@material-ui/icons";
import "./SidebarMenu.css";

const SidebarMenu = () => {
  return (
    <div className='sidebar-menu'>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href='#!'>
            <LineStyle className="sidebar-icon" />
            Home
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#!'>
            <Person className="sidebar-icon" />
            Users
          </a>
        </li>
        <li className='sidebar-list-item active'>
          <a href='#!'>
            <Storefront className="sidebar-icon" />
            <span>Products</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#!'>
            <Settings className="sidebar-icon" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
