import React from "react";
import "./App.css";
import Header from "./components/layout/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Users from "./components/pages/users/Users";
import ProductList from "./components/pages/products/ProductList";
import Settings from "./components/pages/settings/Settings";
import EditProduct from "./components/pages/edit-product/EditProduct";
import CreateProduct from "./components/pages/new-product/CreateProduct";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <input type='checkbox' id='menu-toggle' />
        <div className='overlay'>
          <label htmlFor='menu-toggle'></label>
        </div>
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
              <Route exact path='/product/:productId'>
                <EditProduct />
              </Route>
              <Route exact path='/add-product'>
                <CreateProduct />
              </Route>
              <Route exact path='/settings'>
                <Settings />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
