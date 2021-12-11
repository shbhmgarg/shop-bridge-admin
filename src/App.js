import { Fragment } from "react";
import './App.css';
import Header from "./components/layout/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <Fragment>
      <input type="checkbox" id='menu-toggle' />
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          Hello Main Page
        </main>
      </div>
    </Fragment>
  );
}

export default App;
