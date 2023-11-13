import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { FavoriteBorderOutlined, FavoriteOutlined, Star } from '@mui/icons-material';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// import StarIcon from '@mui/icons-material/Star';

// Define styles and variables
const cardStyle = {
  minWidth: '100%',
  position: 'relative',
  padding: '4px 4px 8px 4px',
  background: '#F2F4F7',
  borderRadius: '12px',
};
const text ={
    color:'#101828',
    fontSize: '16px',
    fontWeight: '500',
}
const subHeading = {
    color:'#667085',
    fontSize:'12px',
    fontWeight:'400'
}

const prePrice = {
    color:'#667085',
    fontSize:'18px',
    fontWeight:'600',
    textDecoration:'line-through',
    margiRight:'5px',
    marginLeft:'7px'
}
const currentPrice = {
    color:'#D62F7F',
    fontSize:'18px',
    fontWeight:'600'
}

const imageStyle = {
  height: 180,
  borderRadius: '12px',
  '&:hover':{
    cursor: 'pointer',
    opacity: '0.6',
  }
};

const pointsStyle = {
  position: 'absolute',
  top: '12px',
  left:'12px',
  color: '#D62F7F',
  padding: '4px 8px',
  borderRadius: '64px',
  background: '#FFECF5',
  fontSize: '14px',
  fontWeight: 'bold',
};

const headingContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom:'5px'
};

const infoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom:'5px'
};

const btn = {
    display: 'flex',
    padding:' 4px 20px',
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    background:'#D62F7F',
    fontWeight:'bold',
    borderRadius:'64px',
    '&:hover':{
        background:'#db6099',
    }
}




export default function SalesCard() {
  return (
    <Card sx={cardStyle}>
      <CardMedia
        sx={imageStyle}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8Z7PfX6rlFkKIzqW5IwzVTRn1Z681e1-07X-Xq4h9ITI4pKe6ic2ZAmbw1dPsBqbCEk&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <div style={pointsStyle}>Free 20%</div>
        <div style={headingContainerStyle}>
          <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <Avatar sx={{width:'32px',height:'32px'}}>ok</Avatar>
            <div style={text}>

            Alexader Lopez
            </div>
          </div>
          <div className=' fw-bold text-dark'>
            <Star sx={{color:'yellow'}}/>
            4.9
          </div>
        </div>
        <div style={infoContainerStyle}>
          <div style={text}>TrendFusion Headwear</div>
        <FavoriteBorderOutlined sx={{color:'#98A2B3',background:'white',borderRadius:'50%',padding:'3px'}}/>
        </div>
        <div style={subHeading}>
          1233 Sold Out
        </div>
      </CardContent>
      <CardActions>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className='d-flex align-items-center gap-2'>
            <div style={prePrice}>
            $200 
            </div>
            <div style={currentPrice}>$160</div>
            
          </div>
          <Button variant='contained' sx={btn}>Bid</Button>
        </div>
      </CardActions>
    </Card>
  );
}
