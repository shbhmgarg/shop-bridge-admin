import React from "react";
import './Sidebar.css'
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import SidebarAvatar from "./sidebar-avatar/SidebarAvatar";
import SidebarMenu from "./sidebar-menu/SidebarMenu";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className='brand'>
          <ShoppingBasket fontSize='large' className='logo' />
          <span className='logoDark'>Shop</span>
          <span className='logoLight'>Bridge</span>
        </div>
        <SidebarAvatar />
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
