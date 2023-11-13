import React, { useState, useEffect } from 'react';
import './landing.css'
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import ChooseSection from './ChooseSection';
import Testimonial from './Testimonial';
import BounusSection from './BounusSection';
import JoinUs from './JoinUs';
import Footer from './Footer';
import hero from '../../assets/images/hero.png';
import { Button, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';



function LandingPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once

    
  return (
    <section>
       <main>

        <nav>
           <div className="logo">Str3mly</div>
           {windowWidth>768?
           <>
           <div className="links">
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li>Feature</li>
                <li>Testimonial</li>
            </ul>
           </div>
           <div className="btns">
           <Link to='/user'><button className='login'>Login</button></Link>
           <Link to='/user'><button className='signup'>SignUp</button></Link>

           </div>
           </>
           :<div>
           <IconButton color="inherit" onClick={toggleMenu}>
               <MenuIcon />
           </IconButton>
           <Drawer anchor="top" open={open} onClose={toggleMenu}>
             <List sx={{minWidth:'100vw',display:'flex',position:'relative',alignItems:'center',justifyContent:'start',flexDirection:'column'}} className='drawer'>
             <CloseIcon  sx={{position:'absolute',right:'20px',top:'20px',color:'white',cursor:'pointer'}} onClick={toggleMenu}/>
             <div className="links">
            <ul>
                <li>Home</li>
                <li>Feature</li>
                <li>Testimonial</li>
            </ul>
            <div className="drawerbtns">
     <Link to='/user'>
            <button className='login'>Login</button>
            </Link>
     <Link to='/user'>

            <button className='signup'>SignUp</button>
</Link>
           </div>
           </div>
             </List>
           </Drawer>
         </div>
}
        </nav>

       <div className="main-section">
        <div className='text-white  text-wrap ' style={{fontSize:`${windowWidth>768?'50px':'30px'}`,width:`${windowWidth<768??'90vw'}`,fontWeight:'600',textAlign:'center'}}>
        Sell all your product in a minutes with Str3mly without any trouble
        </div>
        <div style={{fontSize:`${windowWidth>768?'24px':'18px'}`,width:`${windowWidth<768??'90vw'}`,textAlign:'center',fontWeight:'500'}}>
        Simplify your selling activities and earn more higher revenue
        </div>
        <Link to='/home'>
        <Button variant="contained" sx={{
    borderRadius: '64px',
    background: 'white',
    color: '#D62F7F',
    '&:hover': {
      background: '#D62F7F', // Change background color on hover
      color: 'white', // Change text color on hover
    },
  }} endIcon={<ArrowForward />}>
        Get Started
        </Button>
        </Link>
       </div>
       <img src={hero} style={{width:'100vw',height:'400px',position:'reletive',display:'flex',margin:'auto',bottom:'0',zIndex:'1',backgroundSize:'cover'}} alt="hero image" />
       </main>

       <div className="points-section">
       <div className="trusted">
  Trusted by more than <span>500,000+</span><br/>sellers across the world
</div>
 <div className="salesPoint">
            <div className="number">50K</div>
            <div className="text">Active Customers</div>
          </div>
          <div className="salesPoint">
            <div className="number">100K</div>
            <div className="text">Products Sells</div>
          </div>
          <div className="salesPoint">
            <div className="number">80%</div>
            <div className="text">Satisfied and Happy Users</div>
          </div>
       </div>

       {/* choose section  */}
       <div className="section-container">

       <div className="choose-section">
        <ChooseSection/>
       </div>
       <div className='choose-section'>
        <Testimonial/>
       </div>
       <div className='choose-section'>
        <BounusSection/>
       </div>
       </div>
       <div className='join-us'>
        <JoinUs/>
       </div>
       <div className="choose-section" style={{backgroundColor:'#D62F7F'}}>

       <Footer/>
       </div>
    </section>
  )
}

export default LandingPage