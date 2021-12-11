import React from "react";
import './Header.css';
import { Badge } from "@material-ui/core";
import { Menu, NotificationImportant, Notifications } from "@material-ui/icons";

const Header = () => {
  return (
    <header>
      <div className='header-title-wrapper'>
          <Menu className='header-icon' />
        <div className="header-title">
          <h1>Products</h1>
          <p>Displays a list of products for ShopBridge</p>
        </div>
      </div>
      <div className='header-action'>
        <Badge color='secondary' invisible={false} variant='dot'>
          <Notifications color='primary' />
        </Badge>
      </div>
    </header>
  );
};

export default Header;
