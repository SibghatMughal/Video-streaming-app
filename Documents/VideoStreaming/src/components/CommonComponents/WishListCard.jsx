import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { FavoriteBorderOutlined, FavoriteOutlined, Star, StarOutline } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// import StarIcon from '@mui/icons-material/Star';

// Define styles and variables
const cardStyle = {
  minWidth: '100%',
  position: 'relative',
  padding: '4px 4px 8px 4px',
  background: '#F2F4F7',
  borderRadius: '12px',
  marginBottom:'8px'
};
const text ={
    color:'#101828',
    fontSize: '16px',
    fontWeight: '500',
}
const subHeading = {
    color:'#667085',
    fontSize:'12px',
    fontWeight:'400',
    display:'flex',
    alignItems: 'center',
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
  height: 150,
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



const voteSection = {
  width:'100%',
  height:'auto',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column',
  padding:'16px',
  borderRadius:'16px',
  border:'1px solid #EAECF0',
  background:'white',
  gap:'12px'
}

const votebtn = {
    color:'white',
    fontSize:'16px',
    fontWeight:'600',
    borderRadius:'64px',
    padding:'8px 20px',
    background:'#D62F7F',

}



export default function WishLIstCard() {
  return (
    <>
    <Card sx={cardStyle}>
      <CardMedia
        sx={imageStyle}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8Z7PfX6rlFkKIzqW5IwzVTRn1Z681e1-07X-Xq4h9ITI4pKe6ic2ZAmbw1dPsBqbCEk&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <div style={pointsStyle}>Free 20%</div>
        
        <div style={infoContainerStyle}>
          <div style={text}>TrendFusion Headwear</div>
        <FavoriteBorderOutlined sx={{color:'#98A2B3',background:'white',borderRadius:'50%',padding:'3px'}}/>
        </div>

         <div className='d-flex align-items-center gap-4'>

        <div style={subHeading}>
          <div style={subHeading}>
            <StarOutline sx={{color:'#667085',fontSize:'14px'}}/>
            4.9 Rating
          </div>
        </div>
        <div style={subHeading}>
          1233 Sold Out
        </div>

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
        </div>
      </CardActions>
    </Card>
{text=='onlyCard'?'':
    <div style={voteSection}>

        <div className="d-flex align-items-center gap-2 w-100 ">
        <Checkbox
  defaultChecked
  sx={{
    width:'25px',
    height:'25px',
    borderRadius:'100px',
    color: '#D62F7F',
    "&.Mui-checked": {
      color: '#D62F7F',
    },
  }}
/>
<CustomProgressBar value={70} text="70%" />



        </div>

        <div className='d-flex align-items-center  justify-content-between w-100  '>
              <div>
              <AvatarGroup max={3}>
      <Avatar alt="image 1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmrtlPW3QHl2DKdgIttRJxZovXVYsvSqlkQ&usqp=CAU" />
      <Avatar alt="image 2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmrtlPW3QHl2DKdgIttRJxZovXVYsvSqlkQ&usqp=CAU" />
      <Avatar alt="image 3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmrtlPW3QHl2DKdgIttRJxZovXVYsvSqlkQ&usqp=CAU" />
      <Avatar alt="image 4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmrtlPW3QHl2DKdgIttRJxZovXVYsvSqlkQ&usqp=CAU" />
    </AvatarGroup>
              </div>
              <div style={votebtn}>Voted</div>
        </div>
    </div>
}
    </>
  );
}



const CustomProgressBar = ({ value, text }) => {
  const progressBarStyles = {
    width: '100%',
    height: '20px',
    backgroundColor: '#ccc',
    borderRadius: '10px',
    position: 'relative',
  };

  const progressStyles = {
    width: `${value}%`,
    height: '100%',
    backgroundColor: '#D62F7F',
    borderRadius: '10px',
    position: 'absolute',
    transition: 'width 0.3s ease-in-out',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontWeight: 'bold',
  };

  return (
    <div style={progressBarStyles}>
      <div style={progressStyles}>
        <div style={textStyle}>{text}</div>
      </div>
    </div>
  );
};


