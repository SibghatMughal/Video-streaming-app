import React, { useState } from 'react';
import './streaming.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Badge, Button } from '@mui/material';
import { ArrowBack, ArrowCircleUp, ArrowOutward, FavoriteBorderOutlined, FavoriteOutlined, NotificationsOutlined, People, PeopleOutline, Person, PersonOutline, Share, ShareOutlined, ShoppingBagOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Layout from '../Layout/Layout';
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";


// Define a variable for card styles

const CardStyles = styled('div')(({theme})=>({

    maxWidth: '100%',
    height:'100%',
    background: 'white',
    borderRadius: '2px',
    position: 'relative',
    zIndex:'9999',
    overflow:'hidden',
    [theme.breakpoints.down("md")]: {
      height:'100vh',
      minWidth:'100%',

    },
    [theme.breakpoints.down("sm")]: {
        height:'100vh',
      }
  }));

// Define a variable for header styles
const headerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap:'20px',
  padding: '12px',
  color: 'white',
  position: 'absolute',
  zIndex:'20',
  width: '100%',
  backgroundImage: 'linear-gradient(180deg, rgb(16, 24, 40, 0.60) 0%, rgba(16, 24, 40, 0.00) 100%)',
};


// Define a variable for media styles
const mediaStyles = {
   minHeight: '100%',
   position: 'relative',
   zIndex:'0'
};

// Define a variable for actions styles
const actionsStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px',
};


// footer style is here 
const footerStyle = {
  display: 'flex', 
  alignItems: 'center', 
  gap: '12px',
  fontSize: '16px',
  fontweight: '600',
  color:'#667085'
}

// elements styling 

const btn = {
    color: 'white',
    fontFamily: 'Inter',
    backgroundColor: '#D62F7F',
    borderRadius: '64px',
    display:'flex',
    alignItems:'center',
    cursor:'pointer',
    position: 'relative',
    zIndex: 1000,
    '&:hover': {
      backgroundColor: 'white',
      color: '#D62F7F',
    },
  };

  const cardIcon ={
    backgroundColor:'white',
    padding:'12px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'50%',
    cursor:'pointer'
  }


  const RightContent =styled('div')(({theme})=>({
    minWidth:'40%',
    position:'relative',
    [theme.breakpoints.down("md")]: {
        display:'none'
      }
  }));


//   video styling 
const videoContainerStyles = {
    height: '85%',
    position: 'relative',
    overflow: 'hidden',
  };
  
  const videoStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const heading = {
    color:'rgba(16, 24, 40, 1)',
    fontSize:'20px',
    fontWeight:'600',
    whiteSpace: 'nowrap',
    marginBottom:'8px'
  }


//   swiper styling 
const Root = styled("div")(({ theme }) => ({
    height: "100%",
    zIndex:99999,
    backgroundColor:
      theme.palette.mode === "light"
        ? grey[100]
        : theme.palette.background.default,
    position: "relative",
  }));
  
  
  
  const CenterLine = styled("div")(({ theme }) => ({
    width: "200px", // Set the width to 200px
    height: "8px",
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    position: "relative",
    bottom: "12px", // Position 12px from the bottom
    left: "calc(50% - 100px)", // Horizontally center the line
    borderRadius: "8px",
    cursor: "pointer",
    zIndex: 9999,
    border: "1px solid gray",
    display:'none',
    [theme.breakpoints.down("md")]: {
        display:'flex'
      }
  }));
  
