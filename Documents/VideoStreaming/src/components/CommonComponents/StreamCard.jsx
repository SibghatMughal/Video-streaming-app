import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import { People, PeopleOutline, Person, PersonOutline } from '@mui/icons-material';

// Define a variable for card styles
const cardStyles = {
  maxWidth: '550px',
  background: 'white',
  marginRight:'24px',
  borderRadius: '12px',
  border:'1px solid rgba(234, 236, 240, 1)',
  position: 'relative',
};

// Define a variable for header styles
const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px',
  color: 'white',
  position: 'absolute',
  width: '100%',
  backgroundImage: 'linear-gradient(180deg, rgb(16, 24, 40, 0.60) 0%, rgba(16, 24, 40, 0.00) 100%)',
};


// Define a variable for media styles
const mediaStyles = {
  height: '85%',
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
    gap:'0px',
    textwrap: 'nowrap',
    whiteSpace: 'nowrap',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: 'white',
      color: '#D62F7F',
    },
  };


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
  
function StreamCard() {
  return (
    <Card sx={cardStyles}>
      <div style={headerStyles}>
        <div className='title'>Take a look our new products!</div>
        <div className='d-flex align-items-center gap-2'>
            <Button variant='contained' sx={btn}>LIVE</Button>
            <Button variant='contained' sx={btn} style={{background:'white',color:'#667085'}} startIcon={<PeopleOutline/>}>1k</Button>

        </div>
      </div>
      <CardMedia
        component="img"
        height="85%"
        image="https://www.aljazeera.com/wp-content/uploads/2023/06/AP23171755115969-1687309761.jpg?resize=770%2C513&quality=80"
        alt="Home card image"
        sx={mediaStyles}
      />
      {/* place the video here  */}
      {/* <div style={videoContainerStyles}>
        <iframe src="https://www.example.com/your-video-url" title="Video" allowFullScreen style={videoStyles}></iframe>
      </div> */}
      <CardActions sx={actionsStyles}>
        <IconButton sx={footerStyle}>
          <Avatar />
          Miracle Herwitz
        </IconButton>
        <Button variant='contained' sx={btn} startIcon={<PersonOutline sx={{color:'white','&:hover':{
            color:'#D62F7F'
  
        }}}/>}>Follow Seller</Button>
      </CardActions>
    </Card>
  );
}

export default StreamCard;
