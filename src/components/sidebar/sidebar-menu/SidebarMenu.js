import React from "react";
import { LineStyle, Storefront, Settings, Person } from "@material-ui/icons";
import "./SidebarMenu.css";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className='sidebar-menu'>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <NavLink exact to='/' activeClassName="active">
          <LineStyle className="sidebar-icon" />
            Home
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink exact to='/users' activeClassName="active">
            <Person className="sidebar-icon" />
            Users
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink exact to='/products' activeClassName="active">
            <Storefront className="sidebar-icon" />
            <span>Products</span>
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink exact to='/settings' activeClassName="active">
            <Settings className="sidebar-icon" />
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
