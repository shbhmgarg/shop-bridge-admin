import React from "react";
import "./Header.css";
import { Badge } from "@material-ui/core";
import { Menu, Notifications } from "@material-ui/icons";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <div className='header-title-wrapper'>
        <label htmlFor='menu-toggle'>
          <Menu className='header-icon' />
        </label>
        <div className='header-title'>
          {pathname === "/products" ? (
            <>
              <h1>Products</h1>
              <p>Displays a list of products for ShopBridge</p>{" "}
            </>
          ) : pathname === "/add-product" ? (
            <>
              <h1>Add Product</h1>
              <p>Add new product</p>{" "}
            </>
          ) : pathname.includes("/product/") ? (
              <h1>Edit Product</h1>
          ) : pathname === ("/") ? (
              <h1>Home</h1>
          ) : pathname === ("/users") ? (
              <h1>Users</h1>
          ) : pathname === ("/settings") ? (
              <h1>Settings</h1>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className='header-action'>
        <Badge color='secondary' invisible={false} variant='dot'>
          <Notifications style={{ cursor: "pointer" }} color='primary' />
        </Badge>
      </div>
    </header>
  );
};

export default Header;
