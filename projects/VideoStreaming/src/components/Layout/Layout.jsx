import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./layout.css"; 
import Header from "../Header/Header";



const Layout = ({ children }) => {

  return (
    <div className="Layout">
        <Header className='header'/>
      <div className="content">
      <Sidebar className="sidebar" />
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