function Streaming() {
    const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

    const porductCount = [1,2,3];
    const chatCount = [1,2,3,4,5,6,7,8];
    const userCount = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  return (
    <Layout>
        <div className='d-flex align-items-start flex-grow-1 h-100 position-relative '>
    <CardStyles>
      <div style={headerStyles}>
        <div className="d-flex align-items-center justify-content-between ">
        <div className='title d-flex align-items-center gap-2'>
            <div style={cardIcon}>
            <ArrowBack style={{marginRight:'4px',color:'black'}}/> 
            </div>
            Take a look our new products!</div>
            
        <div className='d-flex align-items-center gap-2'>
        <Button variant='contained' sx={btn} className='small-screen'>Live</Button>
           <Button sx={btn} startIcon={<PeopleOutline/>} className=' bg-white text-secondary small-screen'>1k</Button>
            <div style={cardIcon} className='large-screen'>

            <NotificationsOutlined style={{color:'black'}}/>
            </div>
            <div style={cardIcon} className='large-screen'>
 
            <ShareOutlined style={{color:'black'}} />
            </div>

        </div>
        </div>

      <div className='d-flex align-items-center justify-content-between '>
        <div className='d-flex align-items-center gap-2'><Avatar /> <div className="d-flex align-items-start flex-column">
            <div className="text">Miracle Herwitz</div>
            <div className="subText">00:20:16 Live</div>
            </div></div>
        <div className='d-flex align-items-center gap-2 large-screen'>
            <Button variant='contained' sx={btn} startIcon={<PeopleOutline/>}>123</Button>

        </div>
      </div>
      </div>
      <CardMedia
        component="img"
        image="https://www.aljazeera.com/wp-content/uploads/2023/06/AP23171755115969-1687309761.jpg?resize=770%2C513&quality=80"
        alt="Home card image"
        sx={mediaStyles}
      />
      {/* place the video here  */}
      {/* <div style={videoContainerStyles}>
        <iframe src="https://www.example.com/your-video-url" title="Video" allowFullScreen style={videoStyles}></iframe>
      </div> */}

      <div className="lower-section">
        {/* chat section  */}
        <div className="d-flex align-items-start flex-column w-100 gap-2 chat-section " style={{height:'200px',zIndex:0}}>
    {chatCount.map((chat,index)=>{
        return(
            <>
            
        <div key={index}  className="d-flex align-items-center gap-3 my-2">
        <Avatar
          // src="/path/to/image.jpg"
          alt="User Avatar"
          sx={{ width: 50, height: 50 }}
        />
        <div className="d-flex align-items-start flex-column">
          <div className="text text-white ">Username</div>
          <div className="subText text-white ">Question asked</div>
        </div>
      </div>
            </>
        )

    })}
        </div>

        {/* bidding card */}
      <div className="bidding">
     <div className="bg-white d-flex flex-column gap-2" style={{padding:'16px',height:'auto',borderRadius:'20px',minWidth:'95%'}}>
        <div className="d-flex align-items-center gap-1">
            <div className=" fw-bold text-dark">Auction</div>
            <div className='subheading' style={{color: 'rgba(240, 68, 56, 1)'}}>Ends in 00:10:53</div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100 ">
            <div className="d-flex align-items-center gap-2">
            <div style={{width:'80px',height:'80px',borderRadius:'12px',border:'1px solid lightgray',overflow:'hidden'}}>
                <div style={{padding:'12px',background:'white',width:'25px',height:'25px',display:'flex',alignItems:'center',justifyContent:'center'}}><FavoriteBorderOutlined sx={{color:'rgba(102, 112, 133, 1)'}}/></div>
                <img src="https://ae01.alicdn.com/kf/HTB1H.KVaHj1gK0jSZFuq6ArHpXaB/High-Quality-12V-IP67-Waterproof-Full-Color-Pixel-LED-eon-Tape-Lamp-24V-RGB-Addressable-Programmable.jpg" width='100%' height='100%' alt="stream footer image"  />
                </div>
            <div className="d-flex align-items-center justify-content-center flex-column gap-0 align-items-start  ">
                <div className=" text-secondary ">Product name</div>
                <div className="d-flex align-items-center text-dark">Highest bid <strong>$102</strong></div>
            </div>
            </div>
            <Button variant='containd' size='small' sx={btn}>Start bid</Button>
        </div>
     </div>

     <div className="bg-white d-flex flex-column gap-2" style={{padding:'16px',height:'auto',borderRadius:'20px',minWidth:'95%'}}>
        <div className="d-flex align-items-center gap-1">
            <div className=" fw-bold text-dark">Auction</div>
            <div className='subheading' style={{color: 'rgba(240, 68, 56, 1)'}}>Ends in 00:10:53</div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100 ">
            <div className="d-flex align-items-center gap-2">
            <div style={{width:'80px',height:'80px',borderRadius:'12px',border:'1px solid lightgray',overflow:'hidden'}}>
                <div style={{padding:'12px',background:'white',width:'25px',height:'25px',display:'flex',alignItems:'center',justifyContent:'center'}}><FavoriteBorderOutlined sx={{color:'rgba(102, 112, 133, 1)'}}/></div>
                <img src="https://ae01.alicdn.com/kf/HTB1H.KVaHj1gK0jSZFuq6ArHpXaB/High-Quality-12V-IP67-Waterproof-Full-Color-Pixel-LED-eon-Tape-Lamp-24V-RGB-Addressable-Programmable.jpg" width='100%' height='100%' alt="stream footer image"  />
                </div>
            <div className="d-flex align-items-center justify-content-center flex-column gap-0 align-items-start  ">
                <div className=" text-secondary ">Product name</div>
                <div className="d-flex align-items-center text-dark">Highest bid <strong>$102</strong></div>
            </div>
            </div>
            <Button variant='containd' size='small' sx={btn}>Start bid</Button>
        </div>
     </div>

     </div>

     {/* replying or bidding */}
     <div className="sendBid" style={{zIndex:'99999'}}>
        <div className="message">
            <Badge badgeContent={4} style={{color:'white'}}>
                <ShoppingBagOutlined sx={{color:'white',cursor:'pointer'}}/>
            </Badge>
        </div>
    <input type="text"  placeholder='Start ask q Question' style={{zIndex:'10000'}}/>
    <div className='d-flex align-items-center justify-content-center' style={{borderRadius:'50%',width:'50px',height:'50px',cursor:'pointer',background:'rgba(214, 47, 127, 1)',padding:'12px',zIndex: 10000,}}><ArrowOutward sx={{color:'white'}}/></div>
     </div>
     </div>
     <Root>
      {!open && (
        <CenterLine onClick={toggleDrawer(true)} />
      )}
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
       <div className=" bg-white " style={{padding:'12px'}}>
            <div className="d-flex align-items-center justify-content-between w-100 my-3">
                <div style={heading}>Products</div>
                <div className="points"> icon  100 Points</div>
            </div>
            {porductCount.map((product)=>{
                return(
                    <>
                    
            <div className="d-flex align-items-center justify-content-between w-100 my-2 ">
            <div className="d-flex align-items-center gap-2">
            <div style={{width:'80px',height:'80px',borderRadius:'12px',border:'1px solid lightgray',overflow:'hidden'}}>
                <div style={{padding:'12px',background:'white',width:'25px',height:'25px',display:'flex',alignItems:'center',justifyContent:'center'}}><FavoriteBorderOutlined sx={{color:'rgba(102, 112, 133, 1)'}}/></div>
                <img src="https://ae01.alicdn.com/kf/HTB1H.KVaHj1gK0jSZFuq6ArHpXaB/High-Quality-12V-IP67-Waterproof-Full-Color-Pixel-LED-eon-Tape-Lamp-24V-RGB-Addressable-Programmable.jpg" width='100%' height='100%' alt="stream footer image"  />
                </div>
            <div className="d-flex align-items-start justify-content-center flex-column gap-0 ">
                <div className=" text-secondary text-nowrap ">Product name</div>
                <div className="d-flex align-items-center text-dark fw-bold ">12</div>
            </div>
            </div>
            <div className="d-flex align-items-center gap-2">
            <div style={{padding:'6px 16px',backgroundColor:'rgba(255, 236, 245, 1)',borderRadius:'64px'}}><ShoppingCartOutlined sx={{color:'rgba(214, 47, 127, 1)'}}/></div>
            <Button variant='containd' size='small' className=' fw-bold ' sx={btn}>Buy</Button>
            </div>
        </div>
                    </>
                )
            })}
        </div>
      </SwipeableDrawer>
    </Root>
     
    </CardStyles>
   
     <RightContent >
        <div className=" bg-white " style={{padding:'12px'}}>
            <div className="d-flex align-items-center justify-content-between w-100 my-3">
                <div style={heading}>Products</div>
                <div className="points"> icon  100 Points</div>
            </div>
            {porductCount.map((product)=>{
                return(
                    <>
                    
            <div className="d-flex align-items-center justify-content-between w-100 my-2 ">
            <div className="d-flex align-items-center gap-2">
            <div style={{width:'80px',height:'80px',borderRadius:'12px',border:'1px solid lightgray',overflow:'hidden'}}>
                <div style={{padding:'12px',background:'white',width:'25px',height:'25px',display:'flex',alignItems:'center',justifyContent:'center'}}><FavoriteBorderOutlined sx={{color:'rgba(102, 112, 133, 1)'}}/></div>
                <img src="https://ae01.alicdn.com/kf/HTB1H.KVaHj1gK0jSZFuq6ArHpXaB/High-Quality-12V-IP67-Waterproof-Full-Color-Pixel-LED-eon-Tape-Lamp-24V-RGB-Addressable-Programmable.jpg" width='100%' height='100%' alt="stream footer image"  />
                </div>
            <div className="d-flex align-items-start justify-content-center flex-column gap-0 ">
                <div className=" text-secondary text-nowrap ">Product name</div>
                <div className="d-flex align-items-center text-dark fw-bold ">12</div>
            </div>
            </div>
            <div className="d-flex align-items-center gap-2">
            <div style={{padding:'6px 16px',backgroundColor:'rgba(255, 236, 245, 1)',borderRadius:'64px'}}><ShoppingCartOutlined sx={{color:'rgba(214, 47, 127, 1)'}}/></div>
            <Button variant='containd' size='small' className=' fw-bold ' sx={btn}>Buy</Button>
            </div>
        </div>
                    </>
                )
            })}
        </div>
        <hr style={{borderBottom:'1px solid lightgray',width:'100%',marginTop:'-12px'}}/>
        <div style={{ paddingLeft: '24px',position:'relative',width:'90%',height:'500px',overflow:'hidden' }}>
  <div style={heading}>Live Q&A</div>
  <div className="user-section">
    {userCount.map((user, index) => (
      <div key={index} className="d-flex align-items-center gap-3 my-2">
        <Avatar
          // src="/path/to/image.jpg"
          alt="User Avatar"
          sx={{ width: 50, height: 50 }}
        />
        <div className="d-flex align-items-start flex-column">
          <div className="text">Username</div>
          <div className="subText">Question asked</div>
        </div>
      </div>
    ))}
  </div>
  <div className="user-footer">
    <input type="text"  placeholder='Start ask q Question'/>
    <Button variant='contained' sx={btn} style={{padding:'5px 20px'}} endIcon={<ArrowOutward/>}>Send</Button>

</div>
</div>




     </RightContent>
    </div>
    </Layout>
  );
}

export default Streaming;
