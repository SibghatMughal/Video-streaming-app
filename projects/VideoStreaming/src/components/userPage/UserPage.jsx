import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './user.css';
import Slider from 'react-slick';
import { Box, Button } from '@mui/material';
import Signup from './Signup';
import Login from './Login';

function UserPage() {

    const [activeTab, setActiveTab] = useState("1");

    const handleTabChange = (tabValue) => {
      setActiveTab(tabValue);
    };


    const settings = {
        dots: true,
        infinite: true, // Enable infinite loop
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Adjust the autoplay speed (in milliseconds)
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="user">
    <div className='userPage'>
        <div className="form-section">
            <div className="heading">Str3mly</div>
            <div className="form-box">
                <div className="heading">Welcome Back to Str3mly!</div>
                <div className="subHeading">Prepare yourself to enjoy various live session that will accompany your daily Shopping experience with us.</div>
                <Box sx={{ width: "100%", typography: "body1" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "8px",
          marginBottom: "6px",
          gap: "5px",
          background: "#F2F4F7",
          borderRadius: "64px",
          overflow: "hidden",
          padding: "4px",
        }}
      >
        <Button
          variant="contained"
          onClick={() => handleTabChange("1")}
          sx={{
            width: "100%",
            borderRadius: activeTab === "1" ? "64px" : "none",
            border: activeTab === "1" ? "none" : "none",
            boxShadow: activeTab !== "1" ? "none" : "display",
            backgroundColor: activeTab === "1" ? "white" : "transparent",
            color: activeTab === "1" ? "black" : "#667085",
            "&:hover": {
              backgroundColor: activeTab === "1" ? "white" : "transparent",
              boxShadow: "none", // Change the hover color here
              color: "black",
            },
          }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          onClick={() => handleTabChange("2")}
          sx={{
            width: "100%",
            borderRadius: activeTab === "2" ? "64px" : "none",
            border: activeTab === "2" ? "none" : "none",
            boxShadow: activeTab !== "2" ? "none" : "display",
            backgroundColor: activeTab === "2" ? "white" : "transparent",
            color: activeTab === "2" ? "black" : "#667085",
            "&:hover": {
              backgroundColor: activeTab === "2" ? "white" : "transparent",
              boxShadow: "none", // Change the hover color here
              color: "black",
            },
          }}
        >
          Log in
        </Button>
      </Box>
      {activeTab === "1" && <div className='signup'>
           <Signup/>
        </div>}
      {activeTab === "2" && <div className='login'>
        <Login/>
        </div>}
    </Box>
                </div>
           
        </div>
        <div className="slider-section">
        <div className="custom-slider">
      <Slider {...settings}>
        <div className='slide'>
            <div className='slide-text'>
            Discover unbeatable deals and limited-time offers on Str3mly. Our platform connects you with brands and products you won't find elsewhere. Shop with confidence, knowing you're accessing exclusive promotions and a diverse range of high-quality items. Don't miss out on savings and unique finds; choose Str3mly for your next shopping adventure.
            </div>
          <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="slide show" />
        </div>
        <div className='slide'>
        <div className='slide-text'>
            Discover unbeatable deals and limited-time offers on Str3mly. Our platform connects you with brands and products you won't find elsewhere. Shop with confidence, knowing you're accessing exclusive promotions and a diverse range of high-quality items. Don't miss out on savings and unique finds; choose Str3mly for your next shopping adventure.
            </div>
          <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="slide show" />
        </div>
        <div className='slide'>
        <div className='slide-text'>
            Discover unbeatable deals and limited-time offers on Str3mly. Our platform connects you with brands and products you won't find elsewhere. Shop with confidence, knowing you're accessing exclusive promotions and a diverse range of high-quality items. Don't miss out on savings and unique finds; choose Str3mly for your next shopping adventure.
            </div>
          <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="slide show" />
        </div>
        <div className='slide'>
        <div className='slide-text'>
            Discover unbeatable deals and limited-time offers on Str3mly. Our platform connects you with brands and products you won't find elsewhere. Shop with confidence, knowing you're accessing exclusive promotions and a diverse range of high-quality items. Don't miss out on savings and unique finds; choose Str3mly for your next shopping adventure.
            </div>
          <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="slide show" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
      </div>
        </div>
        </div>
  )
}

export default UserPage