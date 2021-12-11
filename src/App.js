import React from "react";
import "./App.css";
import Header from "./components/layout/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Users from "./components/pages/users/Users";
import ProductList from "./components/pages/products/ProductList";
import Settings from "./components/pages/settings/Settings";

const App = () => {
  return (
    <Router>
      <input type='checkbox' id='menu-toggle' />
      <Sidebar />
      <div className='main-content'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/users'>
              <Users />
            </Route>
            <Route exact path='/products'>
              <ProductList />
            </Route>
            <Route exact path='/products'>
              <Settings />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
