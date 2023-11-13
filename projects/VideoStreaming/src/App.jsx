// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/Landing';
import UserPage from './components/userPage/UserPage';
import Common from './components/CommonComponents/Common';
import Streaming from './components/Streaming/Streaming';
import LiveReport from './components/LiveReport/LiveReport';
import Shop from './components/Shop/Shop';
import WishList from './components/WishList/WishList';

function App() {
  return (
    <Router>
      <div className="App">
        
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/user" exact element={<UserPage/>} />
            <Route path="/home" exact element={<Home/>} />
            <Route path="/common" exact element={<Common/>} />
            <Route path="/streaming" exact element={<Streaming/>} />
            <Route path="/live-report" exact element={<LiveReport/>} />
            <Route path="/shop" exact element={<Shop/>} />
            <Route path="/wishlist" exact element={<WishList/>} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
